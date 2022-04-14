import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {wrapper} from "../../redux/store";
import {productActions, productActionTypes} from "../../redux/actions";
import CollectionDetail from "../../components/Collections/CollectionDetail";
import {useRouter} from "next/router";

const CollectionDetailPage = () => {
    const dispatch = useDispatch();
    const collection = useSelector(state => state.product.collection);

    return (
        <CollectionDetail data={collection}/>
    )
}

CollectionDetailPage.getInitialProps = wrapper.getInitialPageProps(store => ({query}) => {
    store.dispatch(productActions.getCollectionById({id: query.slug}));
});

export default CollectionDetailPage;