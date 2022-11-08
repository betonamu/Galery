import {END} from 'redux-saga';
import {transitions, positions, Provider as AlertProvider} from 'react-alert';
import {SWRConfig} from 'swr'

import {wrapper} from '@redux/store';
import Layout from "@components/Layout";
import {NextQueryParamProvider} from "@hocs/NextQueryParamProviderComponent";
import {homeActions} from "@/redux/actions";
import AlertTemplate from "@components/Common/AlertTemplete";

import '../assets/scss/index.scss';

const alertOptions = {
    // you can also just use 'bottom center'
    position: positions.TOP_RIGHT,
    timeout: 2000,
    offset: '30px',
    // you can also just use 'scale'
    transition: transitions.FADE,
}

// const fetcher = (input: RequestInfo, init?: RequestInit) => fetch(input, init).then((res: any) => res.json());
const fetcher = (...args: [RequestInfo, RequestInit]) => {
    fetch(...args).then((res: any) => res.json());
    console.log(...args);
};

const MyApp = ({Component, pageProps}: any) => {
    return (
        <NextQueryParamProvider>
            <AlertProvider template={AlertTemplate} {...alertOptions}>
                <SWRConfig value={{fetcher}}>
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                </SWRConfig>
            </AlertProvider>
        </NextQueryParamProvider>
    );
}

MyApp.getInitialProps = wrapper.getInitialAppProps(store =>
    async ({Component, ctx}: any): Promise<any> => {
        if (Component.getInitialProps) {
            await Component.getInitialProps(ctx);
        }

        // 2. Stop the saga if on server
        if (ctx.req) {
            //await store.dispatch(homeActions.getAllCollection());
            await store.dispatch(END);
            await store.sagaTask.toPromise();
        }
    });

export default wrapper.withRedux(MyApp);
