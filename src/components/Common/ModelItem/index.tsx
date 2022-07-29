import React from "react";
import moment from "moment";
import Link from "next/link";

import {generateImageUrl} from "../../../utils";
import {Collection} from "../../../common/Models/ApiModels";

import ChevronIcon from "../../../assets/icons/chevron.svg";

import styles from "./ModelItem.module.scss";

type ModelItemProps = {
    data: Collection,
}

const ModelItem: React.FC<ModelItemProps> = ({data}) => {
    const generateDate = (date) => {
        let temp = moment(date).format("MMMM/DD/YYYY").split("/");
        return `${temp[0]} ${temp[1]}, ${temp[2]}`;
    }

    return (
        <Link href={`/collections/${data?.id}`}>
            <div className={styles.modelItem}>
                {data?.folderName && data?.coverImage ?
                    <img src={generateImageUrl(data?.folderName, data?.coverImage)}
                         alt={data?.collectionName}
                         className={styles.imageCover}/>
                    :
                    <img src={generateImageUrl("user-content", "406b4b18-e432-4b70-8f17-39f0d48e8855.png")}
                         alt={data?.collectionName}
                         className={styles.imageCover}/>}
                <div className={styles.imageDes}>
                    <div className={styles.top}>
                        <span>{generateDate(data?.createAt)}</span>
                        <p>{data?.collectionName}</p>
                    </div>

                    <div className={styles.bottom}>
                        <ChevronIcon/>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default ModelItem;