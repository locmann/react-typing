import { FC } from 'react';
import Character from '@/shared/ui/Character/Character.tsx';
import styles from './styles.module.css';
import { useScore } from '@/shared/hooks/useScore.ts';
import { useAppDispatch } from '@/app/appStore.ts';
import { changeErrors, changeWords } from '@/entities/dump-text/model/textsSlice.ts';

interface Props {
  userInput: string;
  words: string;
}

const TypedBlock: FC<Props> = ({ userInput, words }) => {
  const dispatch = useAppDispatch();
  const typedCharacters = userInput.split('');

  const { errors, wordCounter } = useScore(typedCharacters, words);
  dispatch(changeErrors(errors));
  dispatch(changeWords(wordCounter));

  return (
    <div className={styles.wrapper}>
      {typedCharacters.map((char, index) => (
        <Character
          character={words[index]}
          typedChar={char}
          key={`${char}_${index}`}
        />
      ))}
    </div>
  );
};

export default TypedBlock;
