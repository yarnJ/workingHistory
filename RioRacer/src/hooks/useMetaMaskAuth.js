/* eslint no-await-in-loop: "off" */
import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useTranslation } from "react-i18next"
import { useHistory } from "react-router-dom"
import Web3 from "web3"
import {
  logoutAction,
  authenticateReqAction,
  authenticateFailAction,
} from "store/auth/actions"
import { closeModalAction } from "store/modal/actions"
import { getBalanceReqAction, getBalanceSuccAction } from "store/coin/actions"
import { authStateSelector } from "store/auth/selectors"
import notify from "components/commons/notification"
import { providers, abi } from "../constants/providers"
import { has, assign } from "lodash"

const welcomeMetaMask =
  'Welcome to Riot Racers!\n\nClick "Sign" to sign in. No password needed!\n\nI accept the Riot Racers Terms of Service: https://riot.fun/terms-of-service'

function useMetaMaskAuth(onMetaMaskNotInstalled) {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const history = useHistory()
  const authState = useSelector(authStateSelector)
  const [accounts, setAccounts] = useState(null)

  useEffect(() => {
    if (accounts) {
      dispatch(logoutAction())
    }
  }, [accounts])

  const findAndCreateOnSuccess = (ethereum, publicAddress, email) => {
    ethereum.eth.personal
      .sign(welcomeMetaMask, publicAddress, "")
      .then((signature) =>
        dispatch(
          authenticateReqAction({ publicAddress, signature, email, history })
        )
      )
      .catch((err) => {
        dispatch(closeModalAction())
        dispatch(authenticateFailAction(err))
      })
  }

  const initInstance = async (auth = false) => {
    if (window.ethereum) {
      if (auth) await window.ethereum.enable()
      window.ethereum.on("accountsChanged", setAccounts)
      return new Web3(window.ethereum)
    } else if (window.web3) {
      return new Web3(window.currentProvider)
    }
    onMetaMaskNotInstalled()
    return null
  }

  const handleAuth = async () => {
    const ethereum = await initInstance(true)
    if (!ethereum) return

    const coinbase = await ethereum.eth.getCoinbase()
    const publicAddress = coinbase.toLowerCase()

    if (!authState.isLoggedIn) {
      findAndCreateOnSuccess(ethereum, publicAddress, null)
    } else if (
      authState.isLoggedIn &&
      (!authState.user.publicAddress ||
        authState.user.publicAddress === publicAddress)
    ) {
      findAndCreateOnSuccess(ethereum, publicAddress, authState.user.email)
    } else {
      notify({ title: t("addressNotAssociated") })
    }
  }

  const getTokenBalance = ({
    ethereum,
    address,
    contractAddress,
    network,
    symbol,
  }) => {
    const tokenContract = new ethereum.eth.Contract(abi, contractAddress)

    return tokenContract.methods
      .balanceOf(address)
      ?.call()
      .then((value) => ({
        [symbol]: ethereum.utils.fromWei(value),
        network,
      }))
      .catch(() => null)
  }

  const getBalance = async (publicAddress = null) => {
    const ethereum = await initInstance()
    if (!ethereum) return

    dispatch(getBalanceReqAction())
    const address = publicAddress || window?.ethereum?.selectedAddress
    if (!address) return

    const promises = []

    providers.forEach(({ network, rpcURL, tokens }) => {
      ethereum.eth.setProvider(new Web3.providers.HttpProvider(rpcURL))

      const swapBalances = tokens.map((token) =>
        getTokenBalance({
          ethereum,
          address,
          network,
          ...token,
        })
      )

      const ethBalance = ethereum.eth
        .getBalance(address)
        .then((value) => ({
          eth: ethereum.utils.fromWei(value),
          network,
        }))
        .catch(() => null)

      promises.push(...[ethBalance, ...swapBalances])
    })

    const balances = await Promise.all(promises)

    const coinBalances = balances.reduce((sum, balance) => {
      if (!balance) return sum
      const { network, ...valueObj } = balance
      if (has(sum, network)) assign(sum[network], valueObj)
      else sum[network] = valueObj
      return sum
    }, {})

    // eslint-disable-next-line
    console.log("balances", coinBalances)

    dispatch(getBalanceSuccAction(coinBalances))
  }

  return {
    handleAuth,
    getBalance,
    publicAddress: authState.isMetaMaskLoggedIn
      ? window?.ethereum?.selectedAddress
      : null,
  }
}

export default useMetaMaskAuth
