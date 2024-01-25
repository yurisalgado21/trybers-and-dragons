import Race from './Race';

export default class Dwarf extends Race {
  private _maxLifePoints: number;
  private static countInstancies = 0;

  constructor(name: string, dexterity: number, maxLifePoints = 80) {
    super(name, dexterity);
    this._maxLifePoints = maxLifePoints;
    Dwarf.countInstancies += 1;
  }
  
  override get maxLifePoints() {
    return this._maxLifePoints;
  }
  
  static createdRacesInstances(): number {
    return this.countInstancies;
  }
}