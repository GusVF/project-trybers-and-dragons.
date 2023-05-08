import Monsters from './Monster';

export default class Dragon extends Monsters {
  constructor() {
    super();
    super._lifePoints = 999;
  }
}