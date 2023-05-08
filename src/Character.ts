import Energy from './Energy';
import Archetype from './Archetypes';
import Fighter from './Fighter';
import Race, { Elf } from './Races';
import getRandomInt from './utils';
import Mage from './Archetypes/Mage';

export default class Character implements Fighter {
  private _name: string;
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;

  constructor(name: string) {
    this._name = name;
    this._dexterity = getRandomInt(10, 1);
    this._race = new Elf(name, this._dexterity);
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._lifePoints = this._maxLifePoints;
    this._archetype = new Mage(name);
    this._strength = getRandomInt(10, 1);
    this._defense = getRandomInt(10, 1);
    this._energy = { type_: this._archetype.energyType,
      amount: getRandomInt(10, 1) };
  }

  public get race():Race {
    return this._race;
  }

  public get archetype(): Archetype {
    return this._archetype;
  }

  public get lifePoints(): number {
    return this._lifePoints;
  }

  public get strength(): number {
    return this._strength;
  }

  public get defense(): number {
    return this._defense;
  }

  public get dexterity(): number {
    return this._dexterity;
  }

  public get energy(): Energy {
    return { type_: this._energy.type_, amount: this._energy.amount };
  }

  receiveDamage(attackPoints: number): number {
    const damage = attackPoints - this._defense;
    if (damage > 0) {
      this._lifePoints -= damage;
    } else if (damage <= 0) {
      this._lifePoints -= 1;
    }
    if (this._lifePoints <= 0) {
      this._lifePoints = -1;
    }
    return this._lifePoints;
  }

  attack(enemy: Fighter): void {
    enemy.receiveDamage(this._strength);
  }

  levelUp(): void {
    this._energy.amount = 10;
    this._maxLifePoints += getRandomInt(10, 1);
    this._dexterity += getRandomInt(10, 1);
    this._strength += getRandomInt(10, 1);
    this._defense += getRandomInt(10, 1);
    if (this._maxLifePoints > this._race.maxLifePoints) {
      this._maxLifePoints = this.race.maxLifePoints;
    }
    this._lifePoints = this._maxLifePoints;
  }
}