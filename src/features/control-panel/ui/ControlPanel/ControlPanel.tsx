import styles from './styles.module.css';
import { useAppDispatch, useAppSelector } from '@/app/appStore.ts';
import { changeStage, selectGameStage } from '@/entities/dump-text/model/textsSlice.ts';
import Timer from '@/shared/ui/Timer/Timer.tsx';
import { ScoreBoard } from '@/features/control-panel';

const ControlPanel = () => {
  const dispatch = useAppDispatch();
  const stage = useAppSelector(selectGameStage);
  const handleStartGame = () => {
    dispatch(changeStage('running'));
  };

  return (
    <div className={styles.wrapper}>
      {stage === 'start' && (
        <button
          onClick={handleStartGame}
          className={styles.button}
        >
          Start game
        </button>
      )}
      {stage === 'running' && <Timer />}
      {stage === 'complete' && <ScoreBoard />}
    </div>
  );
};

export default ControlPanel;
