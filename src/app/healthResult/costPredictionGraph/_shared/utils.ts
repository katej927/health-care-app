import Big from 'big.js';
import { COLORS } from '../../_shared';

export interface IConvertedData {
  x: number;
  y: number;
  fill: { bar: string; label: string; scatter: string };
}

const init: IConvertedData[] = [];

export const convertNumToUnit = (num: number) => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

export const convertToData = (costs: number[]) =>
  costs.reduce((acc, cost, i) => {
    if (cost)
      acc[i] = {
        x: i + 1,
        y: cost,
        fill: i
          ? { bar: COLORS.$ORANGE, label: COLORS.$GREY_03, scatter: COLORS.$WHITE }
          : { bar: COLORS.$YELLOW, label: COLORS.$ORANGE, scatter: COLORS.$GREY_02 },
      };
    return acc;
  }, init);

export const compareCost = (curCost: Big, afterCost: number) => {
  const result = curCost.minus(afterCost).toNumber();
  if (result > 0) return { txt: ['현재 보다', `${convertNumToUnit(result)}원 적어요`], costStatus: 'less' };
  if (result < 0)
    return { txt: ['현재 보다', `${convertNumToUnit(new Big(result).abs().toNumber())}원 많아요`], costStatus: 'more' };
  return { txt: ['현재와', `같아요`], costStatus: 'same' };
};
