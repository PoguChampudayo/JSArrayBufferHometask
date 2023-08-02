import Character from "./math";

export default class Magician extends Character {
    constructor(name, stoned = true) {
        super(name)
        this.stoned = stoned
    }
}