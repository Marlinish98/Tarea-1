"use strict";
/**
 * Alias de tipo Union
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Funcion
 */
const obtenerInformacion = () => {
    const latitud = 1232;
    const longitud = -4323;
    return [latitud, longitud];
};
/**
 * Objetos 
 */
const informacion = [
    { Id: 1, Nombre: "Marlon Martinez", Edad: 27 }
];
const buscarUsuario = (Id) => {
    return informacion.find(c => c.Id === Id);
};
/**
 * Prueba y destructuracion
 */
const usuarioEncontrado = buscarUsuario(1);
if (usuarioEncontrado) {
    const { Nombre, Edad } = usuarioEncontrado;
    const [latitud, longitud] = obtenerInformacion();
    console.log(`Bienvenido ${Nombre} con edad de: ${Edad}`);
    console.log(`Ubicacion actual: Latitud: ${latitud} y Longitud: ${longitud}`);
}
//# sourceMappingURL=tarea-1.js.map