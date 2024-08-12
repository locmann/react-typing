import { useCallback, useEffect, useRef, useState } from 'react';
import { isAllowedCode } from '@/shared/helpers/isAllowedCode.ts';
import { GameStageType } from '@/entities/dump-text/model/types.ts';

export const useTyping = (gameStage: GameStageType) => {
  const [typed, setTyped] = useState('');
  const totalTyped = useRef(0);

  const keydownHandler = useCallback(
    ({ key, code }: KeyboardEvent) => {
      if (!isAllowedCode(code) || gameStage !== 'running') {
        return;
      }
      if (key === 'Backspace') {
        setTyped(typed.slice(0, -1));
        totalTyped.current -= 1;
      } else {
        setTyped((prev) => prev + key);
        totalTyped.current += 1;
      }
    },
    [typed, gameStage],
  );

  useEffect(() => {
    window.addEventListener('keydown', keydownHandler);

    return () => {
      window.removeEventListener('keydown', keydownHandler);
    };
  }, [keydownHandler]);

  return { typed, totalTyped: totalTyped.current };
};
