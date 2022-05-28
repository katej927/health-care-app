import { THealthTag, healthStandardDict, healthTagUnit } from 'dictionary/healthDicts';

import styles from './currentStatus.module.scss';
import { useGetCurrentStatusByTag } from 'utils/healthCare';

interface IProps {
  tag: THealthTag;
  koreanTag: string;
}

const CurrentStatus = ({ tag, koreanTag }: IProps) => {
  const { value, status } = useGetCurrentStatusByTag(tag);
  const { exist, range } = healthStandardDict[tag];
  const unit = healthTagUnit[tag];
  return (
    <div className={styles.wrapper}>
      <div className={styles.currentContainer}>
        {exist && (
          <span>
            {koreanTag}는 {value}
            {unit}로
          </span>
        )}
        <div>
          <strong>{status}</strong> 입니다.
        </div>
      </div>
      {exist && <div className={styles.standardContainer}>{range}</div>}
    </div>
  );
};

export default CurrentStatus;
