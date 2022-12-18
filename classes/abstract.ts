(() => {
    //Una clase abstracta no sirve para crear instancias de objetos,
    // sirve para crear otras clases o que otras clases sean extendidas de ellas
    abstract class Mutante {
        constructor(
            public name: string,
            public realName: string,
        ) { }
    }

    class Xmen extends Mutante {

        salvarMundo() {
            return `Mundo salvado`
        }

    }
    class Villian extends Mutante {
        conquistarMundo() {
            return `Mundo Conquistado`
        }
    };
    const wolverine = new Xmen("Wolverine", "Logan");
    // console.log(wolverine)
    const magneto = new Villian("Magneto", "Magnus");
    // console.log(magneto)

    // console.log(wolverine.salvarMundo())
    // console.log(magneto.conquistarMundo())

    const printName = (charater: Mutante) => {
        console.log(charater.realName)
    }
    // printName(magneto)


})()