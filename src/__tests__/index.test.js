import Lib from '../index';

const myBeverage = {
  delicious: true,
  sour: false,
  lib: Lib,
};

describe('my beverage', () => {
  test('is delicious', () => {
    expect(myBeverage.delicious).toBeTruthy();
  });

  test('is not sour', () => {
    expect(myBeverage.sour).toBeFalsy();
  });
});
