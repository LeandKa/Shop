import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCarts, removeItemCart } from '~/Store/modules/Cart/action';
import CardCart from '~/Components/CardCart';
import Header from '~/Components/Header';
import Mobile from '~/Components/Header/Mobile';
import SearchBar from '~/Components/Header/SearchBar';
import BackButton from '~/Components/Layout/BackButton';
import NoContent from '~/Components/NoContent';
import {
    Container,
    Content,
    ContentPrice,
    ContentTitle,
    Price,
    Title,
    Resume,
    ContentResume,
    ContentResumeTotal,
    ResumeButton,
    ResumeLinks,
} from './style';

export default function Cart() {
    const dispatch = useDispatch();
    const { cart, total, cartQty } = useSelector((state) => state.cart);

    useEffect(() => {
        dispatch(getCarts());
    }, []);

    const Number = () => {
        const newValor = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        }).format(total);
        return <Price>{newValor}</Price>;
    };

    const NumberTotal = () => {
        const novo = total + 60;
        const newValor = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        }).format(novo);
        return <h1>{newValor}</h1>;
    };

    const OnClick = (id) => {
        const local = JSON.parse(localStorage.getItem('cartsItens'));
        const novoCart = local.filter((element) => element.product.id !== id);
        dispatch(removeItemCart(novoCart));
    };

    return (
        <>
            <Header />
            <Mobile color="white">
                <SearchBar />
            </Mobile>
            <BackButton />

            {cartQty === 0 ? (
                <NoContent />
            ) : (
                <Container>
                    <Content>
                        <Title>SEU CARRINHO</Title>
                        <ContentPrice>
                            <h2>Total({cartQty})produtos:</h2>
                            <Number />
                        </ContentPrice>

                        <>
                            {cart.map((data) => (
                                <CardCart
                                    qtyDefault={data.qty}
                                    key={data.product.id}
                                    name={data.product.name}
                                    price={data.product.price}
                                    url={data.product.url}
                                    id={data.product.id}
                                    OnClick={OnClick}
                                />
                            ))}
                        </>
                    </Content>
                    <Resume>
                        <Title>Resumo do Pedido</Title>
                        <ContentResume>
                            <ContentTitle>SubTotal dos Produtos</ContentTitle>
                            <Number />
                        </ContentResume>
                        <ContentResume>
                            <ContentTitle>Entrega</ContentTitle>
                            <span>R$:60,00</span>
                        </ContentResume>
                        <ContentResumeTotal>
                            <h1>Total</h1>
                            <NumberTotal />
                        </ContentResumeTotal>
                        <ResumeButton>Finalizar Comprar</ResumeButton>

                        <ResumeLinks>
                            <a href="/">Ajuda</a>
                            <a href="/">Reembolsos</a>
                            <a href="/">Entregas e frente</a>
                            <a href="/">Trocas e devoluções</a>
                        </ResumeLinks>
                    </Resume>
                </Container>
            )}
        </>
    );
}
