//상품리스트
import React from 'react';

function ProductList({ productItems, toggleCart, cartItems, setCartItems }) {
    const handleAddProduct = (idx) => {
        //장바구니에 아이템추가
        //idx = index : 0~
        const currentProduct = productItems[idx];
        //첫번째 체리두알 선택하면
        //producItems[0] 배열을 currentProduct에 넣기
        //즉,currentProduct = [{id : 1, name : 체리두알 , price: 10000}]
        const checkedIndex = cartItems.findIndex((item) => 
            item.id === currentProduct.id
            
        );

        if(checkedIndex === -1){
            //같은 제품 장바구니에 안담음
            // setCartItems((prev)=>[...prev, { ...currentProduct, count: 1 }]);
            //==
            const newCartItems = [...cartItems, { ...currentProduct, count: 1 }];
            setCartItems(newCartItems)
            console.log('newCartItems',newCartItems)
        }else{
            //같은 제품 담았을때 : count만 +1
            const newCartItems = [...cartItems];
            newCartItems[idx].count +=1;
            setCartItems(newCartItems)
            console.log('같아요!!!')
            console.log('newCartItems',newCartItems)

        }
        
        toggleCart();
    };
    return productItems.map(({ id, imgSrc, name, price }, idx) => (
        <article onClick={() => handleAddProduct(idx)} key={id}>
            <div className="rounded-lg overflow-hidden border-2 relative">
                <img
                    src={imgSrc}
                    className="object-center object-cover"
                    alt={name}
                />
                <div className="hover:bg-sky-500 w-full h-full absolute top-0 left-0 opacity-90 transition-colors ease-linear duration-75">
                    <div className="hover:opacity-100 opacity-0 w-full h-full flex justify-center items-center text-xl text-white font-bold cursor-pointer">
                        장바구니에 담기
                    </div>
                </div>
            </div>
            <h3 className="mt-4 text-gray-700">{name}</h3>
            <p className="mt-1 text-lg font-semibold text-gray-900">
                {price.toLocaleString()}
            </p>
        </article>
    ));
}

export default ProductList;
