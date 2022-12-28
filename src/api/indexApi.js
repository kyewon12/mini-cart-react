import axios from 'axios';

//서버API연결하기
const testClient = axios.create({ baseURL: 'http://localhost:3000' });
const createGetRequest = (url) => testClient.get(url).then((r) => r.data);
const createPostRequest = (url, data) =>
    testClient.post(url, data).then((r) => r.data);
const createPatchRequest = (url, data) =>
    testClient.patch(url, data).then((r) => r.data);
const createDeleteRequest = (url, data) =>
    testClient.delete(url, data).then((r) => r.data);

if (localStorage.accessToken)
    testClient.defaults.headers = {
        Authorization: `Bearer ${localStorage.accessToken}`,
    };
//로그인 요청하는 함수
export const postSignIn = async (googleToken) => {
    console.log('postSignIn함수 ');
    const { accessToken } = await createPostRequest('sign-in', { googleToken });
    // localStorage.accessToken = accessToken;
    console.log(accessToken);
    testClient.defaults.headers = { Authorization: `Bearer ${accessToken}` };
};
//sign-in요청으로 우리 서버에서 받은 token을
//axios 설정값에 header로 집어 넣어주기
//=> 이렇게 하면, 요청할때마다 자동으로 header가 들어가게 된다.

// export const getReservations = () => createGetRequest('reservations');

//로그아웃
export const postSignOut = async () => {
  const googleSignOut = async()=>{
      const auth2 = window.gapi?.auth2?.getAuthInstance();
      await auth2?.signOut();
      auth2?.disconnect();
  }
  await Promise.all([
      createPostRequest('sign-out'),
      googleSignOut(),
  ]);
  localStorage.removeItem('accessToken');
};