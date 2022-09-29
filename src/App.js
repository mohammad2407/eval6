
import {Routes,Route} from "react-router"
import { Login } from './components/Login';
import { Cart } from './components/Cart';
import { Footer } from './pages/Footer';
import { Header } from './pages/Header';
import { Home } from "./pages/Home";
import { SingleComponent } from "./components/SingleComponent";
function App() {
  return (
    <div className="App" style={{display:"flex", height : "100vh", flexDirection:"column", justifyContent:"space-between"}} >
      <Header />
      <Routes>
        <Route path = "/" element = {<Home />}></Route>
        <Route path = "/login" element = {<Login />}></Route>
        <Route path = "/cart" element = {<Cart/>}></Route>
        <Route path = "/product/:id" element = {<SingleComponent />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
