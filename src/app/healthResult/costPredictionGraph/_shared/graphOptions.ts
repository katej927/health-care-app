import { COLORS, FONT_WEIGHT, FONT_FAMILY } from 'app/healthResult/_shared';

export const GRAPH_OPTIONS = {
  axis: {
    tickValues: ['나', '10년 후'],
    style: {
      axis: { strokeWidth: 0 },
      tickLabels: {
        fill: COLORS.$GREY_03,
        fontSize: 21,
        fontFamily: FONT_FAMILY,
        fontWeight: FONT_WEIGHT.$BOLD,
        padding: 20,
      },
    },
  },
  bar: {
    barWidth: 50,
    animate: {
      duration: 500,
      onLoad: { duration: 1000 },
    },
  },
  line: {
    style: {
      data: { stroke: COLORS.$GREY_02 },
    },
    animate: { duration: 0, onLoad: { duration: 3000 } },
  },
  scatter: {
    size: 6,
  },
};
