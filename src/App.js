import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { React, useState } from 'react';
import "./App.css"




import Navbar from './components/Navbar';
import TextArea from './components/TextArea';
import About from './components/About';
import Home from './components/Home';
import Alert from './components/Alert';
import Blogs from './components/Blogs';
import Footer from './components/Footer';
import Login from './components/Login';
import PageNotFound from './components/PageNotFound';
import SignUp from './components/SignUp';
import UniqueCategory from './components/UniqueCategory';
import Product from './components/Product';
import Blog from './components/Blog';
import MyComponent from './components/MyComponent';
import Cart from './components/Cart';
import UserProfile from './components/UserProfile';


//import MyComponent from './components/MyComponent';
function App() {
  
  
  const [alert, setAlert] = useState(null);
  const [logout,setLogout] = useState(false)
  const [myCart,setMyCart] = useState(false)
  const [navigate,setNavigate] = useState(false);
  let showAlert = (type, title, msg)=>{
    setAlert({
      type,
      title,
      msg
    });
    setTimeout(() => {
      setAlert(
        null
        );
      document.title = "React App"
    }, 3000)
  }

   
  
  
  
  return (
    <BrowserRouter>
      <Navbar logout={logout} fun={{setLogout,myCart,setMyCart}} setNavigate={setNavigate} navigate={navigate}/>
      <Alert alert={alert} showAlert={showAlert}/>
      <Routes>
        <Route exact path="/" element={<Home showAlert={showAlert} setAlert={setAlert} />} />
        <Route exact path="/login" element={<Login showAlert={showAlert} setAlert={setAlert} setLogout={setLogout}/>} />
        <Route exact path="/about" element={<MyComponent showAlert={showAlert} setAlert={setAlert} />} />
        <Route exact path="/text" element={<TextArea showAlert={showAlert} />} />
        <Route exact path="/signup" element={<SignUp showAlert={showAlert} setAlert={setAlert} />} />
        <Route exact path="/blogs" element={<Blogs showAlert={showAlert} setAlert={setAlert} />} />
        <Route exact path="/uniquecategory" element={<UniqueCategory showAlert={showAlert} setAlert={setAlert} />} />
        <Route exact path="/product/:id" element={<Product showAlert={showAlert} setAlert={setAlert} />} />
        <Route exact path="/blog/:id" element={<Blog showAlert={showAlert} setAlert={setAlert} />} />
        <Route exact path="/cart" element={<Cart showAlert={showAlert} setAlert={setAlert} />} />
        <Route exact path="/userprofile" element={<UserProfile showAlert={showAlert} setAlert={setAlert} />} />
        
        
        

        <Route path="*" element={<PageNotFound />} />

      </Routes>
      <Footer/>
    </BrowserRouter>
  );

}

export default App;




























// import MyContext from './components/footers';
// import Childelement from './components/headers';
// import Base from './components/base';

//     message2: 'Hope, You are doing well!',






/****************     ****************/
// function App() {
//   const contextValue = {
//     // Define your context value here
//     // It can be a state, an object, or a function
//     message: "Hello! context",
//     message3: 'BE GOOD TO EVERY-ONE',
//   };

//   return (
  //     <MyContext.Provider value={contextValue}>
//       <Childelement/>
//       <Base/>
//     </MyContext.Provider>
//   );
// }

// export default App;



