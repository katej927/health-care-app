import AverageScoreGraph from './averageScoreGraph';
import ScorePredictGraph from './scorePredictGraph';
import CostPredictionGraph from './costPredictionGraph';
import CompareLastYear from './compareLastYear';

const HealthResult = () => {
  return (
    <section>
      <CompareLastYear />
      <AverageScoreGraph />
      <ScorePredictGraph />
      <CostPredictionGraph />
    </section>
  );
};

export default HealthResult;
