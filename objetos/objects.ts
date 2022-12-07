(() => {
    let flash: { name: string, age: number, power: string[], getName?: () => string } = {
        name: "Barry Alle",
        age: 24,
        power: ["supervelocidad", "viajar en el tiempo"]
    }

    flash = {
        name: "Clark Kent",
        age: 60,
        power: ["superfuerza"],
        getName() {
            return this.name
        }
    }
    // preguntado al profe en la plataforma
   // TODO console.log(flash.getName())
})()