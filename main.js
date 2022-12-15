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
//# sourceMappingURL=main.js.map