import './scss/app.scss'
import Header from "./components/Header";
import Home from "./components/pages/Home";
import {Route, Routes} from "react-router-dom";
import Cart from "./components/pages/Cart";
import NotFound from "./components/pages/NotFound";
import {useState} from "react";

function App() {
    const [searchValue, setSearchValue] = useState('')

    return (
        <div>
            <div className="wrapper">
                <Header searchValue={searchValue} setSearchValue={setSearchValue}/>
                <div className="content">
                    <Routes>
                        <Route path='/' element={<Home searchValue={searchValue}/>}/>
                        <Route path='/cart' element={<Cart />}/>
                        <Route path='*' element={<NotFound />}/>
                    </Routes>

                </div>
            </div>
        </div>
    );
}

export default App;
