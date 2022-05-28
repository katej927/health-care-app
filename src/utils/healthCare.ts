import { THealthTag } from 'dictionary/healthDicts';
import data from 'data/response.json';

export const useGetWMymaxHscore = (): number => data.wxcResultMap.wMymaxHscore;

export const useGetCurrentStatusByTag = (tag: THealthTag) => {
  return {
    value: data.wxcResultMap.paramMap[tag],
    status: data.wxcResultMap.boj[tag].split('-')[0],
  };
};

export const useGetRecommendKeyword = (tag: THealthTag) => {
  const { healthTagList } = data;
  if (tag === 'resTotalCholesterol') {
    const LDLCount = Object.values(healthTagList.filter((item) => item.tagId === 'resLDLCholesterol')[0]).filter(
      (item) => item === ''
    ).length;
    const HDLCount = Object.values(healthTagList.filter((item) => item.tagId === 'resHDLCholesterol')[0]).filter(
      (item) => item === ''
    ).length;

    if (LDLCount > HDLCount) return healthTagList.filter((item) => item.tagId === 'resHDLCholesterol')[0];

    return healthTagList.filter((item) => item.tagId === 'resLDLCholesterol')[0];
  }
  return healthTagList.filter((item) => item.tagId === tag)[0];
};

export const useGetGuide = (tag: THealthTag) => {
  if (tag === 'resBloodPressure') return data.wxcResultMap.boj[tag].split(' - ').slice(2);
  return data.wxcResultMap.boj[tag].split(' - ').slice(1);
};
