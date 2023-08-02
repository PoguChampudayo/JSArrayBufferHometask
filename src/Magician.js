import Character from "./math";

export default class Magician extends Character {
    constructor(name, stoned = false) {
        super(name)
        this.stoned = stoned
    }
}