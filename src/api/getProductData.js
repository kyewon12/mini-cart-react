//에러 핸들링
//비동기 호출 일반화 필요
const request = async (url) => {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            return data;
        }
        const errordata = await response.json();
        throw errordata;
    } catch (e) {
        //throw한값 여기에서 잡음
        console.log(e);
        //상황에 맞는 에러핸들링
        //특정모달 / 뒤로가기 등
    }
};

//api호출
//.then 보다는 await async 함수를 사용하는게 더 바람직
const getProductData = async () => {
    const result = request('/productData.json');
    return result;
};

export default getProductData;

//react에서 비동기 요청할때 사용하는 hook ; useEffect
