(() => {
  // Crear interfaces
  interface Auto {
    encender: Boolean,
    velocidadMaxima: number,
    acelear(): void
  }
  // Cree una interfaz para validar el auto (el valor enviado por parametro)
  const conducirBatimovil = (auto: Auto): void => {
    auto.encender = true;
    auto.velocidadMaxima = 100;
    auto.acelear();
  }

  const batimovil: Auto = {
    encender: false,
    velocidadMaxima: 0,
    acelear() {
      console.log("...... gogogo!!!");
    }
  }

  // Cree una interfaz con que permita utilzar el siguiente objeto
  // utilizando propiedades opcionales

  interface Guason {
    reir: Boolean,
    comer: Boolean,
    llorar: Boolean
  }
  const guason: Guason = {
    reir: true,
    comer: true,
    llorar: false
  }

  const reir = (guason: Guason): void => {
    if (guason.reir) {
      console.log("JAJAJAJA");
    }
  }


  // Cree una interfaz para la siguiente funcion

  interface GothicCity {
    (arg: string[]): number
  }
  const ciudadGotica: GothicCity = (ciudadanos: string[]): number => {
    return ciudadanos.length;
  }

  // Cree una interfaz que obligue crear una clase
  // con las siguientes propiedades y metodos

  interface Human {
    name: string,
    age: number,
    sex: string,
    estadoCivil: string,
    imprimirBio(): void
  }
  /*
    propiedades:
      - nombre
      - edad
      - sexo
      - estadoCivil
      - imprimirBio(): void // en consola una breve descripcion.
  */
  class Persona implements Human {
    constructor(
      public name: string,
      public age: number,
      public sex: string,
      public estadoCivil: string,
    ) { }

    imprimirBio(): void {
      console.log(`My name is ${this.name}, I am ${this.age} years old, I'm ${this.sex} genre and my civil status is ${this.estadoCivil}`)
    }
  }

  const ralph = new Persona("Ralph", 17, "male", "single")
  ralph.imprimirBio()
})()