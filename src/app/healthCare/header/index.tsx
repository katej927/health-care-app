import styles from './header.module.scss';
import { useGetWMymaxHscore } from 'utils/healthCare';

const Header = () => {
  const wMymaxHscore = useGetWMymaxHscore();
  return (
    <div className={styles.wrapper}>
      <h3>맞춤 건강관리</h3>
      <div>
        <span>오케어와 함께 건강을 관리해보세요.</span>
        <div>
          건강점수를 <strong>최대 {wMymaxHscore}점</strong>까지 올릴 수 있어요.
        </div>
      </div>
    </div>
  );
};

export default Header;
