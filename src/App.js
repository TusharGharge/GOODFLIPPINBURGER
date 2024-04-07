import logo from './logo.svg';
import './App.css';
import Ourstory from './Pages/our_story.js';
import MainNavbar from './Pages/MainNavbar.js';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainPage from './Pages/mainpage.js';
import Goodgiving from './Pages/goodgiving.js';
import News from './Pages/News.js';
import Contactus from './Pages/contactus.js';
import OrderNow from './Pages/ordernow.js';
import Rootlayout from './Pages/Rootlayout.js';
import Workus from './Pages/workwithus.js';
import Menu from './Pages/Menu.js';

const router=createBrowserRouter([
  {path:"/",element:<Rootlayout/>,
children:[
  {index:true,element:<Ourstory/>},
  {path:"our-story",element:<Ourstory/>},
  {path:"menu",element:<Menu/>},
  {path:"good-giving-living",element:<Goodgiving/>},
  {path:"in-the-news",element:<News/>},
  {path:"work-with-us",element:<Workus/>},
  {path:"contact-us",element:<Contactus/>},
  {path:"order-now",element:<OrderNow/>},  

]
},

]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
  
}

export default App;
