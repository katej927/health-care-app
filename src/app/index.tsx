import HealthCare from './healthCare';
import MyHealth from './myHealth';
import HealthResult from './healthResult';
import styles from './app.module.scss';

const App = () => {
  return (
    <div className={styles.appWrapper}>
      <div className={styles.app}>
        <h1 className={styles.title}>마이헬스</h1>
        <main className={styles.scrollArea}>
          <MyHealth />
          <HealthResult />
          <HealthCare />
        </main>
      </div>
    </div>
  );
};

export default App;
