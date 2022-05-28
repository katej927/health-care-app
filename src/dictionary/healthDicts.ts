export type THealthTag =
  | 'resBMI'
  | 'resBloodPressure'
  | 'resFastingBloodSuger'
  | 'resGFR'
  | 'resTotalCholesterol'
  | 'exerciQty'
  | 'smkQty'
  | 'drnkQty';

export const healthTagDict: Record<THealthTag, string> = {
  resBMI: '체질량지수',
  resBloodPressure: '혈압',
  resFastingBloodSuger: '식전혈당',
  resGFR: '신사구체여과율',
  resTotalCholesterol: '총콜레스테롤',
  exerciQty: '운동량',
  smkQty: '흡연',
  drnkQty: '음주',
};

export const healthTagColorDict: Record<THealthTag, string> = {
  resBMI: '#3CCE3D',
  resBloodPressure: '#C63CE7',
  resTotalCholesterol: '#738DFC',
  smkQty: '#529AFC',
  resFastingBloodSuger: '#C63CE7',
  drnkQty: '#FFB850',
  resGFR: '#F9B5B4',
  exerciQty: '#76D3C8',
};

export const healthTagUnit: Record<THealthTag, string> = {
  resBMI: 'kg/㎡',
  resBloodPressure: 'mmHg',
  resTotalCholesterol: 'mg/dL',
  smkQty: '',
  resFastingBloodSuger: 'mg/dL',
  drnkQty: '',
  resGFR: 'mL/min',
  exerciQty: '',
};

interface IHealthStandard {
  range: string;
  exist: boolean;
}

export const healthStandardDict: Record<THealthTag, IHealthStandard> = {
  resBMI: {
    exist: true,
    range: '정상 : 18.5 ~ 22.9 kg/㎡',
  },
  resBloodPressure: {
    exist: true,
    range: '정상 : 이완 60~79 / 수축 90~119 mmHg',
  },
  resTotalCholesterol: {
    exist: true,
    range: '정상 : 200 mg/dL 이하',
  },
  smkQty: {
    exist: false,
    range: '',
  },
  resFastingBloodSuger: {
    exist: true,
    range: '정상 : 69~99 mg/dL',
  },
  drnkQty: {
    exist: false,
    range: '',
  },
  exerciQty: {
    exist: false,
    range: '',
  },
  resGFR: {
    exist: true,
    range: '정상 : 60 mL/min 이상',
  },
};
