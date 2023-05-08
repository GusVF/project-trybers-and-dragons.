import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  private _Fighter1: Fighter;
  private _Fighter2: Fighter;

  constructor(fighter1: Fighter, fighter2: Fighter) {
    super(fighter1);
    this._Fighter1 = fighter1;
    this._Fighter2 = fighter2;
  }

  fight(): number {
    for (let i = 100; i > -1; i -= 1) {
      this._Fighter1.attack(this._Fighter2);
      this._Fighter2.attack(this._Fighter1);
      if (this._Fighter1.lifePoints === -1 
        || this._Fighter2.lifePoints === -1) {
        i = -2;
      }
    }
    return super.fight();
  }
}