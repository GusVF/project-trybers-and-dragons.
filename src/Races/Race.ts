export default abstract class Race {
  private _name: string;
  private _dexterity: number;

  constructor(name: string, dexterity: number) {
    this._name = name;
    this._dexterity = dexterity;
  }

  abstract get maxLifePoints(): number;

  public static createdRacesInstances(): number {
    throw new Error('Not implemented');
  }

  public get name() {
    return this._name;
  }

  public get dexterity() {
    return this._dexterity;
  }
}