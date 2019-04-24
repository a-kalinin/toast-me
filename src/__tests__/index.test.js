import Lib, { test as t } from '../index';
import chalk from 'chalk';

console.log('my beverage test1');

const myBeverage = {
  delicious: true,
  sour: false,
  lib: Lib,
  test: t,
};

describe('my beverage', () => {
  test('is delicious', () => {
    expect(myBeverage.delicious).toBeTruthy();
  });

  test('is not sour', () => {
    expect(myBeverage.sour).toBeFalsy();
  });

  test('run my test', () => {
    console.log(chalk.green('run my test'));
    expect(t).toEqual('my test');
  });
});
