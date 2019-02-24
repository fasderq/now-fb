import { Component } from 'react';
// import { loadFacebookScript } from '../components';
import dynamic from 'next/dynamic'

import { Loading } from '../src/loading';


const FacebookLogin = dynamic(() => import('../src/login'), { ssr: false, loading: Loading });

// interface Load {
//     loaded: boolean;
//     authorized: boolean;
//     user: fb.AuthResponse | null;
// }

const options: fb.InitParams = {
    appId: '398277270719379',
    cookie: true,
    xfbml: true,
    version: 'v3.2'
}




const Login = () => {
    return (
        <div>
            <h1>SUKA</h1>
            <div>
                <FacebookLogin />
            </div>
        </div>
    );
}


export default Login;

// export const loadFacebookScript = async () => {
//     return new Promise<boolean>((resolve: (value?: boolean | PromiseLike<boolean> | undefined) => void) => {
//         const script = document.getElementById('fb-root');
//         if (script) {
//             resolve(true);
//         }
//     })
// }


// export default class FacebookAuth extends Component<{}, Load> {

//     constructor(props: {}) {
//         super(props)

//         this.loadFacebookScript = this.loadFacebookScript.bind(this);
//         this.checkFacebookSDK = this.checkFacebookSDK.bind(this);
//         this.load = this.load.bind(this);
//         this.init = this.init.bind(this);

//         this.state = {
//             loaded: false,
//             authorized: false,
//             user: null
//         };
//     }

//     // public static async getInitialProps() {
//     //     const page: Document = document;


//     //     page.getElementById('fb-root');

//     //     // const loadFacebookScript = (document: Document) => {
//     //     //     return new Promise<boolean>((resolve: (value?: boolean | PromiseLike<boolean> | undefined) => void) => {
//     //     //         const script = document.getElementById('fb-root');
//     //     //         if (script) {
//     //     //             resolve(true);
//     //     //         }
//     //     //     })
//     //     // }

//     //     // const t = await loadFacebookScript(page);

//     //     // console.log(t);


//     //     return { loaded: false }
//     // }


//     public loadFacebookScript(): Promise<boolean> {
//         return new Promise<boolean>((resolve: (value?: boolean | PromiseLike<boolean> | undefined) => void) => {
//             const script = document.getElementById('fb-root');
//             if (script) {
//                 resolve(true);
//             }
//         })
//     }

//     public checkFacebookSDK(): Promise<boolean> {
//         return new Promise<boolean>((resolve: (value?: boolean | PromiseLike<boolean> | undefined) => void) => {
//             if (typeof FB !== 'undefined') {
//                 resolve(true);
//             }
//         })
//     }

//     public load() {
//         return new Promise<void>((resolve) => {
//             this.loadFacebookScript().then((loaded: boolean): void => {
//                 console.log(loaded);
//                 if (loaded) {
//                     this.checkFacebookSDK().then((checked: boolean): void => {
//                         this.setState({ loaded: checked || false });
//                     });
//                 }
//             });

//             if (this.state.loaded) {
//                 resolve();
//             }
//         });
//     }

//     public init() {
//         return new Promise((resolve) => {
//             this.load().then(() => {
//                 FB.init(options);

//                 return new Promise<fb.AuthResponse | null>((resolve) => {
//                     FB.getLoginStatus(({ status, authResponse }: fb.StatusResponse) => {

//                         if (status && status === 'connected') {
//                             this.setState({ authorized: true });

//                             resolve(authResponse);
//                         } else {
//                             resolve(null);
//                         }
//                     });
//                 })
//             });

//             resolve();
//         })


//     }

//     public componentDidMount() {




//         // console.log(document);
//         // const script = document.getElementById('fb-root');
//         // console.log(script);




//         // const loadFacebookScript = () => {
//         //     return new Promise<boolean>((resolve: (value?: boolean | PromiseLike<boolean> | undefined) => void) => {
//         //         const script = document.getElementById('fb-root');
//         //         if (script) {
//         //             resolve(true);
//         //         }
//         //     })
//         // }


//         // loadFacebookScript().then((loaded: boolean): void => {
//         //     console.log(loaded);

//         //     if (loaded) {
//         //         // this.checkFacebookSDK().then((checked: boolean): void => {
//         //             this.setState({ loaded: true });
//         //         // });
//         //     }
//         // });


//     }

//     public render() {
//         console.log(this.props);


//         return (
//             <div>EBAL REFUCK ANAL</div>
//         );
//     }
// }
