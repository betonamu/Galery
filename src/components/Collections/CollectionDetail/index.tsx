import React from "react";

import Container from "@components/Common/Container";
import {generateImageUrl} from "@utils";
import {Collection} from "@common/Models/ApiModels";
import {paths} from "@constants";
import Breadcrumbs from "@components/Common/Breadcrumbs";

import styles from "./CollectionDetail.module.scss";

type CollectionDetailType = {
    data?: any;
}

const CollectionDetail: React.FC<CollectionDetailType> = ({data}) => {
    const breadcrumbBase = [
        {
            label: "Home",
            url: paths?.home,
            active: false
        },
        {
            label: "CollectionDetail",
            isActive: true
        },
    ];

    return (
        <Container>
            <Breadcrumbs breadcrumbs={breadcrumbBase}/>
            <div className={styles.collectionDetail}>
                {data?.images?.map((item: string) => (
                    // <img src={generateImageUrl(data?.folderName, item)} alt={item}/>
                    <img src={generateImageUrl("user-content", item)} alt={item}/>
                ))}
            </div>
        </Container>
    )
}

export default CollectionDetail;