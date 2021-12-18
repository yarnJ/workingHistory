export const addItemCount = (cartItems, addedItem) => {
  const existingItemId = cartItems.find(
    cartItem => cartItem.id === addedItem.id 
  );

  const existingItemName = cartItems.find(
    cartItem => cartItem.name === addedItem.name
  )

  if(existingItemId && existingItemName) {
    return cartItems.map(cartItem => 
        cartItem.id === addedItem.id && cartItem.name === addedItem.name
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
      )
    
  }
    return [ ...cartItems, { ...addedItem, quantity: 1 } ];
  
};

export const increaseItem = (cartItems, increasedItem) => {
  const existingItemId = cartItems.find(
    cartItem => cartItem.id === increasedItem.id 
  );

  const existingItemName = cartItems.find(
    cartItem => cartItem.name === increasedItem.name
  );

  if(existingItemId && existingItemName) {
    return cartItems.map(cartItem => 
        cartItem.id === increasedItem.id && cartItem.name === increasedItem.name
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
      )
    
  }
    return [ ...cartItems, { ...increasedItem, quantity: 1 } ];
}

export const decreaseItem = (cartItems, decreasedItem) => {
  const existingItemId = cartItems.find(
    cartItem => cartItem.id === decreasedItem.id 
  );

  const existingItemName = cartItems.find(
    cartItem => cartItem.name === decreasedItem.name
  );

  if(existingItemId && existingItemName) {
    return cartItems.map(cartItem => 
        cartItem.id === decreasedItem.id && cartItem.name === decreasedItem.name
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
      )
  }

  if(existingItemId.quantity === 0 && existingItemName.quantity === 0) {
    return cartItems.filter(cartItem => cartItem.id !== decreasedItem.id && cartItem.name !== decreasedItem.name)
  }
    return [ ...cartItems, { ...decreasedItem, quantity: 1 } ];
}