# ⛳ Health Care App

- **배포 URL** <br/> https://health-care-app-team1.netlify.app/

<br />

# 🗂 프로젝트 소개
- **개발 기간** 22.05.26 - 22.05.28
- **팀원** 강도희, 김민효, 박솔찬, 신가은, 이다슬, 이우성, 정규재, 정선미, 홍선영
- **프로젝트 개요** <br/>
본 프로젝트는 KB헬스케어 선발 과제로 그래프를 이용한 데이터 시각화 프로젝트입니다.


# 💡 실행 방법
1. repository clone
    
    ```bash
    git clone https://github.com/wanted-pre-onboarding-FE-01/health-care-app.git
    ```
    
2. 해당 프로젝트 폴더로 이동
    
    ```bash
    cd health-care-app
    ```
    
3. 필요 package들 설치
    
    ```bash
    npm intall 
    ```
    
4. 프로젝트 실행
    
    ```bash
    npm start
    ```

<br />

# 📁 폴더 구조
<details>
    <summary>펼치기</summary>
</details>

<br />

# 🔨 기술 스택

<div align="center">
 <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=HTML5&logoColor=white"/>
 <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=CSS3&logoColor=white"/>
 <img src="https://img.shields.io/badge/Sass-CC6699?style=flat-square&logo=Sass&logoColor=white"/>
 <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=TypeScript&logoColor=white"/>
 <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white"/>

 <br/>

|라이브러리|내용|버전|
|:---:|:---:|:---:|
| big.js | 정확한 숫자 계산 | 6.1.1 |
| classnames | style 관련 | 2.3.1 |
| react-icons | 리액트 아이콘 | 4.3.1 |
| react-router-dom | 리액트 라우터 | 6 |
| victory | 차트 라이브러리 | 36.4.1 |

<br/>
</div>

<br />

# 🏞 기능 설명
## 건강 점수
### 1. 건강점수 차트
사용자의 건강점수를 받아 와서 만점 대비 사용자의 점수를 차트로 시각화 `VictoryPie`
```
  const healthScorePortion = (healthScore / MAX_HEALTH_SCORE) * 100;
  const remainder = 100 - healthScorePortion;
```

### 2. 사용자 기본 정보 표시
```
const { sex, resHeight, age } = response
```
비구조화 할당하여 데이터 렌더링

## 나의 건강점수 분석결과
### 1. 건강지수 연도별 변화 차트


### 2. 평균 건강 점수 비교 그래프 
- Victory.js 라이브러리를 이용해 그래프 구현.
- 받아온 데이터를 x축, y축에 보여줄 데이터로 가공하여 그래프에 전달.
- Victory.js의 VictoryBar, VictoryLine, VictoryScatter를 이용해 세가지 형식의 그래프로 보여줌.

```javascript
<VictoryChart>
    <VictoryBar data={GRAPTH_DATA} x='user'y='score' />
    <VictoryLine data={GRAPTH_DATA} x='user' y='score' />
    <VictoryScatter data={GRAPTH_DATA} x='user' y='score' />
</VictoryChart>
```

<br />

### 3. 10년 후 예상 건강 그래프
    
- wxcResultMap > wHscore, wxcResultMap > wHscoreDy 배열의 마지막 값

```typescript
  const {
    wxcResultMap: { wHscore },
    wxcResultMap: { wHscoreDy },
  } = DATA;
  const decade = wHscoreDy.length - 1;
  
  ...
  
  <Compare wHscore={wHscore} wHscoreDy={wHscoreDy[decade]} />

  ...
  
   <DrawGraph wHscore={wHscore} wHscoreDy={wHscoreDy[decade]} />

```

- 현재 내 점수와 10년 후 예상 점수 그래프 비교해서 점수차와 문구 출력
    - 점수가 낮으면 빨강 텍스트 출력
    - 점수가 높으면 파랑 텍스트 출력
    - 점수가 동일하면 검정 텍스트 출력

const Compare = ({ wHscore, wHscoreDy }: IProps) => {
  const gap = wHscore - wHscoreDy;
  if (gap > 0) {
    return <span className={cx(styles.redText, styles.highlight)}>{gap}점 낮아요</span>;
  }
  if (gap < 0) {
    return <span className={cx(styles.blueText, styles.highlight)}>{gap}점 높아요</span>;
 }#
  return <span className={cx(styles.blackText, styles.highlight)}>평균과 같아요</span>;
};

<br />

#### 4. 10년 후 예상 의료비 그래프1
 
## 맞춤 건강관리

### data 가공
<details>
 <summary> 펼치기 </summary>


- useGetWMymaxHscore :: 최대 건강 점수 가져오는 함수
```ts
export const useGetWMymaxHscore = (): number => data.wxcResultMap.wMymaxHscore;
```
- useGetCurrentStatusByTag :: Tag에 따라 현재 현재 상태와 값을 갖고 오는 함수
```ts
export const useGetCurrentStatusByTag = (tag: THealthTag) => {
    return {
        value: data.wxcResultMap.paramMap[tag],
        status: data.wxcResultMap.boj[tag].split('-')[0],
    };
};
```
   
- useGetRecommendKeyword :: 추천 키워드를 가져오는 함수
```ts
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
```
  
- useGetGuide :: Tag별로 해당 추천 가이드를 가져오는 함수
```ts
export const useGetGuide = (tag: THealthTag) => {
  if (tag === 'resBloodPressure') return data.wxcResultMap.boj[tag].split(' - ').slice(2);
    return data.wxcResultMap.boj[tag].split(' - ').slice(1);
  };
```
</details>

### dictionary

<details>
 <summary> 펼치기 </summary>
 
- JS Dictionary 기능을 이용해서 tag별로 해당 데이터를 사용

```ts
export const symbolIcon = {
  resBMI: <BMIIcon />,
  resBloodPressure: <BloodPressureIcon />,
  resTotalCholesterol: <CholesterolIcon />,
  smkQty: <SmokeIcon />,
  resFastingBloodSuger: <FastingBloodSugerIcon />,
  drnkQty: <DrinkIcon />,
  exerciQty: <ExerciseIcon />,
  resGFR: <GFRIcon />,
}[tag];

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
```
</details>