import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GameStageType } from './types.ts';

interface State {
  texts: string[];
  gameStage: GameStageType;
  errors: number;
  words: number;
}

const initialState: State = {
  texts: [
    'Suspendisse sed tortor ac mauris dapibus congue. Sed ut nibh id urna sollicitudin sagittis at eget sapien. Phasellus nec nunc a massa eleifend accumsan non at ex. ',
    'Vivamus id eleifend mi. Vivamus in tempor diam. Cras bibendum nibh quis consequat molestie. Sed viverra vitae ipsum vel sodales.',
    'Nam porttitor pretium enim, sed viverra augue convallis sed. Morbi consectetur, nibh sit amet blandit mattis, dui lacus rhoncus tortor, non porttitor mauris lacus vel nulla. ',
    'Proin eget imperdiet dolor. Quisque elementum mi vel ipsum sagittis elementum. Ut cursus lacinia semper. Vestibulum lobortis augue sit amet ullamcorper auctor. Interdum et malesuada fames ac ante ipsum primis in faucibus.',
  ],
  gameStage: 'start',
  errors: 0,
  words: 0,
};

export const textsSlice = createSlice({
  name: 'texts',
  initialState,
  reducers: {
    changeStage: (state, { payload }: PayloadAction<GameStageType>) => {
      state.gameStage = payload;
    },
    changeErrors: (state, { payload }: PayloadAction<number>) => {
      state.errors = payload;
    },
    changeWords: (state, { payload }: PayloadAction<number>) => {
      state.words = payload;
    },
  },
  selectors: {
    selectRandomText: createSelector(
      (state: State) => state.texts,
      (texts) => texts[Math.floor(Math.random() * texts.length)],
    ),
    selectGameStage: (state: State) => state.gameStage,
    selectErrors: (state: State) => state.errors,
    selectWords: (state: State) => state.words,
  },
});

export const { selectRandomText, selectGameStage, selectErrors, selectWords } =
  textsSlice.selectors;
export const { changeStage, changeErrors, changeWords } = textsSlice.actions;
export default textsSlice.reducer;
