(() => {
    class Avenger {
        constructor(
            public name: string,
            public realName: string
        ) {
            // console.log('constructor llamado')
        }
        // <<protegida es que solo funcione dentro
        // de la clase misma o clases que extiendan de la misma>> 
        protected getFullName() {
            return `${this.name} - ${this.realName}`
        }
    }

    class Xmen extends Avenger {
        constructor(
            name: string,
            realName: string,
            public isMutant: boolean
        ) {
            super(name, realName);
        }

        get fullName(){
            return `${this.name} - ${this.realName}`
        }
        set fullName(name: string){
            let nameUpperCase = name.toLocaleUpperCase();
            this.name = nameUpperCase;
        }
        public getFullNameFromXmen() {
            return `${super.getFullName()}`
        }

    }
    const wolverin = new Xmen("Wolverine", "Logan", true);
//   console.log(wolverin)
//   console.log(wolverin.getFullNameFromXmen())

//   console.log(wolverin.fullName)
//   wolverin.fullName = "wolwerin"
//   console.log(wolverin)

})()