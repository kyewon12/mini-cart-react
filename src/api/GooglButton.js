// import React from 'react';
// import GoogleLogin from 'react-google-login';

// const clientId = "OAuth Web Client ID";

// export default function GoogleButton({ onSocial }){
//     const onSuccess = async(response) => {
//     	console.log(response);

//         const { googleId, profileObj : { email, name } } = response;

//         await onSocial({
//             socialId : googleId,
//             socialType : 'google',
//             email,
//             nickname : name
//         });
//     }

//     const onFailure = (error) => {
//         console.log(error);
//     }

//     return(
//         <div>
//             <GoogleLogin
//                 clientId={clientId}
//                 responseType={"id_token"}
//                 onSuccess={onSuccess}
//                 onFailure={onFailure}/>
//         </div>
//     )
// }

//2.
// import GoogleLogin from 'react-google-login';
// import { useNavigate } from 'react-router-dom';
// import { postSignIn } from './indexApi';

// export default function SignInPage() {
//     const navigate = useNavigate();
//     const handleSignIn = async (googleUser) => {
//         const googleToken = googleUser.getAuthResponse().id_token;
//         await postSignIn(googleToken);
//         navigate('/cart');
//     };
//     return (
//         <div className="fixed inset-0 flex justify-center items-center">
//              {/* bg-orange-400 */}
//             <GoogleLogin
//                 clientId="155084397162-o2fss1pcnc52givlo07uc76ntjfdt776.apps.googleusercontent.com"
//                 buttonText="Login"
//                 onSuccess={handleSignIn}
//                 cookiePolicy={'single_host_origin'}
//                 style={{ border: '10px solid black' }}
//             />
//         </div>
//     );
// }

//3.
import React from 'react';
import GoogleLogin from 'react-google-login';
import { useNavigate } from 'react-router-dom';
import { postSignIn } from './indexApi';

const onSuccess = (res) => {
    alert('구글로그인에 성공하였습니다.');
    console.log(res);
};

const onFailure = (res) => {
    alert('구글로그인에 실패하였습니다.');
    console.log('실패하였습니다. : ', res);
};

export default function GoogleButton() {
    const navigate = useNavigate();
    const handleSignIn = async (googleUser) => {
        const profile = googleUser.getBasicProfile();
        console.log('dd', profile);
        console.log('ggaaaa', googleUser);
        console.log('token', googleUser.getAuthResponse().id_token);
        // const googleToken = googleUser.getAuthResponse().id_token;
        // alert('구글로그인에 성공하였습니다.');
        // await postSignIn(googleToken);

        // navigate('/cart');
    };
    return (
        <div >
            <GoogleLogin
                clientId="155084397162-o2fss1pcnc52givlo07uc76ntjfdt776.apps.googleusercontent.com"
                buttonText="Google Login"
                onSuccess={handleSignIn}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                style={{ border: '10px solid black' }}
            />
        </div>
    );
}

