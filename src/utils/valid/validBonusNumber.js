import { ErrorHandler } from "../ErrorHandler.js";
import { ERROR_MESSAGES, MAX_NUMBER, MIN_NUMBER } from "../constant.js";

export const validBonusNumber = (bonusNumber, winningArray) => {
  const number = Number(bonusNumber);
  if (isNaN(number)) ErrorHandler(ERROR_MESSAGES.NUMBER_ONLY);
  if (number < MIN_NUMBER || number > MAX_NUMBER)
    ErrorHandler(ERROR_MESSAGES.RANGE);
  if (winningArray[number] === 1)
    ErrorHandler(ERROR_MESSAGES.DUPLICATE_WINNING_BONUS);
  return number;
};
