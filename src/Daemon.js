import Character from "./math"

export default class Daemon extends Character {
    constructor(name, stoned = true) {
        super(name)
        this.stoned = stoned
    }
}