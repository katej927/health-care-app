import React from 'react';
import { THealthTag } from 'dictionary/healthDicts';
import styles from './guide.module.scss';
import { useGetGuide } from 'utils/healthCare';

interface IProps {
  color: string;
  tag: THealthTag;
}

const Guide = ({ color, tag }: IProps) => {
  const guides = useGetGuide(tag);
  return (
    <div className={styles.wrapper}>
      <span className={styles.header} style={{ color }}>
        이렇게 관리해 보세요!
      </span>
      <ul>
        {guides.map((guide, index) => {
          const key = `${guide}-${index}`;
          return <li key={key}>{guide}</li>;
        })}
      </ul>
    </div>
  );
};

export default Guide;
