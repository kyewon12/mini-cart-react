//장바구니 리스트
import React from 'react';

function CartList({ cartItems, setCartItems }) {
    const removeCartItem = (idx) => {
        //삭제할 아이템 찾아서 state 업데이트
        const newCartItems = [...cartItems];
        newCartItems.splice(idx,1); //splice 문법 -> 잘라진 것만 return되니까 새로운 변수에서 splice하고, cartItem로 다시넣어줘야함.
        setCartItems(newCartItems)

    };
    const MAX_COUNT = 10;
    const MIN_COUNT = 1;

    const increaseItem =(idx)=>{
        //수량 count +1
        const newCartItems = [...cartItems];
        if(newCartItems[idx].count< MAX_COUNT) {
            newCartItems[idx].count +=1
            setCartItems(newCartItems)
        }else{
            alert('장바구니에 담을수있는 최대수량은 10개입니다.')
        }

    }
    const decreaseItem =(idx)=>{
        const newCartItems = [...cartItems];
        if(newCartItems[idx].count > MIN_COUNT) {
            newCartItems[idx].count -=1
            setCartItems(newCartItems)
        }else{
            alert('장바구니에 담을수있는 최소수량은 1개입니다.')
        }

    }
    return cartItems.map(({ id, name, imgSrc, price, count }, idx) => (
        <ul className="divide-y divide-gray-200" key={idx}>
            <li className="flex py-6" id={id}>
                <div className="h-24 w-24 overflow-hidden rounded-md border border-gray-200">
                    <img
                        src={imgSrc}
                        className="h-full w-full object-cover object-center"
                        alt={name}
                    />
                </div>
                <div className="ml-4 flex flex-1 flex-col">
                    <div>
                        <div className="flex justify-between text-base font-medium text-gray-900">
                            <h3>{name}</h3>
                            <p className="ml-4">
                                {(count * price).toLocaleString()}원
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-1 items-end justify-between">
                        <div className="flex text-gray-500">
                            <button className="decrease-btn" onClick={()=>decreaseItem(idx)}>-</button>
                            <div className="mx-2 font-bold">{count}개</div>
                            <button className="increase-btn" onClick={()=>increaseItem(idx)}>+</button>
                        </div>
                        <button
                            type="button"
                            className="font-medium text-sky-400 hover:text-sky-500"
                            onClick={() => removeCartItem(idx)}
                        >
                            <p className="remove-btn">삭제하기</p>
                        </button>
                    </div>
                </div>
            </li>
        </ul>
    ));
}

export default CartList;
