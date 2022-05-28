import { COLORS, SIZES, FONT_WEIGHT, FONT_FAMILY } from '../_shared';

const PredictGraphStyle = {
  chart: {
    domainPadding: 20,
    height: 250,
  },
  animate: {
    duration: 1000,
    onLoad: { duration: 2000 },
  },

  bar: {
    barWidth: 35,
    barRatio: 1,
    cornerRadius: 0,
    animate: {
      duration: 500,
      onLoad: { duration: 2000 },
    },
  },

  label: {
    dy: -15,
    fontSize: SIZES.$REGULAR,
  },

  line: {
    style: {
      data: { stroke: COLORS.$GREY_02 },
    },
    animate: {
      duration: 0,
      onLoad: { duration: 2000 },
    },
  },

  axis: {
    style: {
      axis: {
        stroke: 'transparent',
      },
      grid: {
        stroke: 'transparent',
      },
      ticks: {
        stroke: 'transparent',
      },
      tickLabels: { fontFamily: FONT_FAMILY, fontSize: SIZES.$REGULAR, fontWeight: FONT_WEIGHT.$SEMI_BOLD },
    },
  },
};

export default PredictGraphStyle;
