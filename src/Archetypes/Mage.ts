import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  private _damage: EnergyType;
  static countInstancies = 0;

  constructor(name: string) {
    super(name);
    this._damage = 'mana';
    Mage.countInstancies += 1;
  }

  override get energyType(): EnergyType {
    return this._damage;
  }

  static createdArchetypeInstances(): number {
    return this.countInstancies;
  }
}