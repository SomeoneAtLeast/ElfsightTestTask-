import SearchField from '../../specific-components/SearchField';
import styles from './Main.module.scss';

export const Main = () => {
  return (
    <main className={styles.main}>
      <SearchField />
    </main>
  );
};
