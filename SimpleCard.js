export default class SimpleCard {
  constructor(name, dmg) {
    this.name = name;
    this.dmg = dmg;
  }
  damage(health){
    return this.dmg;
  }
}
