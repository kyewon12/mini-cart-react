//장바구니 화면 메인
import React, { useState, useEffect } from 'react';
import Cart from './component/Cart';
import ProductList from './component/ProductList';
import Footer from './component/Footer';
import Backdrop from './component/Backdrop';
import getProductData from '../../api/getProductData';
import { useNavigate } from 'react-router-dom';
import { postSignOut } from '../../api/indexApi';
// import { useDispatch } from 'react-redux';

function CartMain() {
    const navigate = useNavigate();
    // const dispatch = useDispatch();
    const initialCartItem = localStorage.getItem('carState')
        ? JSON.parse(localStorage.getItem('carState'))
        : [];
    //파싱 : 문자열을 다시 객체로 돌리기;
    //localStorage 'carState'라는 키값 조회
    const [productItems, setProductItems] = useState([]);
    const [cartItems, setCartItems] = useState(initialCartItem);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const toggleCart = () => {
        setIsCartOpen((prev) => !prev);
    };

    useEffect(() => {
        //비동기요청 api와 연결
        const fetchProductData = async () => {
            const result = await getProductData();
            setProductItems(result);
        };
        fetchProductData();
    }, []);

    //로그아웃
    const handleLogout = async () => {
        navigate('/');
        // dispatch(init());
        await postSignOut();
    };
    console.log('cartitems', cartItems);
    return (
        <div className="relative min-h-screen">
            <div className="max-w-7xl mx-auto px-6 py-12">
                <header className="flex justify-between mb-4">
                    <h2 className="text-3xl font-bold">오늘의 상품</h2>

                    <button
                        className="text-white font-bold"
                        onClick={handleLogout}
                    >
                        로그아웃
                    </button>
                    <button
                        id="open-cart-btn"
                        className="fill-gray-400 hover:fill-gray-500"
                        onClick={() => toggleCart()}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="36"
                            height="36"
                            viewBox="0 0 24 24"
                        >
                            <path d="M10 19.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm6.304-15l-3.431 12h-2.102l2.542-9h-16.813l4.615 11h13.239l3.474-12h1.929l.743-2h-4.196z" />
                        </svg>
                    </button>
                </header>
                <section id="product-list">
                    <div
                        id="product-card-grid"
                        className="grid gap-4 auto-cols-fr grid-cols-2 md:grid-cols-4"
                    >
                        {productItems.length === 0 ? (
                            <h1>데이터가 없습니다</h1>
                        ) : (
                            <ProductList
                                productItems={productItems}
                                toggleCart={toggleCart}
                                cartItems={cartItems}
                                setCartItems={setCartItems}
                            />
                        )}
                    </div>
                </section>
            </div>
            {isCartOpen && <Backdrop />}
            <aside className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                <section
                    className={`pointer-events-auto w-screen max-w-md transition ease-in-out duration-500 
            ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`}
                    id="shopping-cart"
                >
                    <Cart
                        cartItems={cartItems}
                        setCartItems={setCartItems}
                        isCartOpen={isCartOpen}
                        onClickHandler={toggleCart}
                    />
                </section>
            </aside>

            <Footer />
        </div>
    );
}

export default CartMain;
