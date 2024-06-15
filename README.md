# health-care-app

<p align='center'>
<img src="https://github.com/katej927/Algorithm/assets/69146527/a51d84a8-f14a-4410-a2c3-fead73faed75" width="300"></img>
<p>

## 1️⃣ 프로젝트 개요

> 그래프 등 다양한 시각적 자료를 통해 회원의 건강 상태를 분석한 결과를 보여주는 앱
> 
- 프론트엔드 9명
- 구현한 부분 : 10년 후 예상 의료비 그래프
- 기간 : ‘22.5.26 ~ 5.28

## 2️⃣ Links

👉 화면 확인 : [배포 링크](https://health-care-app-team1.netlify.app/)

👉 코드 확인 : [내가 구현한 코드](https://github.com/katej927/health-care-app/tree/main/src/app/healthResult/costPredictionGraph), [팀 전체 코드](https://github.com/katej927/health-care-app/tree/main)

## 3️⃣ Techs

※ 제가 사용하지 않은 기술들은 생략했습니다.

- React, Typescript, scss + classnames
- victory
- big.js

## 4️⃣ 구현 내용

※ 팀원분들이 구현하신 것들은 생략했습니다.

### 🔹 Graph 구현
<details>
    <summary>자세히 보기</summary>

<br/>

> `Victory` 라이브러리 		(`Chart`, `Axis`, `Bar`, `Line`, `Scatter`, `Label` 활용)

- 코드

    👉 [실제 코드 보기](https://github.com/wanted-pre-onboarding-FE-01/health-care-app/blob/main/src/app/healthResult/costPredictionGraph/index.tsx)
    
    ```tsx
    		<VictoryChart domainPadding={{ x: 40 }}>
            <VictoryAxis {...GRAPH_OPTIONS.axis} />
            <VictoryBar data={data} style={{ data: { fill: ({ datum }) => datum.fill.bar } }} {...GRAPH_OPTIONS.bar} />
            <VictoryLine data={data} {...GRAPH_OPTIONS.line} />
            {isShowScatter && (
              <VictoryScatter
                data={data}
                labels={({ datum }) => convertNumToUnit(datum.y)}
                style={{
                  data: { fill: ({ datum }) => datum.fill.scatter, stroke: COLORS.$GREY_02, strokeWidth: 2 },
                }}
                labelComponent={
                  <VictoryLabel
                    dy={-20}
                    style={[
                      {
                        fill: ({ datum }) => datum.fill.label,
                        fontSize: 18,
                        fontFamily: FONT_FAMILY,
                        fontWeight: FONT_WEIGHT.$SEMI_BOLD,
                      },
                    ]}
                  />
                }
                {...GRAPH_OPTIONS.scatter}
              />
            )}
          </VictoryChart>
    ```
  
</details>
              
              

            
### 🔹 조건별로 타이틀 내용 및 디자인 변경
<details>
  <summary>자세히 보기</summary>

<br/>

> * 금액이 많으면 ’00원 많아요’ 빨강 텍스트
> * 금액이 적으면 ‘00원 적어요‘ 파랑 텍스트
> * 동일하면 ‘현재와 같아요＇검정 텍스트

- UI
    
    ![](https://velog.velcdn.com/images/katej927/post/fc9d4745-b942-400a-8db2-213e551cbc0d/image.png)

    
- 코드

    👉 [실제 코드 보기](https://github.com/wanted-pre-onboarding-FE-01/health-care-app/tree/main/src/app/healthResult/costPredictionGraph)
    
    ```tsx
    // ./src/app/healthResult/costPredictionGraph/_shared/utils.ts
    export const compareCost = (curCost: Big, afterCost: number) => {
      const result = curCost.minus(afterCost).toNumber();
      if (result > 0) return { txt: ['현재 보다', `${convertNumToUnit(result)}원 적어요`], costStatus: 'less' };
      if (result < 0)
        return { txt: ['현재 보다', `${convertNumToUnit(new Big(result).abs().toNumber())}원 많아요`], costStatus: 'more' };
      return { txt: ['현재와', `같아요`], costStatus: 'same' };
    };
    
    // ./src/app/healthResult/costPredictionGraph/index.tsx
    const { txt, costStatus } = compareCost(currentCost, after10yrsCost);
    (... 생략)
    <mark className={cn(styles.comparedResult, styles[costStatus])}>{txt[1]}</mark>
    ```
    
    ```scss
    // ./src/app/healthResult/costPredictionGraph/costPredictionGraph.module.scss
    .comparedResult {
    
        (... 생략)
    
        &.less {
          color: colors.$BLUE;
        }
    
        &.more {
          color: colors.$ORANGE;
        }
    
        &.same {
          color: colors.$BLACK;
        }
      }
    ```

</details>

            
### 🔹 animation
<details>
  <summary>자세히 보기</summary>

  - 적용된 곳: Graph bar / line / number label, Text Hightlight

- 구현 방법: `victory.js`의 `animate`, `css`의 `animation` / `@keyframes to` / `background` 등
- 코드
    - 그래프

        👉 [실제 코드 보기](https://github.com/wanted-pre-onboarding-FE-01/health-care-app/blob/main/src/app/healthResult/costPredictionGraph/_shared/graphOptions.ts)
        
        ```tsx
        export const GRAPH_OPTIONS = {
          (...생략)
          bar: {
            (...생략)
            animate: {
              duration: 500,
              onLoad: { duration: 1000 },
            },
          },
          line: {
            (...생략)
            animate: { duration: 0, onLoad: { duration: 3000 } },
          },
          (...생략)
        };
        ```
        
    - css
        
        👉 [실제 코드 보기](https://github.com/wanted-pre-onboarding-FE-01/health-care-app/blob/main/src/app/healthResult/costPredictionGraph/costPredictionGraph.module.scss)
        
        ```scss
        .notice {
          (...생략)
        
          .comparedResult {
        
            (...생략)
        
            background: linear-gradient(90deg, colors.$THEME 50%, rgba(255, 255, 255, 0%) 50%);
            background-color: none;
            background-position: 100% 0;
            background-size: 200% 100%;
            animation: 1.5s highlight 1.5s 1 normal forwards;
        
            (...생략)
          }
        
          @keyframes highlight {
            to {
              background-position: 0 0;
            }
          }
        ```

</details>

                
### 🔹 정확한 숫자 계산

<details>
  <summary>자세히 보기</summary>

<br/>

> `big.js` 활용 (선택 이유: `bignumber.js` 보다 작고 단순)
> 

- 코드

    👉 [자세히 보기](https://github.com/wanted-pre-onboarding-FE-01/health-care-app/blob/main/src/app/healthResult/costPredictionGraph/_shared/utils.ts)
    
    ```tsx
    export const compareCost = (curCost: Big, afterCost: number) => {
      (...생략)
      return { txt: ['현재 보다', `${convertNumToUnit(new Big(result).abs().toNumber())}원 많아요`], costStatus: 'more' };
      (...생략)
    };
    ```

</details>

            
### 🔹 semantic tags
<details>
  <summary>자세히 보기</summary>

<br/>

> `article` (컴포넌트), `h3` (강조 구문), `mark` (highlight)
> 
  
- 코드

    👉 [자세히 보기](https://github.com/wanted-pre-onboarding-FE-01/health-care-app/blob/main/src/app/healthResult/costPredictionGraph/index.tsx)
    
    ```html
        <article>
          <h3 className={styles.notice}>
            (...생략)
            <mark className={cn(styles.comparedResult, styles[costStatus])}>{txt[1]}</mark>
          </h3>
          (...생략)
        </article>
    ```

</details>

            
### 🔹 기능별 파일 분리 (Clean Code)
<details>
  <summary>자세히 보기</summary>

<br/>

Clean Code를 위해 기능 단위로 쪼개어 파일을 분리한다. 

ex. UI를 담당할 파일, styles 파일, 기타 폴더(_shared: utils, graphOptions 등)

</details>
