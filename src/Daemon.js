import Character from "./math"

export default class Daemon extends Character {
    constructor(name, stoned = false) {
        super(name)
        this.stoned = stoned
    }
}