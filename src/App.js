import { Random, Console } from "@woowacourse/mission-utils";
class App {
  async play() {
    const carNameInput = await Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)");
    const carNameArray = carNameInput.split(",");
    
  }
}

export default App;
