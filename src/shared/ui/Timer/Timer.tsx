import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/app/appStore.ts';
import { decrement, selectCounter } from '@/entities/counter/model/counterSlice.ts';
import { changeStage } from '@/entities/dump-text/model/textsSlice.ts';

const Timer = () => {
  const timer = useAppSelector(selectCounter);
  const dispatch = useAppDispatch();
  useEffect(() => {
    const id = setInterval(() => {
      dispatch(decrement());
    }, 1000);

    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (timer === 0) {
      dispatch(changeStage('complete'));
    }
  }, [timer]);

  return <div>{timer}</div>;
};

export default Timer;
