import Character from '../Character';
import Fighter, { SimpleFighter } from '../Fighter';
import Monster from '../Monster';
import Battle from './Battle';

export default class PVE extends Battle {
  private _player: Character;
  private _monsters: Monster[] | Fighter[] | SimpleFighter[];

  constructor(player: Character, monsters: Monster[] | Fighter[] | SimpleFighter[]) {
    super(player);
    this._player = player;
    this._monsters = monsters;
  }

  private allMonstersDefeat(): boolean {
    return this._monsters.every((monster) => monster.lifePoints === -1);
  }

  override fight(): number {
    this._monsters.forEach((opponent) => {
      if (this._player.lifePoints !== -1 || !this.allMonstersDefeat()) {
        this._player.attack(opponent);
        opponent.attack(this._player);
      }
    });

    const resultBattle = super.fight();
    return resultBattle;
  }
}
