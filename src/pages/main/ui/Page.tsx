import TextBlock from './TextBlock/TextBlock.tsx';
import TypedBlock from '@/pages/main/ui/TypedBlock/TypedBlock.tsx';
import { useAppSelector } from '@/app/appStore.ts';
import { selectGameStage, selectRandomText } from '@/entities/dump-text/model/textsSlice.ts';
import { useTyping } from '@/shared/hooks/useTyping.ts';
import styles from './styles.module.css';
import { ControlPanel } from '@/features/control-panel';

const MainPage = () => {
  const text = useAppSelector(selectRandomText);
  const game = useAppSelector(selectGameStage);

  const { typed } = useTyping(game);

  return (
    <main>
      <div className={styles.textBlock}>
        <TextBlock text={text} />
        <TypedBlock
          userInput={typed}
          words={text}
        />
      </div>

      <ControlPanel />
    </main>
  );
};

export default MainPage;
