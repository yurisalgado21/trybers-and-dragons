// import Character from '../Character';
import Fighter, { SimpleFighter } from '../Fighter';
import Monster from '../Monster';
import Battle from './Battle';

export default class PVE extends Battle {
  protected _player: Fighter;
  protected _monsters: Monster[] | Fighter[] | SimpleFighter[];

  constructor(player: Fighter, monsters: Monster[] | Fighter[] | SimpleFighter[]) {
    super(player);
    this._player = player;
    this._monsters = monsters;
  }

  private allMonstersDefeat(): boolean {
    return this._monsters.every((monster) => monster.lifePoints === -1);
  }

  override fight(): number {
    this._monsters.forEach((opponent: Monster | Fighter | SimpleFighter) => {
      if (this._player.lifePoints !== -1 || !this.allMonstersDefeat()) {
        this._player.attack(opponent as Fighter);
        opponent.attack(this._player);
      }
    });

    const resultBattle = super.fight();
    return resultBattle;
  }
}
