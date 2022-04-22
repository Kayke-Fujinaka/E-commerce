import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";

import * as S from "./styles";

export default function Delivery() {
    const [productsOnCart, setProductsOnCart] = useState([])

    useEffect(() => {
        const listaProducts = localStorage.getItem('products')
        setProductsOnCart(JSON.parse(listaProducts) || [])
    }, [productsOnCart])

    return (
        <>
            <S.Breadcrumb>
                <a href='/'>Home</a>
                <span>/</span>
                <p>Entrega</p>
            </S.Breadcrumb>

            <S.ContainerMain>
                <S.ContainerLeft>
                    <div>
                        <S.Form>
                            <h3>DADOS DE CONTATO</h3>
                            <label>
                                <input
                                    className='inputEmail'
                                    type="email"
                                    placeholder="Email"
                                />
                               
                            </label>
                            <input id='check' type="checkbox" />
                            <label for='check' className='labelCheck'> Quero receber ofertas e novidades por email</label>
                        </S.Form>
                    </div>
                    <S.DivMid>
                        <h3>ENTREGA</h3>
                        <select disabled>
                            <option>Brasil</option>
                        </select>
                        <input type="text" placeholder="CEP" />
                        <a target="blank" href='https://buscacepinter.correios.com.br/app/endereco/index.php'><span>Não sei meu CEP</span></a>
                    </S.DivMid>
                    <S.DivButton>
                        <button>Continuar</button>
                    </S.DivButton>
                </S.ContainerLeft>
                <S.ContainerRight>
                    {productsOnCart.map(item => (
                        <S.Product>
                            <img src={item.image} alt={item.title} />
                            <p>{item.title} x {item.quantity}</p>
                            <span>R${item.price}</span>
                        </S.Product>
                    ))}
                    <S.Total>
                        {productsOnCart.length === 0 ? (
                            <p>Sem produtos no carrinho.</p>
                        ) : (
                            <>
                                <span>Total:</span>
                                <span>R$ 234,90</span> 
                            </> )}
                </S.Total>
                </S.ContainerRight>
            </S.ContainerMain>

        </>)
}