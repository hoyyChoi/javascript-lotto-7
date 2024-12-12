import { Console } from "@woowacourse/mission-utils";
import { PROMPTS } from "../utils/constant.js";
import { validWinningNumber } from "../utils/valid/validWinningNumber.js";
import { validBonusNumber } from "../utils/valid/validBonusNumber.js";
import { LottoController } from "../controllers/LottoController.js";
import { WinningLottoController } from "../controllers/WinningLottoController.js";
import { BonusController } from "../controllers/BonusController.js";
import { WinningLotto } from "../models/WinningLotto.js";

export class InputHandler {
  async #handleInput(prompt, controllerFn) {
    while (true) {
      const result = await Console.readLineAsync(prompt);
      try {
        const returnValue = controllerFn(result); // 반환값 받음
        // return returnValue;
        if (returnValue !== undefined) {
          return returnValue;
        }
        break;
      } catch (error) {
        Console.print(error.message); // 에러 메시지 출력
      }
    }
  }

  purchaseCount() {
    return this.#handleInput(PROMPTS.PURCHASE_AMOUNT, LottoController);
  }

  winningNumber(winningArray) {
    return this.#handleInput(PROMPTS.WINNING_NUMBER, (input) =>
      WinningLottoController(input, winningArray)
    );
  }

  bonusNumber(winningArray) {
    return this.#handleInput(PROMPTS.BONUS_NUMBER, (input) =>
      BonusController(input, winningArray)
    );
  }
}
