import React from "react";
import moment from "moment";
import Link from "next/link";

import {generateImageUrl} from "../../../utils";
import {dateFormat} from "../../../constants";

import ClockIcon from "../../../asstes/icons/clock.svg";

import styles from "./ModelItem.module.scss";

const ModelItem = ({data}) => {
    return (
        <Link href={`/collections/${data?.id}`}>
            <div className={styles.modelItem}>
                <img src={generateImageUrl(data?.folderName, data?.coverImage)}
                     alt={data?.collectionName}
                     className={styles.imageCover}/>
                <div className={styles.imageDes}>
                    <p>{data?.collectionName}</p>
                    <span><ClockIcon width={14} height={14}/>
                        {moment(data?.createAt).format(dateFormat)}</span>
                </div>
            </div>
        </Link>
    )
}

export default ModelItem;