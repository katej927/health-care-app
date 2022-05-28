import {
  BMIIcon,
  BloodPressureIcon,
  CholesterolIcon,
  DrinkIcon,
  ExerciseIcon,
  FastingBloodSugerIcon,
  GFRIcon,
  SmokeIcon,
} from 'assets/svgs';
import { THealthTag, healthTagColorDict, healthTagDict } from 'dictionary/healthDicts';

import CurrentStatus from './currentStatus';
import Guide from './guide';
import RecommendKeyword from './recommendKeyword';
import styles from './careResult.module.scss';

interface IProps {
  tag: THealthTag;
  index: string;
}
const CareResult = ({ tag, index }: IProps) => {
  const symbolIcon = {
    resBMI: <BMIIcon />,
    resBloodPressure: <BloodPressureIcon />,
    resTotalCholesterol: <CholesterolIcon />,
    smkQty: <SmokeIcon />,
    resFastingBloodSuger: <FastingBloodSugerIcon />,
    drnkQty: <DrinkIcon />,
    exerciQty: <ExerciseIcon />,
    resGFR: <GFRIcon />,
  }[tag];

  const koreanTag = healthTagDict[tag];
  const color = healthTagColorDict[tag];

  return (
    <li className={styles.wrapper}>
      {symbolIcon}
      <div className={styles.tagNameContainer}>
        <span className={styles.tagIndex}>{index.padStart(2, '0')}</span>
        <span style={{ color }}>{koreanTag}</span>
      </div>
      <CurrentStatus tag={tag} koreanTag={koreanTag} />
      <RecommendKeyword tag={tag} />
      <Guide color={color} tag={tag} />
    </li>
  );
};

export default CareResult;
