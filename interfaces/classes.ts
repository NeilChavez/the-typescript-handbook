(() => {
    interface Xmen {
        name: string,
        realName: string,
        mutantPower(id: number): string
    }
    interface Human {
        age: number
    }
    // la palabra implementar se usa para forzar a la class
    // que implemente las caracteristicas de las interfaces,
    // y se pueden usar mas de una interface por clase, separadas por coma
    class Mutant implements Xmen, Human {
        constructor(
            public name: string,
            public realName: string,
            public age: number
        ) { }
        mutantPower(id: number): string {
            return `${this.name} ${this.realName}`
        }
    }

})()