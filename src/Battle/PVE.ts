import Battle from './Battle';
import Fighter, { SimpleFighter } from '../Fighter';
// import Monsters from '../Monster';

export default class PVE extends Battle {
  constructor(
    private Fighter1: Fighter,
    private Figther2: (Fighter | SimpleFighter)[],
  ) {
    super(Fighter1);
  }

  fight(): number {
    for (let i = 100; i > -1; i -= 1) {
      this.Figther2.forEach((element) => {
        this.Fighter1.attack(element);
        element.attack(this.Fighter1);
        if (this.Fighter1.lifePoints <= -1 
          || element.lifePoints <= -1) {
          i = -2;
        }
      });
    }
    return super.fight();
  }
}