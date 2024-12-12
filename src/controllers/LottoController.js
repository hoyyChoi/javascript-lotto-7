import { Console, Random } from "@woowacourse/mission-utils";
import Lotto from "../models/Lotto.js";
import App from "../App.js";
import { validPurchase } from "../utils/valid/validPurchase.js";

export const LottoController = (purchase) => {
  const amount = validPurchase(purchase);
  Console.print(`${amount / 1000}개를 구매했습니다.`);
  createLotto(amount / 1000);
};

const createLotto = (purchaseCount) => {
  for (let i = 0; i < purchaseCount; i++) {
    const lottoNumber = Random.pickUniqueNumbersInRange(1, 45, 6).sort(
      (a, b) => a - b
    );
    const lotto = new Lotto(lottoNumber);
    Console.print(`[${lottoNumber.join(", ")}]`);
    App.purchaseLottos.push(lotto.getLotto());
  }
};
