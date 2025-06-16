import { useForm } from "react-hook-form"; 
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Form, Container, Row, Col, Card } from 'react-bootstrap';

function RegisterPage() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { signup, isAuthenticated, logout, errors: registerErrors } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      logout();
      navigate("/login");
    }
  }, [isAuthenticated]);

  const onSubmit = handleSubmit(async (values) => {
    signup(values);
  });

  return (
    <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
      <Row className="w-100">
        <Col md={6} lg={4} className="mx-auto">
          <Card>
            <Card.Body>
              {registerErrors.map((error, i) => (
                <div className="bg-danger p-2 text-white text-center my-2" key={i}>{error}</div>
              ))}

              <h2 className="text-center mb-4">Register</h2>
              <Form onSubmit={onSubmit}>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="text"
                    id="username"
                    placeholder="Enter your username"
                    {...register("username", { required: true })}
                    isInvalid={!!errors.username}
                  />
                  {errors.username && <Form.Control.Feedback type="invalid">Username is required</Form.Control.Feedback>}
                </Form.Group>

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

                <Button type="submit" className="w-100">Register</Button>
              </Form>

              <p className="text-center mt-3">
                Already have an account? <Link to="/login" className="text-primary">Sign in</Link>
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default RegisterPage;





/*import { useForm } from "react-hook-form"; //Tuve que instalar "npm i react-hook-form".
import { registerRequest } from "../api/auth";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function RegisterPage() {

	const {register, handleSubmit, formState: {errors}} = useForm();
	const {signup, isAuthenticated, logout, errors: registerErrors} = useAuth(); //"errors: RegisterErrors", estoy renombrando "errors" a "registerErrors", para que no haya problemas con el "erros" de "useForm()" (formState: {errors}).
  const navigate = useNavigate(); //Sirve para navegar entre páginas.

	useEffect(() => {
    if(isAuthenticated) {
		logout()
		//setIsAuthenticated(false)
		navigate("/login")
	} 
  }, [isAuthenticated])

	const onSubmit = handleSubmit(async (values) => {
		signup(values);
	});

  return (
    <div className="bg-zinc-800 max-w-md p-10 rounded-md">
      {registerErrors.map((error, i) => (<div className="bg-red-500 p-2 text-white" key={i}>{error}</div>))}
	  <h1 className="text-2xl font-bold">Register</h1>
			<form onSubmit={onSubmit}>
				<input type="text" {...register("username", {required: true})} className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2" placeholder="Username" />
        {errors.username && <p className="text-red-500">Username is required</p>}

				<input type="email" {...register("email", {required: true})} className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2" placeholder="Email" />
        {errors.email && <p className="text-red-500">Email is required</p>}

				<input type="password" {...register("password", {required: true})} className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2" placeholder="Password" />
        {errors.password && <p className="text-red-500">Password is required</p>}

				<button type="submit">Register</button>
			</form>

			<p className="flex gap-x-2 justify-between">Already have an account? <Link to="/login" className="text-sky-500">Sign in</Link></p>
		</div>
  )
}

export default RegisterPage*/