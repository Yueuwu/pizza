import './scss/app.scss'
import Header from "./components/Header";
import Home from "./components/pages/Home";
import {Route, Routes} from "react-router-dom";
import NotFound from "./components/pages/NotFound";
import ExactPizza from "./components/pages/ExactPizza/ExactPizza";
import React from "react";
import Loader from "./components/Loader/Loader";

const Cart = React.lazy(() => import(/*webpackChunkName: "Cart"*/ "./components/pages/Cart"))

function App() {

    return (
        <div>
            <div className="wrapper">
                <Header/>
                <div className="content">
                    <Routes>
                        <Route path='/pizza/'  element={<Home/>}/>
                        <Route path='/cart' element={
                            <React.Suspense fallback={<div className='loader'><Loader/></div>}>
                                <Cart />
                            </React.Suspense>
                        }/>
                        <Route path='/fullpizza/:id' element={<ExactPizza/>}/>
                        <Route path='*' element={<NotFound />}/>
                    </Routes>

                </div>
            </div>
        </div>
    );
}

export default App;
