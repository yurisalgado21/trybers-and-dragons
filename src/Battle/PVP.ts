import Character from '../Character';
import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  private _playerOne: Character | Fighter;
  private _playerTwo: Character | Fighter;
  constructor(playerOne: Character | Fighter, playerTwo: Character | Fighter) {
    super(playerOne);
    this._playerOne = playerOne;
    this._playerTwo = playerTwo;
  }

  override fight(): number {
    const condition = true;
    while (condition) {
      if (this._playerOne.lifePoints === -1 || this._playerTwo.lifePoints === -1) {
        break;
      }
      this._playerOne.attack(this._playerTwo);
      this._playerTwo.attack(this._playerOne);
    }

    const resultBattle = super.fight();
    return resultBattle;
  }
}
