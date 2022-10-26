import React, {useEffect} from 'react';
import {Link, useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {exactPizzaSelector, fetchExactPizza} from "../../../redux/exactPizzaSlice";
import style from './style.module.css'
import Loader from "../../Loader/Loader";
import {useAppDispatch} from "../../../redux/Store";

const ExactPizza: React.FC = () => {

    const dispatch = useAppDispatch()
    const {item, status} = useSelector(exactPizzaSelector)
    const {id} = useParams<{ id: string }>()

    useEffect(() => {
        if (id){
            dispatch(fetchExactPizza({id}))
        }
    }, [id])




    return (
        <div className='content'>
            {
                status === 'pending'
                    ?
                    <div className={style.wrap}>
                        <div className={style.side}>
                            <div className={style.btn}><h2>{'<'}</h2></div>
                        </div>
                        <div className={style.center}>
                            <Loader/>
                        </div>
                        <div className={style.side}>
                            <div className={style.btn}><h2>{'>'}</h2></div>
                        </div>
                    </div>
                    :
                    <div className={style.wrap}>
                        <div className={style.side}>
                            <Link to={Number(id) > 0 ? `/pizza/${Number(id) - 1}` : '/pizza/0'} className={
                                Number(id) > 0
                                    ?
                                    style.btn
                                    :
                                    style.btnDisable
                            }><h2>{'<'}</h2></Link>
                        </div>
                        <div className={style.center}>
                            <img
                                className={style.img}
                                src={item.imageUrl}
                            />
                            <div><h1 className={style.title}>{item.title}</h1></div>
                            <h2>Рейтинг {item.rating}/10</h2>
                            <h3>Стоимость: {item.price} ₽</h3>
                        </div>
                        <div className={style.side}>
                            <Link to={Number(id) < 9 ? `/pizza/${Number(id) + 1}` : '/pizza/9'} className={
                                Number(id) < 9
                                    ?
                                    style.btn
                                    :
                                    style.btnDisable
                            }><h2>{'>'}</h2></Link>
                        </div>
                    </div>
            }

        </div>
    );
};

export default ExactPizza;