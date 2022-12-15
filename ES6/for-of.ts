(() => {
    type Avenger = {
        name: string,
        weapon: string
    }

    const ironman: Avenger = {
        name: "Ironman",
        weapon: "Armorsuit"
    }
    const captainAmerican: Avenger = {
        name: "Capitan America",
        weapon: "Escudo"
    }
    const thor: Avenger = {
        name: "Thor",
        weapon: "Mjolnir"
    }

    const avengers: Avenger[] = [ironman, thor, captainAmerican];

    for (const avenger of avengers) {
        console.log(avenger)
    }
})()