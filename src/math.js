export default class Character {
    constructor(name) {
        this.name = name
        this.level = 1
        this.health = 100
        this.attack = 100
        this.defence = 40
    }

    getAttack(distance) {
        if (this.stoned) {
            return this.attack - (this.attack * (distance - 1) / 10) - (Math.log2(distance) * 5)
        }
        return this.attack - (this.attack * (distance - 1) / 10)
    }

    getStoned(stoned = true) {
        this.stoned = stoned
    }
}