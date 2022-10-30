import create from 'zustand';
import { logger, immer } from './middleware';

// const gameStore = (state) => ({
//   playerScore: 0,
//   enemyScore: 0,
//   playerScored: () => {
//     console.log('here0');
//     state.playerScore + 1;
//   },
//   enemyScored: () => {
//     console.log('here1');
//     state.enemyScore + 1;
//   },
//   resetGame: () => {},
// });

// export const [useGameStore, GameStore] = create(immer(gameStore));

type GameState = {
  playerScore: number;
  enemyScore: number;
  playerScored: () => void;
  enemyScored: () => void;
  resetGameScore: () => void;
};

export const useGameStore = create<GameState>((set) => ({
  playerScore: 0,
  enemyScore: 0,
  playerScored: () => {
    set((state) => {
      console.log('player scored, gamestore', state);
      return {
        playerScore: state.playerScore + 1,
      };
    });
  },
  enemyScored: () => {
    set((state) => {
      console.log('player scored, gamestore', state);
      return {
        enemyScore: state.enemyScore + 1,
      };
    });
  },
  resetGameScore: () => {
    set((state) => ({
      ...state,
      playerScore: 0,
      enemyScore: 0,
    }));
  },
}));
