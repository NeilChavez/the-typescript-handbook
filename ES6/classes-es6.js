(() => {
    class Avenger {
        name;
        power;

        constructor(name = "no name", power = 0) {
            this.name = name;
            this.power = power
        }
    }

    // const hulk = new Avenger("Hulk", 90000);
    class FlyingAvenger extends Avenger {
        flying;
        constructor(name, power) {
            super(name, power);
            this.flying = true;
        }

    }
    const falcon = new FlyingAvenger("fAlCoN", 456789);
    console.log(falcon)
})()