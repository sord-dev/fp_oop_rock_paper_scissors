class Dinosoaur {
    constructor(name, age, diet) {
        this.name = name;
        this.age = age;
        this.diet = diet;
    }

    get roar() {
        console.log(`${this.name} the ${this.species} roars.`)
    }

    feed(food) {
        if (!food) return;
        food !== this.diet
            ? console.log(`${this.name} only eats ${this.diet}.`)
            : console.log(`${this.name} the ${this.species} thanks you for the ${food}`)
    }
}

class Trex extends Dinosoaur {
    constructor(name, age) {
        super(name, age, 'meat')
        this.species = 'Trex';
    }

    charge(target) {
        if (!target instanceof Dinosoaur) return;
        console.log(`the enraged ${this.species} charges at the ${target.species}`)
    }

    static exstinct = false;

    static toggleExtinction() {
        Dinosoaur.exstinct = !Dinosoaur.exstinct;
    }
}

class Stegosaurus extends Dinosoaur {
    constructor(name, age) {
        super(name, age, 'leaves')
        this.species = 'Stegosaurus';
    }

    static exstinct = false;

    static toggleExtinction() {
        Dinosoaur.exstinct = !Dinosoaur.exstinct;
    }
}

const Kyle = new Trex('Kyle', 3);
const Jim = new Stegosaurus('Jim', 27);

Trex.toggleExtinction()

console.log(Trex.exstinct)