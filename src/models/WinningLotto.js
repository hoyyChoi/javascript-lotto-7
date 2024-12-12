import {
  LOTTO_BONUS_FLAG,
  LOTTO_WINNING_FLAG,
  MAX_NUMBER,
} from "../utils/constant.js";

export class WinningLotto {
  #winningLottoArray;

  constructor() {
    this.#winningLottoArray = new Array(MAX_NUMBER + 1).fill(0);
  }
  // 당첨 번호 가공
  setWinningNumbers(winningNumbers) {
    winningNumbers.forEach((number) => {
      this.#winningLottoArray[number] = LOTTO_WINNING_FLAG; // 해당 인덱스 === 당첨 번호를 1로 변경
    });
  }

  // 보너스 번호 가공
  setBonusNumber(bonusNumber) {
    this.#winningLottoArray[bonusNumber] = LOTTO_BONUS_FLAG; // 보너스 번호는 2로 표시
  }

  getWinningNumbersArray() {
    return this.#winningLottoArray;
  }
}
