import CareResult from './careResult';
import Header from './header';
import { THealthTag } from 'dictionary/healthDicts';
import styles from './healthCare.module.scss';

const tags: THealthTag[] = [
  'resBMI',
  'resBloodPressure',
  'resTotalCholesterol',
  'smkQty',
  'resFastingBloodSuger',
  'drnkQty',
  'exerciQty',
  'resGFR',
];

const HealthCare = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <ul className={styles.careResultContainer}>
        {tags.map((tag, index) => {
          const key = `${tag}-${index}`;
          return <CareResult key={key} index={`${index + 1}`} tag={tag} />;
        })}
      </ul>
    </div>
  );
};

export default HealthCare;
