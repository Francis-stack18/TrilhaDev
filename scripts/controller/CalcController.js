class CalcController {
  constructor() {
    this._displayCalc = "0";
    this._currentDate;
    this.initialize();
  }

  initialize() {
    let displayCalcEl = document.querySelector("#display");
    let datecEl = document.querySelector("#data");
    let timeEl = document.querySelector("#hora");

    displayCalcEl.innerHTML = "4567"
    datecEl.innerHTML = "29/04/2026"
    timeEl.innerHTML = "11:10"
  }

  get displayCalc() {
    return this.displayCalc;
  }
  set displayCalc(valor) {
    this.displayCalc = valor;
  }

  get dataAtual() {
    return this.currentDate;
  }

  set currentDate(valor) {
    this.currentDate = valor;
  }
}
