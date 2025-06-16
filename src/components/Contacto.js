//PARA MANEJAR ESTE FORMULARIO, DESDE LA TERMINAL INSTALÉ UNA LIBRERIA EJECUTANDO "npm install react-hook-form" PARA HACER USO DE SU HOOK "useForm".

import { useForm } from 'react-hook-form';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Contacto = () => {
  const { register, handleSubmit } = useForm();

  const enviar = (data) => {
    console.log(data);
  }

  return (
    <div className="container-fluid d-flex align-items-center justify-content-center" style={{ minHeight: '100vh', backgroundColor: '#6c757d' }}>
      <div className="bg-dark p-5 rounded" style={{ width: '100%', maxWidth: '500px' }}>
        <h1 className="main-title text-white text-center mb-4">Contacto</h1>
        <Form className="formulario" onSubmit={handleSubmit(enviar)}>
          <Form.Group className="w-100">
            <Form.Control
              type="text"
              id="nombre"
              placeholder="Ingresá tu nombre"
              {...register("nombre")}
              className="form-control-lg"
              style={{ width: '100%' }}
            />
          </Form.Group>

          <Form.Group className="w-100">
            <Form.Control
              type="email"
              id="email"
              placeholder="Ingresá tu e-mail"
              {...register("email")}
              className="form-control-lg"
              style={{ width: '100%' }}
            />
          </Form.Group>

          <Form.Group className="w-100">
            <Form.Control
              type="phone"
              id="telefono"
              placeholder="Ingresá tu teléfono"
              {...register("telefono")}
              className="form-control-lg"
              style={{ width: '100%' }}
            />
          </Form.Group>

          <Button className="enviar w-100 btn-lg" type="submit" style={{ backgroundColor: '#007bff', borderColor: '#007bff' }}>Enviar</Button>
        </Form>
      </div>
    </div>
  );
}

export default Contacto;



/*import {useForm} from "react-hook-form";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Contacto = () => {

  const {register, handleSubmit} = useForm(); //Fijate que se define casi como el "useState" PERO en lugar de corchetes"[]" lleva llaves "{}". "handleSubmit" es la función que definí pra el "useForm".
  
  const enviar =(data) => { //"data", porque quiero recibir la información con dicha 'variable', es solo para referirse a lo que se cargó en el formulario, puede haber puesto cualquier cosa insted of "data".
    console.log(data);
  }

  return (
    <div className="container">
      <h1 className="main-title">Contacto</h1>
      <Form className="formulario" onSubmit={handleSubmit(enviar)}>
      <Form.Group className="mb-3">
        <Form.Label htmlFor="nombre">Nombre</Form.Label>
        <Form.Control 
          type="text" 
          id="nombre"
          placeholder="Ingresá tu nombre" 
          {...register("nombre")} 
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label htmlFor="email">E-mail</Form.Label>
        <Form.Control 
          type="email" 
          id="email"
          placeholder="Ingresá tu e-mail" 
          {...register("email")} 
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label htmlFor="telefono">Teléfono</Form.Label>
        <Form.Control 
          type="phone" 
          id="telefono"
          placeholder="Ingresá tu teléfono" 
          {...register("telefono")} 
        />
      </Form.Group>

      <Button className="enviar" type="submit">Enviar</Button>
    </Form>
      <form className="formulario" onSubmit={handleSubmit(enviar) /*"enviar", es una función. Esta notación/estructura se debe a que estoy usando justamente el hook "useForm".* /}>
        <input type="text" placeholder="Ingresá tu nombre" {...register("nombre")/*Dentro de los paréntesis está el nombre de la propiedad del objeto "register" (en este caso el nombre de dicha propiedad es "nombre"). Esta estructura es porque estoy usando el hook "useForm". "register", es el objeto donde se guardará esta propiedad "nombre" con su respectivo valor.* /} />
        <input  type="email" placeholder="Ingresá tu e-mail" {...register("email")} />
        <input type="phone" placeholder="Ingresá tu telefono" {...register("telefono")}/>
        <button className="enviar" type="submit">Enviar</button>
      </form>
    </div>
  )
}
export default Contacto
*/

/*ESTA FORMA DE TRABAJAR CON FORMULARIOS ESTA BUENÍÍSIMA, pero la dejo comentada porque arriba se hace mucho más sencillo y 'limpio' usando una libreria.

import { useState } from "react";

const Contacto = () => {

  const [valores, setValores] = useState({nombre:"", email:"", telefono:""});

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Enviado", valores)
  }

  const handleValores = (e) => {
    setValores({...valores, [e.target.name]: e.target.value}) //Gracias a que le puse como caracterísitca "name" a los inputs, el "setValores" reconocerá a qué propiedad de su objeto (si a la prpiedad "nombre" o "email") se estahaciendo referencia. Mirá, vos le estas diciendo que a la propiedad que está encerrada entre corchetes (porque así se referencia una propiedad específica dentro de un objeto, que en este caso no es algo fijo, sino que, el nombe de dicha propiedad la trae el "e.target.name" que justamente está capturando el valor que tiene asignada la característica "name" en cada input) le asigne el "e.target.value" (o sea, lo que vaya recibiendo). Ahora bien, era importante que en los inputs su "name" sea igual a los que se definió en la creación del "useState", porque cuando se capture con "e.target.name" y digamos que el input en cuestión tenga asignado "name="calculadora"" => el "setValores" querrá asignar lo que se vaya obteniendo con "e.target.value" a la propiedad del objeto "valores" que tenga por nombre "calculadora" (que claramente nunca se definió al crear el estado del objeto).
  }


  return (
    <div className="container">
      <h1 className="main-title">Contacto</h1>
      <form className="formulario" onSubmit={handleSubmit}>
        <input type="text" placeholder="Ingresá tu nombre" value={valores.nombre} onChange={handleValores} name="nombre" />
        <input  type="email" placeholder="Ingresá tu e-mail" value={valores.email} onChange={handleValores} name="email" /*Es importante que el "name" de cada "input", conincida con los que puse en el objeto del "useState". para que cuando use la función "handleValores" el "[e.target.name]" relacione autmáticamente a que propiedad del objeto definido en dicho "useState" se está haciendo referencia.* / />
        <input type="phone" placeholder="Ingresá tu telefono" value={valores.telefono} onChange={handleValores} name="telefono" />
        <button className="enviar" type="submit">Enviar</button>
      </form>
    </div>
  )
}
export default Contacto
*/