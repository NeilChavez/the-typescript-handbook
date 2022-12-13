(() => {

    type Avengers = {
        nick: string;
        ironman: string;
        vision: string;
        activo: boolean;
        poder: number;
    }
    const avengers: Avengers = {
        nick: "Samuel L. Jack",
        ironman: "Rober Downet Jr.",
        vision: "Paul Bettany",
        activo: true,
        poder: 1500
    }

    // const { poder, vision } = avengers;
    // console.log(poder, vision.toUpperCase());

    const printAvenger = ({ironman, ...resto}: Avengers) => {
        console.log(ironman, resto)
    }
    printAvenger(avengers)
})()