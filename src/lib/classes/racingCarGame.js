import { addIdToElements } from '../utils/documentHandler.js';
import { ERROR } from '../utils/constants.js';

export default class RacingCarGame {
  constructor() {
    this.prepareDOM();
    this.carNamesInput = document.querySelector('#car-names-input');
    this.carNamesSubmit = document.querySelector('#car-names-submit');
    this.racingCountInput = document.querySelector('#racing-count-input');
    this.racingCountSubmit = document.querySelector('#racing-count-submit');
    this.countInputPart = document.querySelector('#count-input-part');
    this.resultPart = document.querySelector('#result-part');
    this.carNamesSubmit.addEventListener('click', this.getCarNames.bind(this));
    this.racingCountSubmit.addEventListener(
      'click',
      this.getNumTries.bind(this)
    );
    this.cars = [];
    this.winners = [];
    this.maxProgress = 0;
    this.nTries = 0;
  }

  async prepareDOM() {
    await addIdToElements();
  }

  clearElementsValue(elements) {
    elements.forEach((element) => {
      element.value = '';
    });
  }

  getCarNames() {
    const carNames = this.carNamesInput.value.split(',');
    const WHICH_ERROR = validateCarNamesInput(carNames);
    if (WHICH_ERROR === ERROR.NONE) {
    } else {
      alert(WHICH_ERROR);
      this.clearElementsValue([this.carNamesInput]);
      this.carNamesInput.focus();
    }
  }

  getNumTries() {}
}
