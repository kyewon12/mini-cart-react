import CartList from './CartList';
import React, { useState } from 'react';
const Cart = ({ isCartOpen, onClickHandler, cartItems, setCartItems }) => {
    const totalCount = cartItems
        .reduce((acc, cur) => cur.price * cur.count + acc, 0)
        .toLocaleString();

    const saveToLocalStorage = () => {
        localStorage.setItem('carState', JSON.stringify(cartItems));
    };
    return (
        <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
            <div className="flex-1 overflow-y-auto p-6">
                <div className="flex items-start justify-between">
                    <h2 className="text-xl font-bold">장바구니</h2>
                    <div className="ml-3 flex h-7 items-center">
                        <button
                            type="button"
                            className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                            onClick={() => onClickHandler()}
                        >
                            <svg
                                id="close-cart-btn"
                                className="h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                ></path>
                            </svg>
                        </button>
                    </div>
                </div>
                <div id="cart-list">
                    <CartList
                        cartItems={cartItems}
                        setCartItems={setCartItems}
                    />
                </div>
            </div>
            <div className="border-t border-gray-200 p-6">
                <div className="flex justify-between font-medium">
                    <p>결제금액</p>
                    <p className="font-bold" id="total-count">
                        {totalCount + '원'}
                    </p>
                </div>
                <a
                    id="payment-btn"
                    href="./"
                    className="flex items-center justify-center rounded-md border border-transparent bg-sky-400 px-6 py-3 mt-6 font-medium text-white shadow-sm hover:bg-sky-500"
                    onClick={saveToLocalStorage}
                >
                    결제하기
                </a>
                <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                    <p>
                        또는
                        <button
                            type="button"
                            className="font-medium text-sky-400 hover:text-sky-500"
                        >
                            쇼핑 계속하기
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Cart;
