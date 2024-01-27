import Character from '../Character';
import Fighter, { SimpleFighter } from '../Fighter';
import Monster from '../Monster';
import Battle from './Battle';

export default class PVE extends Battle {
  private _player: Character;
  private _monsters: Array<Monster | Fighter | SimpleFighter>;

  constructor(player: Character, monsters: Array<Monster | Fighter | SimpleFighter>) {
    super(player);
    this._player = player;
    this._monsters = monsters;
  }

  override fight(): number {
    const resultBattle = super.fight();
    return resultBattle;
  }
}
