import App from "../App.js";

export const CompareLotto = (winningLottoArray, result) => {
  App.purchaseLottos.forEach((lotto) => {
    let count = 0;
    let bonusCount = 0;
    lotto.forEach((number) => {
      if (winningLottoArray[number] === 1) {
        count++;
      } else if (winningLottoArray[number] === 2) {
        bonusCount++;
      }
    });
    if (bonusCount === 1 && count === 5) {
      // 보너스 카운트가 있으면서 현재 카운트 된게 5개면
      result["5+1"]++;
    } else if (count > 2) {
      result[count]++;
    }
  });
};
