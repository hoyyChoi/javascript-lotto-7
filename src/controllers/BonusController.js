import { WinningLotto } from "../models/WinningLotto.js";
import { validBonusNumber } from "../utils/valid/validBonusNumber.js";

/**
 * Description placeholder
 *
 * @param {number} bonusNumber
 * @param {WinningLotto} winningArray
 */
export const BonusController = (bonusNumber, winningArray) => {
  const number = validBonusNumber(bonusNumber, winningArray);

  winningArray.setBonusNumber(number);
};
