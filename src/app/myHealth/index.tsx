import { AiOutlineInfoCircle } from 'react-icons/ai';
import { VictoryPie } from 'victory';

import formatDate from 'utils/formatDate';
import response from '../../data/response.json';
import styles from './myHealth.module.scss';

const MyHealth = () => {
  const MAX_HEALTH_SCORE = 1000;

  const { age, sex, resHeight } = response.wxcResultMap.paramMap;
  const { healthScore, healthDate } = response.userInfo;

  const healthScorePortion = (healthScore / MAX_HEALTH_SCORE) * 100;
  const remainder = 100 - healthScorePortion;

  return (
    <section>
      <div className={styles.contents}>
        <div className={styles.healthScore}>
          <span>김헬스님의 건강점수</span>
          <AiOutlineInfoCircle className={styles.infoIcon} size='18' color='#7d7d79' />
        </div>
        <div className={styles.score}>
          {healthScore}
          <span>점</span>
        </div>
        <VictoryPie
          data={[
            { x: 1, y: remainder, label: ' ' },
            { x: 2, y: healthScorePortion, label: ' ' },
          ]}
          startAngle={120}
          endAngle={-120}
          animate={{
            duration: 2000,
            onLoad: { duration: 2000 },
          }}
          innerRadius={180}
          colorScale={['#d9d9d9', '#f7c505']}
        />
        <div className={styles.date}>{formatDate(healthDate)}</div>
        <button type='button' className={styles.resultButton}>
          건강검진결과 가져오기 {'>'}
        </button>
        <dl className={styles.basicInfo}>
          <dt>기본정보</dt>
          <div>
            <dd className={styles.borderRight}>{sex === 1 ? '남' : '여'}성</dd>
            <dd className={styles.borderRight}>{age}세</dd>
            <dd>{resHeight}cm</dd>
          </div>
        </dl>
      </div>
    </section>
  );
};

export default MyHealth;
