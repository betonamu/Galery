import React from "react";
import {useSelector} from "react-redux";

import styles from "./CollectionDetail.module.scss";
import Container from "../../Common/Container";
import {generateImageUrl} from "../../../utils";

const CollectionDetail = ({data}) => {
    console.log(data)
    return (
        <Container>
            <div className={styles.collectionDetail}>
                {data?.images?.map(item => (
                    <img src={generateImageUrl(data?.folderName, item)} alt={item}/>
                ))}
            </div>
        </Container>
    )
}

export default CollectionDetail;