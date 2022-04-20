import React, { useState, useContext, useEffect } from 'react';
import * as S from "./styles";
import { Link } from 'react-router-dom'
import api from "../../services/api";

import { ApiContext } from '../../contexts/apiContext'

import CardProduct from '../../components/CardProduct'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function Products() {
    const { allProducts } = useContext(ApiContext)

    return (
        <>

            <S.Breadcrumb>
                <a href='/'>Home</a>
                <span>/</span>
                <p>Products</p>
            </S.Breadcrumb>
            <S.AllProducts>
                <ul>
                    {allProducts.map((item) => (
                        <>
                            <CardProduct id={item.id} title={item.title} price={item.price} category={item.category} image={item.image} rating={item.rating} />
                        </>
                    ))}
                </ul>
            </S.AllProducts>

        </>
    )
}




