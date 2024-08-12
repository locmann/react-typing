import { FC } from 'react';

interface Props {
  text: string;
}

const TextBlock: FC<Props> = ({ text }) => {
  return <div>{text}</div>;
};

export default TextBlock;
