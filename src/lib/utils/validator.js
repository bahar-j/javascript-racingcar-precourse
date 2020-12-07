import { ERROR, CONSTANT_NUM } from './constants.js';

export const validateCarNamesInput = (carNames) => {
  const MIN_LENGTH = 1;
  let WHICH_ERROR = ERROR.NONE;
  let validCarNames = new Set([]);
  carNames.forEach((carName) => {
    if (
      carName.length > CONSTANT_NUM.CAR_NAME_MAX ||
      carName.length < MIN_LENGTH
    ) {
      WHICH_ERROR = ERROR.NUM_OF_INPUT;
    } else {
      if (!validCarNames.has(carName)) {
        validCarNames.add(carName);
      } else {
        WHICH_ERROR = ERROR.DUPLICATED_INPUT;
      }
    }
  });

  return WHICH_ERROR;
};
