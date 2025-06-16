import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button, Form, Container, Row, Col, Card } from 'react-bootstrap';

function LoginPage() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { signin, errors: signinErrors, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const onSubmit = handleSubmit((data) => {
    signin(data);
  });

  useEffect(() => {
    if (isAuthenticated) navigate('/')
  }, [isAuthenticated]);

  return (
    <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
      <Row className="w-100">
        <Col md={6} lg={4} className="mx-auto">
          <Card>
            <Card.Body>
              {signinErrors.map((error, i) => (
                <div className="bg-danger p-2 text-white text-center my-2" key={i}>{error}</div>
              ))}

              <h2 className="text-center mb-4">Login</h2>
              <Form onSubmit={onSubmit}>
                <Form.Group className="mb-3">
                  
                  <Form.Control
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    {...register("email", { required: true })}
                    isInvalid={!!errors.email}
                  />
                  {errors.email && <Form.Control.Feedback type="invalid">Email is required</Form.Control.Feedback>}
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Control
                    type="password"
                    id="password"
                    placeholder="Enter your password"
                    {...register("password", { required: true })}
                    isInvalid={!!errors.password}
                  />
                  {errors.password && <Form.Control.Feedback type="invalid">Password is required</Form.Control.Feedback>}
                </Form.Group>

                <Button type="submit" className="w-100">Login</Button>
              </Form>

              <p className="text-center mt-3">
                Don't have an account? <Link to="/register" className="text-primary">Sign up</Link>
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default LoginPage;


/*import { useForm } from "react-hook-form"
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";


function LoginPage() {
  const {register, handleSubmit, formState: {errors},} = useForm();
  const {signin, errors: signinErrors, isAuthenticated} = useAuth(); //Desde el contexto estoy trayendo "errors" y renombrandolo "errors: signinErrors".
  const navigate = useNavigate();

  const onSubmit = handleSubmit((data) => {
    signin(data);
  })

  useEffect(() => {
    if(isAuthenticated) navigate('/')
  }, [isAuthenticated])

  return (
  <div className="flex h-[calc(100vh-100px)] items-center justify-center">
    <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">

    {signinErrors.map((error, i) => (<div className="bg-red-500 p-2 text-white text-center my-2" key={i}>{error}</div>))}

      <h1 className="text-2xl font-bold">Login</h1>
      <form onSubmit={onSubmit}>
	  	 	<input type="email" {...register("email", {required: true})} className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2" placeholder="Email" />
          {errors.email && <p className="text-red-500">Email is required</p>}

	  		  <input type="password" {...register("password", {required: true})} className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2" placeholder="Password" />
          {errors.password && <p className="text-red-500">Password is required</p>}

	    	  <button type="submit">Login</button>
	  		</form>

        <p className="flex gap-x-2 justify-between">Don't have an account? <Link to="/register" className="text-sky-500">Sign up</Link></p>
      </div>
  </div>
  )
}

export default LoginPage*/