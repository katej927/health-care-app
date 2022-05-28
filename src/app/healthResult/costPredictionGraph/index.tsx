import { useState } from 'react';
import { VictoryChart, VictoryAxis, VictoryBar, VictoryScatter, VictoryLine, VictoryLabel } from 'victory';
import Big from 'big.js';

import response from 'data/response.json';
import { convertToData, compareCost, GRAPH_OPTIONS, convertNumToUnit } from './_shared';
import { COLORS, FONT_WEIGHT, FONT_FAMILY } from '../_shared';

import cn from 'classnames';
import styles from './costPredictionGraph.module.scss';

const CostPredictionGraph = () => {
  const [isShowScatter, setIsShowScatter] = useState(false);

  setTimeout(() => setIsShowScatter(true), 2900);

  const { medi, mediDy } = response.wxcResultMap;
  const currentCost = new Big(medi);
  const after10yrsCost = new Big(mediDy[mediDy.length - 1]).toNumber();

  const data = convertToData([currentCost.toNumber(), after10yrsCost]);
  const { txt, costStatus } = compareCost(currentCost, after10yrsCost);

  return (
    <article>
      <h3 className={styles.notice}>
        10년 후 예상 의료비는 <br />
        {txt[0]}&nbsp;
        <mark className={cn(styles.comparedResult, styles[costStatus])}>{txt[1]}</mark>
      </h3>
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
    </article>
  );
};

export default CostPredictionGraph;
