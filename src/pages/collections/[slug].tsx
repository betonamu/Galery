import React from "react";
import {useDispatch} from "react-redux";

import {wrapper} from "@redux/store";
import {productActions} from "@redux/actions";
import CollectionDetail from "@components/Collections/CollectionDetail";
import {useSelectorTyped} from "@hooks/useSelectorType";

const CollectionDetailPage = () => {
    const dispatch = useDispatch();
    const collection = useSelectorTyped(state => state.product.collection);

    return (
        <CollectionDetail data={collection}/>
    )
}

CollectionDetailPage.getInitialProps = wrapper.getInitialPageProps(store => ({query}) => {
    store.dispatch(productActions.getCollectionById({id: query.slug}));
});

export default CollectionDetailPage;