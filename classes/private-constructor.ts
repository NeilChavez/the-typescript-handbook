(() => {

    class Apocalipsis {
        // la idea de hacer un onstructor privado es que vamos a controlar
        // la manera en como este constructor puede ser llamado

        // private constructor(public name: string) { }

        // por lo cual si yo le meto PRIVATE no va a poder ser llamado 
        // dentro de la misma clase, es decir que desde a fuera no

        static instance: Apocalipsis;

        private constructor(public name: string) { }

        static callApocalipsis(): Apocalipsis {
            if (!Apocalipsis.instance) {
                Apocalipsis.instance = new Apocalipsis("Soy apocalipsis...el unico")
            }
            return Apocalipsis.instance;
        }
        changeName(newName: string): void { 
            this.name = newName
        }
    }

    const apocalipsis1 = Apocalipsis.callApocalipsis();
    //  apocalipsis1.changeName("Xavier")

    // const acopalipsis = new Apocalipsis("Soy Apocalipsis...el unico")
    // const acopalipsis2 = new Apocalipsis("Soy Apocalipsis2...el unico")
    // const acopalipsis3 = new Apocalipsis("Soy Apocalipsis3...el unico")
    // console.log(acopalipsis, acopalipsis2, acopalipsis3)



})()