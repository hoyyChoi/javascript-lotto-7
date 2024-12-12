import { validWinningNumber } from "../utils/valid/validWinningNumber.js";

export const WinningLottoController = (winningLotto, winningLottoArray) => {
  const winningLottoNumber = validWinningNumber(winningLotto);

  winningLottoArray.setWinningNumbers(winningLottoNumber);
};
