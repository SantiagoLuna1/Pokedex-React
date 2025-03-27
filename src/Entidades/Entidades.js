export default class Pokemon{
  constructor(
    id, 
    nombre, 
    imagen, 
    tipos = [], 
    peso, 
    altura, 
    estadisticas = {}, 
    colorTipos, 
    colorFondo, 
    movimientos = [], 
    habilidades = [],
  ) {
    this.id = id;
    this.nombre = nombre;
    this.imagen = imagen;
    this.tipos = tipos;
    this.peso = peso;
    this.altura = altura;
    this.estadisticas = estadisticas;
    this.colorTipos = colorTipos;
    this.colorFondo = colorFondo;
    this.movimientos = movimientos;
    this.habilidades = habilidades;
  }
}
