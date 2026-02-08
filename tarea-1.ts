/**
 * Alias de tipo Union 
 */

type identificador = number | string;

/**
 * Interfaz
 */
interface usuario{
    Id: identificador;
    Nombre:string;
    Edad:number;
    fechaNacimiento?: string;
}

/**
 * Funcion
 */

const obtenerInformacion = ():[number, number] => {
    const latitud: number = 1232;
    const longitud: number = 4323;
    return [latitud,longitud];

}

/**
 * Objetos
 */

const informacion :usuario[]=[
    {Id:1, Nombre:"Marlon Martinez", Edad:27}
]

const buscarUsuario = (Id:identificador): usuario | undefined=>{
    return informacion.find(c => c.Id === Id)
}

/**
 * Prueba y destructuracion
 */

const usuarioEncontrado = buscarUsuario(1);

if(usuarioEncontrado){
    const{Nombre,Edad} = usuarioEncontrado;

    const [latitud,longitud] = obtenerInformacion();
    console.log(`Bienvenido ${Nombre} con edad de: ${Edad}`);
    console.log(`Ubicacion actual: Latitud: ${latitud} y Longitud: ${longitud}`)
}
