import { Component } from 'react';



const options: fb.InitParams = {
    appId: '398277270719379',
    cookie: true,
    xfbml: true,
    version: 'v3.2'
}



export default class FacebookLogin extends Component {
    constructor(props: {}) {
        super(props)

        // this.loadFacebookScript = this.loadFacebookScript.bind(this);
        // this.checkFacebookSDK = this.checkFacebookSDK.bind(this);
        // this.load = this.load.bind(this);
        // this.init = this.init.bind(this);

        this.state = {
            loaded: false,
            authorized: false,
            authResponse: {},
            status: 'unknown'
        };
    }

    protected checkFacebookSDK() {
        return new Promise<boolean>((resolve: (value?: boolean | PromiseLike<boolean> | undefined) => void) => {
            const script = document.getElementById('fb-root');
            if (script) {
                resolve(true);
            }
        });
    }

    // protected loadFacebookSDK() {
    //     return (
    //         <script src='https://satana.dg02.ru/public/facebook-sdk-js.js' />
    //     )
    // }

    init() {
        return new Promise((resolve) => {
            this.checkFacebookSDK().then(() => {
                this.setState({ loaded: true })

                console.log('facebook sdk loaded');
                resolve();
            })


        });


    }


    componentDidMount() {
        this.init().then(() => {
            console.log('inited')

            FB.init(options);

            this.setState({
                loaded: true,
            })


            FB.getLoginStatus(({ status, authResponse }) => {
                // this.setState({ status: status })

                console.log(status, 'status');
                console.log(authResponse, 'authResponse');

                if (status === 'connected') {

                    // this.setState({ authResponse: authResponse })

                    console.log('connected');

                }

            })

        })
    }

    public render(): JSX.Element {



        return (
            <div>
                {JSON.stringify(this.state)}
            </div>
        );
    }

}
