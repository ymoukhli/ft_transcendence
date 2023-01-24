import { IGame, IPlayer } from '../interfaces';

class Game implements IGame {
  private _players: IPlayer[];
  public id: string;

  constructor(id: string, players: IPlayer[]) {
    this.players.push(...players);
    this.id = id;
  }

  public get players(): IPlayer[] {
    return this._players;
  }

  public set players(v: IPlayer[]) {
    this._players = v;
  }

  removePlayer(id: string) {
    this._players = this._players.filter((players) => players.id != id);
  }

  addPlayer(player: IPlayer) {
    if (this._players.find((player) => player.id == player.id)) return;
    this._players.push(player);
  }
}
export default Game;
