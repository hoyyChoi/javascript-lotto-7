import { ErrorHandler } from "../ErrorHandler.js";
import {
  ERROR_MESSAGES,
  LOTTO_SIZE,
  MAX_NUMBER,
  MIN_NUMBER,
} from "../constant.js";

export const validWinningNumber = (winningNumber) => {
  const numbers = winningNumber.split(",").map(Number);
  if (numbers.length !== LOTTO_SIZE) ErrorHandler(ERROR_MESSAGES.WINNING_SIZE);
  if (numbers.some((number) => isNaN(number)))
    ErrorHandler(ERROR_MESSAGES.NUMBER_ONLY);
  if (numbers.some((number) => number < MIN_NUMBER || number > MAX_NUMBER))
    ErrorHandler(ERROR_MESSAGES.RANGE);
  if (new Set(numbers).size !== numbers.length)
    ErrorHandler(ERROR_MESSAGES.DUPLICATE_NUMBER);

  return numbers;
};
