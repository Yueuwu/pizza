import React from 'react';
import {useEffect, useState} from "react";
import Categories from "../Categories";
import Sort from "../Sort";
import Sceleton from "../PizzaBlockSceleton";
import PizzaBlock from "../PizzaBlock";
import Pagination from "../Pagination/Pagination";
import {useDispatch, useSelector} from "react-redux";
import {setCategoryId, setSort} from "../../redux/filterSlice";
import axios from "axios";
import {setPage} from "../../redux/paginationSlice";


const Home = ({searchValue}) => {

    const dispatch = useDispatch()
    const {categoryId, sort} = useSelector(state => state.filter)
    const { page } = useSelector(state => state.pagination)

    const onChangeCategory = (id) => {
        dispatch(setCategoryId(id))
    }

    const onChangeSort = (type) => {
        dispatch(setSort(type))
    }

    const changePage = (page) => {
        dispatch(setPage(page))
    }

    const [items, setItems] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const sortList = ['rating', 'price',  'title']

    let category = categoryId > 0 ? `category=${categoryId}` : ''
    let pageis = category === '' ? `page=${page}&limit=4` : ''

    useEffect(() => {
        setIsLoading(true)
        axios
            .get(`https://63425208ba4478d4783a7215.mockapi.io/items?${pageis}${category}&sortBy=${
                sortList[sort]}&order=${sort === 2 ? 'asc' : 'desc'}&search=${
                searchValue
            }`)
            .then( res => {
                setItems(res.data)
                setIsLoading(false)
            })

    },[category, sort, searchValue, pageis])


    return (
            <div className="container">
                <div className="content__top">
                    <Categories onChangeCategory={onChangeCategory} value={categoryId}/>
                    <Sort onClickSort={onChangeSort} value={sort}/>
                </div>
                <h2 className="content__title">Все пиццы</h2>
                <div className="content__items">
                    {
                        isLoading
                            ?
                            [...new Array(4)].map((_, i) => <Sceleton key={i}/>)
                            :
                            items.map(i => <PizzaBlock key={i.id} i={i}/>)
                    }

                </div>
                {
                    pageis !== '' && <Pagination page={page} changePage={changePage}/>
                }
            </div>
    );
};

export default Home;