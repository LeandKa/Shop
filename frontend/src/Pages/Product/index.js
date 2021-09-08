import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import Header from '~/Components/Header';
import Mobile from '~/Components/Header/Mobile';
import SearchBar from '~/Components/Header/SearchBar';
import BackButton from '~/Components/Layout/BackButton';
import { getCartQty } from '~/Store/modules/Cart/action';
import { getError } from '~/Store/modules/Product/action';
import Api from '~/Utils/Api';
import {
    Content,
    ProductImg,
    Container,
    ProductDetails,
    ProductText,
    ProductPrice,
    ProductSpan,
    ProductDescription,
    ProductButton,
    Icon,
} from './style';

export default function Product() {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [categoria, setCategoria] = useState({});
    const dispatch = useDispatch();

    useEffect(() => {
        async function getProduct() {
            try {
                const response = await Api.get(`/produto/${id}`);
                setProduct(response.data.product);
                setCategoria(response.data.product.categoria);
            } catch (error) {
                dispatch(getError(error.message));
            }
        }

        getProduct();
    }, []);

    const Number = () => {
        const newValor = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        }).format(product.price);
        return <ProductPrice>{newValor}</ProductPrice>;
    };

    const OnSubmit = () => {
        const cart = JSON.parse(localStorage.getItem('cartsItens'));
        if (!cart) {
            const array = [];
            array.push({ product, qty: 1, total: product.price });
            localStorage.setItem('cartsItens', JSON.stringify(array));
            dispatch(getCartQty());
        } else {
            const local = JSON.parse(localStorage.getItem('cartsItens'));
            const igual = local.filter((object) => object.id === product.id);
            if (igual.length === 0) {
                local.push({ product, qty: 1, total: product.price });
                localStorage.setItem('cartsItens', JSON.stringify(local));
                dispatch(getCartQty());
            } else {
                console.log('Ja esta no carrinho');
            }
        }
    };

    return (
        <>
            <Header />
            <Mobile color="white">
                <SearchBar />
            </Mobile>
            <Container>
                <BackButton />
                <Content>
                    <ProductImg src={product.url} />
                    <ProductDetails>
                        <ProductSpan>{categoria.name}</ProductSpan>
                        <ProductText>{product.name}</ProductText>
                        <Number />
                        <ProductSpan>
                            *Frete de R$40,00 para todo o Brasil. Grátis para
                            compras acima de R$900,00.
                        </ProductSpan>
                        <ProductDescription>
                            <h1>DESCRIÇÃO</h1>
                            <p>
                                Aqui vem um texto descritivo do produto, esta
                                caixa de texto servirá apenas de exemplo para
                                que simule algum texto que venha a ser inserido
                                nesse campo, descrevendo tal produto.
                            </p>
                        </ProductDescription>
                        <ProductButton onClick={OnSubmit} type="button">
                            <Icon />
                            Adicionar ao carrinho
                        </ProductButton>
                    </ProductDetails>
                </Content>
            </Container>
        </>
    );
}
