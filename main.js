"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
function sumar(a, b) {
    return a + b;
}
const contar = (heroes) => {
    return heroes.length;
};
const superHeroes = ["Flash", "Arrow", "Superman", "Linterna Verde"];
contar(superHeroes);
const llamarBatman = (llamar = false) => {
    if (llamar) {
        console.log("Batiseñal activada");
    }
};
llamarBatman();
const unirheroes = (...personas) => {
    return personas.join(", ");
};
const noHaceNada = (numero, texto, booleano, arreglo) => { };
let noHaceNadaTampoco;
noHaceNadaTampoco = noHaceNada;
(() => {
    const conducirBatimovil = (auto) => {
        auto.encender = true;
        auto.velocidadMaxima = 100;
        auto.acelear();
    };
    const batimovil = {
        encender: false,
        velocidadMaxima: 0,
        acelear() {
            console.log("...... gogogo!!!");
        }
    };
    const guason = {
        reir: true,
        comer: true,
        llorar: false
    };
    const reir = (guason) => {
        if (guason.reir) {
            console.log("JAJAJAJA");
        }
    };
    const ciudadGotica = (ciudadanos) => {
        return ciudadanos.length;
    };
    class Persona {
        constructor(name, age, sex, estadoCivil) {
            this.name = name;
            this.age = age;
            this.sex = sex;
            this.estadoCivil = estadoCivil;
        }
        imprimirBio() {
            console.log(`My name is ${this.name}, I am ${this.age} years old, I'm ${this.sex} genre and my civil status is ${this.estadoCivil}`);
        }
    }
    const ralph = new Persona("Ralph", 17, "male", "single");
    ralph.imprimirBio();
})();
const batimovil = {
    carroceria: "Negra",
    modelo: "6x6",
    antibalas: true,
    pasajeros: 4
};
const bumblebee = {
    carroceria: "Amarillo con negro",
    modelo: "4x2",
    antibalas: true,
    pasajeros: 4,
    disparar() {
        console.log("Disparando");
    }
};
const villanos = [{
        nombre: "Lex Luthor",
        edad: 54,
        mutante: false
    }, {
        nombre: "Erik Magnus Lehnsherr",
        edad: 49,
        mutante: true
    }, {
        nombre: "James Logan",
        edad: undefined,
        mutante: true
    }];
const charles = {
    poder: "psiquico",
    estatura: 1.78
};
const apocalipsis = {
    lider: true,
    miembros: ["Magneto", "Tormenta", "Psylocke", "Angel"]
};
console.log(apocalipsis);
let mystique;
mystique = charles;
mystique = apocalipsis;
(() => {
    const a = 10;
    console.log(a);
})();
(() => {
    const avengers = {
        nick: "Samuel L. Jack",
        ironman: "Rober Downet Jr.",
        vision: "Paul Bettany",
        activo: true,
        poder: 1500
    };
    const printAvenger = (_a) => {
        var { ironman } = _a, resto = __rest(_a, ["ironman"]);
        console.log(ironman, resto);
    };
    printAvenger(avengers);
})();
(() => {
    const ironman = {
        name: "Ironman",
        weapon: "Armorsuit"
    };
    const captainAmerican = {
        name: "Capitan America",
        weapon: "Escudo"
    };
    const thor = {
        name: "Thor",
        weapon: "Mjolnir"
    };
    const avengers = [ironman, thor, captainAmerican];
    for (const avenger of avengers) {
        console.log(avenger);
    }
})();
(() => {
    const nombre = "Neil";
    const getName = () => {
        console.log(nombre);
    };
})();
(() => {
    class Mutante {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
        }
    }
    class Xmen extends Mutante {
        salvarMundo() {
            return `Mundo salvado`;
        }
    }
    class Villian extends Mutante {
        conquistarMundo() {
            return `Mundo Conquistado`;
        }
    }
    ;
    const wolverine = new Xmen("Wolverine", "Logan");
    const magneto = new Villian("Magneto", "Magnus");
    const printName = (charater) => {
        console.log(charater.realName);
    };
})();
(() => {
    class Avenger {
        static getAvgAge() {
            return this.name;
        }
        constructor(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
        bio() {
            return `${this.name} (${this.team})`;
        }
    }
    Avenger.avgAge = 35;
})();
(() => {
    class Avenger {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
        }
        getFullName() {
            return `${this.name} - ${this.realName}`;
        }
    }
    class Xmen extends Avenger {
        constructor(name, realName, isMutant) {
            super(name, realName);
            this.isMutant = isMutant;
        }
        get fullName() {
            return `${this.name} - ${this.realName}`;
        }
        set fullName(name) {
            let nameUpperCase = name.toLocaleUpperCase();
            this.name = nameUpperCase;
        }
        getFullNameFromXmen() {
            return `${super.getFullName()}`;
        }
    }
    const wolverin = new Xmen("Wolverine", "Logan", true);
})();
(() => {
    class Apocalipsis {
        constructor(name) {
            this.name = name;
        }
        static callApocalipsis() {
            if (!Apocalipsis.instance) {
                Apocalipsis.instance = new Apocalipsis("Soy apocalipsis...el unico");
            }
            return Apocalipsis.instance;
        }
        changeName(newName) {
            this.name = newName;
        }
    }
    const apocalipsis1 = Apocalipsis.callApocalipsis();
})();
(() => {
    let flash = {
        name: "Barry Alle",
        age: 24,
        power: [1, 1]
    };
    let superman = {
        name: "Barry Alle",
        age: 24,
        power: [1, 1]
    };
})();
(() => {
    class Mutant {
        constructor(name, realName, age) {
            this.name = name;
            this.realName = realName;
            this.age = age;
        }
        mutantPower(id) {
            return `${this.name} ${this.realName}`;
        }
    }
})();
(() => {
    const client = {
        name: "Neil",
        age: 25,
        address: {
            id: 125,
            zip: "ZVB YUI",
            city: "Paris"
        },
        getFullAddress(id) {
            return `${this.address.zip}`;
        }
    };
    const me = {
        name: "Me",
        age: 26,
        address: {
            id: 234,
            city: "Madrid",
            zip: "UHG YgI",
        },
        getFullAddress(id) {
            return `${this.address.zip}`;
        }
    };
})();
(() => {
    let addToNumbersFunction;
    addToNumbersFunction = (a, b) => {
        return 10;
    };
})();
(() => {
    let flash = {
        name: "Barry Alle",
        age: 24,
        power: ["supervelocidad", "viajar en el tiempo"]
    };
    flash = {
        name: "Clark Kent",
        age: 60,
        power: ["superfuerza"],
        getName() {
            return this.name;
        }
    };
})();
(() => {
    let flash = {
        name: "Barry Alle",
        age: 24,
        power: [1, 1]
    };
    let superman = {
        name: "Barry Alle",
        age: 24,
        power: [1, 1]
    };
})();
(() => {
    let myCustomVariable = "Neil";
    console.log(myCustomVariable);
})();
//# sourceMappingURL=main.js.map