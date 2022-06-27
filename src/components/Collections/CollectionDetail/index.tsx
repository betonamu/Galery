import React from "react";

import styles from "./CollectionDetail.module.scss";
import Container from "@components/Common/Container";
import {generateImageUrl} from "@utils";
import {Collection} from "@common/Models/ApiModels";

type CollectionDetailType = {
    data: Collection;
}

const CollectionDetail: React.FC<CollectionDetailType> = ({data}) => {
    return (
        <Container>
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