import cn from 'classnames';
import data from '../../../data/response.json';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryLine, VictoryScatter } from 'victory';
import { CallbackArgs } from 'victory-core';
import styles from './averageScoreGraph.module.scss';
import { COLORS, SIZES, FONT_WEIGHT, FONT_FAMILY } from '../_shared/styles';

const AverageScoreGraph = () => {
  const { userInfo, wxcResultMap } = data;

  const GRAPTH_DATA = [
    { user: '나', score: userInfo.healthScore },
    { user: '30대 남성', score: wxcResultMap.hscore_peer },
  ];

  const isHigherMyScore = userInfo.healthScore > wxcResultMap.hscore_peer;
  const scoreDifference = userInfo.healthScore - wxcResultMap.hscore_peer;
  const isHighRank = wxcResultMap.hscorePercent > 50;

  return (
    <div className={styles.averageWrapper}>
      <div className={styles.descriptionWrapper}>
        <div className={styles.scoreTextWrapper}>
          <p>30대 남성 평균 점수보다</p>
          <div className={cn(styles.score, { [styles.highScoreColor]: isHigherMyScore })}>
            {isHigherMyScore ? scoreDifference : -scoreDifference}점 {isHigherMyScore ? '높아요.' : '낮아요.'}
          </div>
          <div className={styles.highLight} />
        </div>
        <div>
          <p className={styles.rankText}>
            {isHighRank ? '상위' : '하위'} {100 - wxcResultMap.hscorePercent}%
          </p>
          <div className={styles.highLight} />
        </div>
      </div>
      <VictoryChart domainPadding={40}>
        <VictoryAxis
          style={{
            axis: { stroke: 'rgba(255, 99, 71, 0)' },
            tickLabels: {
              fontSize: SIZES.$MEDIUM,
              fontWeight: FONT_WEIGHT.$SEMI_BOLD,
              fill: COLORS.$GREY_03,
              fontFamily: FONT_FAMILY,
            },
          }}
        />
        <VictoryBar
          data={GRAPTH_DATA}
          x='user'
          y='score'
          style={{
            data: { fill: ({ datum }) => (datum.user === '나' ? COLORS.$YELLOW : COLORS.$ORANGE) },
            labels: {
              fill: ({ datum }: CallbackArgs) => (datum.user === '나' ? COLORS.$ORANGE : COLORS.$GREY_03),
              fontSize: SIZES.$MEDIUM,
              fontWeight: FONT_WEIGHT.$SEMI_BOLD,
              fontFamily: FONT_FAMILY,
            },
          }}
          labels={({ datum }) => `${Math.floor(datum.score)}점`}
          barWidth={40}
          height={250}
          animate={{
            duration: 1000,
            onLoad: { duration: 3000 },
          }}
        />
        <VictoryLine
          data={GRAPTH_DATA}
          x='user'
          y='score'
          style={{ data: { stroke: COLORS.$GREY_02 } }}
          animate={{
            duration: 1000,
            onLoad: { duration: 3000 },
          }}
        />
        <VictoryScatter
          data={GRAPTH_DATA}
          x='user'
          y='score'
          style={{
            data: {
              fill: ({ datum }) => (datum.user === '나' ? COLORS.$GREY_02 : '#ffffff'),
              stroke: COLORS.$GREY_02,
              strokeWidth: 2,
            },
          }}
          size={6}
        />
      </VictoryChart>
    </div>
  );
};

export default AverageScoreGraph;
