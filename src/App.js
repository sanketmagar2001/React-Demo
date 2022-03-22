import './App.css';
import Login from "./Pages/login";
import ToDo from "./Pages/todo";
import { BrowserRouter, Navigate } from 'react-router-dom';
import { useState } from 'react';
import { Routes,Route } from 'react-router-dom';

const  App = () =>{

  const [user,setUser] = useState(null);

  return (
    <BrowserRouter>
        <Routes>
          {!user && (
              <Route
              path="/login"
              element={<Login authenticate={()=>setUser(true)} />}
              />
          )}
          {user && (
              <Route
              path="/todo"
              element={<ToDo/>}
              />
          )}
          <Route
            path="*"
            element={<Navigate to={user ? "/todo" : "/login" } />}
          />
        </Routes>
    </BrowserRouter>
  );
};

export default App;
