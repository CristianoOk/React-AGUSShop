import { createContext, useContext, useEffect, useState } from "react";
import { loginRequest, registerRequest, verifyTokenRequest } from "../api/auth";
import Cookies from 'js-cookie'

export const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if(!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({children}) =>{
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(true);


  const signup = async (user) => {

    try {
      const res = await registerRequest(user);
		console.log(res.data);
    setUser(res.data)
    setIsAuthenticated(true);
    } catch (error) {
      console.log(error.response)
      setErrors(error.response.data)
    }
  }

    
    const signin = async (user) =>{
    try {
      const res = await loginRequest(user)
      console.log(res)
      setIsAuthenticated(true);
      setUser(res.data)
    } catch (error) {
      if(Array.isArray(error.response.data)) { 
      }
      setErrors([error.response.data.message]) 
    }
  }

  const logout = () => {
    Cookies.remove("token");
    setIsAuthenticated(false);
    setUser(null);
  }

  useEffect(() => {
    if(errors.length > 0) {
      const timer = setTimeout(() => {setErrors([])}, 5000)
      return () => clearTimeout(timer)
    }
  }, [errors])

  useEffect(() => {
    async function checkLogin() {
      const cookies = Cookies.get();

      if(!cookies.token) {
        setIsAuthenticated(false);
        setLoading(false)
        return //setUser(null)
      }
    
    try {
      const res = await verifyTokenRequest(cookies.token)
      if(!res.data) {
        setIsAuthenticated(false)
        setLoading(false)
        return;
      }
      setIsAuthenticated(true);
      setUser(res.data);
      setLoading(false);
    } catch (error) {
      console.log(error)
      setIsAuthenticated(false)
      setUser(null)
      setLoading(false)
    }
    
    }
    checkLogin();
  }, []) //Cree todo esto, ya que, la función del "useEffect" no puede ser asincrónica => de esta forma hago que llame a otra función que si lo es.

  return (
    <AuthContext.Provider value={{signup, signin, logout, loading, user, isAuthenticated, errors}}>{children}</AuthContext.Provider>
  )
}