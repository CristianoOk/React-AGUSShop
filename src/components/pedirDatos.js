import data from "../db/users.json";

export const pedirDatos = (nombre, contraseña) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = data.find((jaj) => jaj.nombre === nombre && jaj.contraseña === contraseña);
      //console.log(user)
      if(user) {
      resolve (user);
    }else {
      reject({error: "QUIENES SOON"})}
    }, 500);
  })
}
/* else {
      reject( "QUIENES SOON")}
    }, 500);*/