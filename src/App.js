import { useEffect, useState } from "react";
import "./App.css";
import Home from "./components/Pages/Home";
import Login from "./components/Pages/Login";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import UserProfilePage from "./components/Pages/Home/Main/LeftSide/UserData/FF/UserProfilePage";
import AuthLayout from "./components/authLayout/AuthLayout";

const App = () => {
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [user, setUser] = useState({});





  const loginUser = (user) => {
    setUserLoggedIn(true);
    setUser(user);
    window.sessionStorage.setItem("loggedInUser", JSON.stringify(user));
    window.sessionStorage.setItem("isLoggedIn", "true");
  };

  let userTemp = user;
  let userLoggedInTemp = userLoggedIn;
  if (!Object.keys(user).length || !userLoggedIn) {
    userTemp = window.sessionStorage.getItem("loggedInUser");
    console.log(userTemp);
    userLoggedInTemp = window.sessionStorage.getItem("isLoggedIn") === "true";
    if (userLoggedInTemp) {
      userTemp = JSON.parse(userTemp);
      console.log(userTemp);
     
      loginUser(userTemp);
    }
  }

  const router=createBrowserRouter([
    {
      path:"/login",
      element:<AuthLayout user={user}>
           <Login loginUser={loginUser}/> 
      </AuthLayout>,

    },
    {
      path:"/",
      element:<AuthLayout user={userTemp}>
        <Home user={user}/>
      </AuthLayout>,

    },{
      path:"/profile",
      element:<UserProfilePage/>
    }
  ])

 
 return (
  <div>
    {
      <RouterProvider router={router}/>
    }
  </div>
 )
};

export default App;

