import { useAppSelector } from '@/app/appStore.ts';
import { selectErrors, selectWords } from '@/entities/dump-text/model/textsSlice.ts';
import styles from './styles.module.css';

const ScoreBoard = () => {
  const errors = useAppSelector(selectErrors);
  const wpm = useAppSelector(selectWords);

  return (
    <div className={styles.wrapper}>
      Errors: {errors}, WPM: {wpm * 6}
    </div>
  );
};

export default ScoreBoard;
