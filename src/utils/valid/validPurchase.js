import { ErrorHandler } from "../ErrorHandler.js";
import { ERROR_MESSAGES } from "../constant.js";

export const validPurchase = (amount) => {
  if (typeof amount === "number") ErrorHandler(ERROR_MESSAGES.NUMBER_ONLY);
  if (amount % 1000 !== 0) ErrorHandler(ERROR_MESSAGES.PURCHASE_AMOUNT);
  return amount;
};
