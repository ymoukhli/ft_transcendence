export interface IPlayer {
  id: string;
  username: string;
}

export interface IGame {
  id: string;
  players: IPlayer[];
}
