import { THealthTag } from 'dictionary/healthDicts';
import styles from './recommendKeyword.module.scss';
import { useGetRecommendKeyword } from 'utils/healthCare';

interface IProps {
  tag: THealthTag;
}

const RecommendKeyword = ({ tag }: IProps) => {
  const { tag1, tag2, tag3 } = useGetRecommendKeyword(tag);
  return (
    <ul className={styles.wrapper}>
      <div className={styles.itemContainer}>
        {tag1 && <li>#{tag1}</li>}
        {tag2 && <li>#{tag2}</li>}
        {tag3 && <li>#{tag3}</li>}
      </div>
    </ul>
  );
};

export default RecommendKeyword;
