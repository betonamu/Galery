import {END} from 'redux-saga';

import {wrapper} from '../redux/store';
import Layout from "../components/Layout";
import {NextQueryParamProvider} from "../hocs/NextQueryParamProviderComponent";

import '../asstes/scss/index.scss';
import {homeActions} from "../redux/actions";

const MyApp = ({Component, pageProps}) => {
    return (
        <NextQueryParamProvider>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </NextQueryParamProvider>
    );
}

MyApp.getInitialProps = wrapper.getInitialAppProps(store => async ({Component, ctx}) => {
    if (Component.getInitialProps) {
        await Component.getInitialProps(ctx);
    }

    // 2. Stop the saga if on server
    if (ctx.req) {
        await store.dispatch(homeActions.getAllCollection());
        await store.dispatch(END);
        await store.sagaTask.toPromise();
    }
});

export default wrapper.withRedux(MyApp);
