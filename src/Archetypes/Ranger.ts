import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Ranger extends Archetype {
  private _damage: EnergyType;
  private static _countInstancies = 0;

  constructor(name: string) {
    super(name);
    this._damage = 'stamina';
    Ranger._countInstancies += 1;
  }

  override get energyType(): EnergyType {
    return this._damage;
  }

  static createdArchetypeInstances() {
    return this._countInstancies;
  }
}