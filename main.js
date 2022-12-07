"use strict";
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
})();
(() => {
    let myCustomVariable = "Neil";
    console.log(myCustomVariable);
})();
//# sourceMappingURL=main.js.map