
// Objetos
type Maquina = {
  carroceria: string,
  modelo: string,
  antibalas: Boolean,
  pasajeros: number,
  disparar?: () => void
}
const batimovil: Maquina = {
  carroceria: "Negra",
  modelo: "6x6",
  antibalas: true,
  pasajeros: 4
};

const bumblebee: Maquina = {
  carroceria: "Amarillo con negro",
  modelo: "4x2",
  antibalas: true,
  pasajeros: 4,
  disparar() { // El metodo disparar es opcional
    console.log("Disparando");
  }
};


// Villanos debe de ser un arreglo de objetos personalizados
type Characters = {
  nombre: string,
  edad?: number,
  mutante: boolean
}

const villanos: Characters[] = [{
  nombre: "Lex Luthor",
  edad: 54,
  mutante: false
}, {
  nombre: "Erik Magnus Lehnsherr",
  edad: 49,
  mutante: true
}, {
  nombre: "James Logan",
  edad: undefined,
  mutante: true
}];

// Multiples tipos
// cree dos tipos, uno para charles y otro para apocalipsis
type Char = {
  poder: string,
  estatura: number
}
type Apo = {
  lider: boolean,
  miembros: string[]
}
const charles: Char = {
  poder: "psiquico",
  estatura: 1.78
};

const apocalipsis: Apo = {
  lider: true,
  miembros: ["Magneto", "Tormenta", "Psylocke", "Angel"]
}

// Mystique, debe poder ser cualquiera de esos dos mutantes (charles o apocalipsis)


console.log(apocalipsis)
let mystique: Apo | Char;
mystique = charles;
mystique = apocalipsis;
