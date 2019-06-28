export class Animal {
    constructor(type, legs) {
        this.type = type;
        this.legs = legs;
    }

    MakeNoise(sound = "Loud Noise") {
        console.log(sound);
    }

    get MetaData() {
        return `Type: ${this.type}, Legs: ${this.legs}`;
    }

    static return10() {
        return 10;
    }
}

export class Cat extends Animal {
    constructor(type, legs, tail) {
        super(type, legs);
        this.tail = tail;
    }
    MakeNoise(sound = "Meow") {
        console.log(sound);
    }

    
}