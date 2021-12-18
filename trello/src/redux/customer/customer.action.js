import CustomerType from "./customer.type";

export const nextCarousel = num => ({
  type: CustomerType.NEXT_CAROUSEL,
  payload: num
});

export const prevCarousel = num => ({
  type: CustomerType.PREV_CAROUSEL,
  payload: num
});