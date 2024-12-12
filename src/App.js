import { Console, Random } from "@woowacourse/mission-utils";
import { InputHandler } from "./views/InputHandler.js";
import { LottoController } from "./controllers/LottoController.js";
import { WinningLottoController } from "./controllers/WinningLottoController.js";
import { WinningLotto } from "./models/WinningLotto.js";
import { CompareLotto } from "./controllers/CompareLotto.js";

class App {
  static purchaseLottos = [];
  // 1로 바뀌면 그게 당첨 번호 -> index로 당첨 번호 (해시테이블 기반)
  // winningLottoArray = new Array(46).fill(0);
  result = {
    3: 0,
    4: 0,
    5: 0,
    "5+1": 0,
    6: 0,
  };
  constructor() {
    this.input = new InputHandler();
    this.winningLottoArray = new WinningLotto();
  }

  async run() {
    await this.input.purchaseCount();
    await this.input.winningNumber(this.winningLottoArray);
    await this.input.bonusNumber(this.winningLottoArray);

    CompareLotto(this.winningLottoArray.getWinningNumbersArray(), this.result);

    ////////////////////////////////////

    Console.print(`3개 일치 (5,000원) - ${this.result[3]}개`);
    Console.print(` 4개 일치 (50,000원) - ${this.result[4]}개`);
    Console.print(`5개 일치 (1,500,000원) - ${this.result[5]}개`);
    Console.print(
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${this.result["5+1"]}개`
    );
    Console.print(`6개 일치 (2,000,000,000원) - ${this.result[6]}개`);

    Console.print(`총 수익률은 ${this.calculator()}%입니다.`);
  }

  calculator() {
    const winningPrice =
      2000000000 * this.result[6] +
      30000000 * this.result["5+1"] +
      1500000 * this.result[5] +
      50000 * this.result[4] +
      5000 * this.result[3];

    const rate = (winningPrice / (App.purchaseLottos.length * 1000)) * 100;
    return rate.toFixed(1);
  }
}

export default App;
