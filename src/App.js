import { useEffect, useState } from "react";
import "./App.css";
import Home from "./components/Pages/Home";
import Login from "./components/Pages/Login";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import UserProfilePage from "./components/Pages/Home/Main/LeftSide/UserData/FF/UserProfilePage";
import AuthLayout from "./components/authLayout/AuthLayout";
// import ServicesNavbar from "./components/Pages/Home/Main/LeftSide/UserData/FF/ServicesNavbar";
import Called from "./components/Pages/Home/Main/LeftSide/UserData/FF/Called";
import FormPage from "./components/Pages/Home/Main/LeftSide/UserData/FF/FormPage";
import MentorProfile from "./components/Pages/Home/Main/Middle/PostList/Post/MentorProfile";
import Called2 from "./components/Pages/Home/Main/Middle/PostList/Post/Called2";
import Book from "./components/Pages/Home/Main/Middle/PostList/Post/Book";
import SignUp from "./components/Pages/Login/SignUp";

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
      element:<AuthLayout user={user}>
        <Home user={user}/>
      </AuthLayout>,

    },{
      path:"/profile",
      element:<UserProfilePage/>
    },{
      path:"/calling",
      element:<Called/>
    },{
      path:"/form",
      element:<FormPage/>
    },
  {
    path: "/profile2",
    element:<MentorProfile/>
  },
  {
    path: "/calling2",
    element: <Called2/>
  },{
    path: "/book",
    element: <Book/>
  },
{
  path: "/book",
  element: <Book/>
},

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

