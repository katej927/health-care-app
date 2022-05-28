import {
  VictoryAxis,
  VictoryBar,
  VictoryChart,
  VictoryLabel,
  VictoryLine,
  VictoryScatter,
  VictoryTheme,
} from 'victory';
import { CallbackArgs } from 'victory-core';

import { COLORS, SIZES, FONT_WEIGHT } from '../_shared';

interface IProps {
  chartDataList: {
    SCORE: number;
    SUBMIT_DATE: number;
    INDEX: number;
  }[];
}

const Chart = ({ chartDataList }: IProps) => {
  return (
    <VictoryChart
      theme={VictoryTheme.material}
      domainPadding={20}
      height={250}
      animate={{
        duration: 2000,
        onLoad: { duration: 10 },
        easing: 'linear',
      }}
    >
      <VictoryAxis
        style={{
          tickLabels: { fontSize: SIZES.$REGULAR, fontWeight: FONT_WEIGHT.$SEMI_BOLD, fill: COLORS.$GREY_03 },
          axis: {
            stroke: 'transparent',
          },
          grid: {
            stroke: 'transparent',
          },
          ticks: {
            stroke: 'transparent',
          },
        }}
        tickValues={chartDataList.map((chartData) => chartData.INDEX)}
        tickFormat={chartDataList.map((chartData) => String(chartData.SUBMIT_DATE))}
      />
      <VictoryBar
        alignment='middle'
        barWidth={35}
        barRatio={1}
        cornerRadius={0}
        style={{
          data: {
            fill: ({ index }) => (index === chartDataList.length - 1 ? COLORS.$YELLOW : COLORS.$GREY_01),
          },
        }}
        data={chartDataList}
        x='INDEX'
        y='SCORE'
      />
      <VictoryLine
        style={{
          data: {
            stroke: COLORS.$GREY_03,
          },
        }}
        data={chartDataList}
        x='INDEX'
        y='SCORE'
      />
      <VictoryScatter
        style={{
          data: {
            fill: ({ index }) => (index === chartDataList.length - 1 ? COLORS.$ORANGE : '#ffffff'),
            stroke: ({ index }) => (index === chartDataList.length - 1 ? COLORS.$ORANGE : COLORS.$GREY_03),
            strokeWidth: 2,
          },
          labels: {
            fontSize: SIZES.$REGULAR,
            fontWeight: FONT_WEIGHT.$SEMI_BOLD,
            fill: ({ index }: CallbackArgs) => (index === chartDataList.length - 1 ? COLORS.$ORANGE : COLORS.$GREY_03),
          },
        }}
        labelComponent={<VictoryLabel renderInPortal dy={-15} />}
        labels={chartDataList.map((chartData) => `${chartData.SCORE}점`)}
        size={4}
        data={chartDataList}
        x='INDEX'
        y='SCORE'
      />
    </VictoryChart>
  );
};

export default Chart;
