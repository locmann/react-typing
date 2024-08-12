import { FC } from 'react';

interface Props {
  character: string;
  typedChar: string;
}

const Character: FC<Props> = ({ character, typedChar }) => {
  return (
    <span
      style={{
        color: character === typedChar ? 'green' : 'red',
      }}
    >
      {character}
    </span>
  );
};

export default Character;
