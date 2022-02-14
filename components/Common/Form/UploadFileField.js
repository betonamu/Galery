import React, {useEffect, useState} from "react";
import ImageUploading from "react-images-uploading";
import classNames from "classnames";
import {useField} from "formik";

import CloseIcon from "../../../asstes/icons/close.svg";

import styles from "./UploadFile.module.scss";

const UploadImage = ({maxFileUpload = 1, maxFileSize = 10485760, label, ...props}) => {
    const [field, meta, helpers] = useField(props);
    const isError = meta.touched && meta.error;

    const [images, setImages] = useState([]);

    const acceptTypes = ["png", "jpg", "jpeg"];

    const onChange = (imageList) => {
        //set value for form field
        let value = imageList.map(item => item?.file);
        helpers?.setValue(value || []);

        setImages(imageList);
    };

    return (
        <div className={classNames(styles.uploadImageWrapper, {
            [styles.error]: isError,
        })}>
            {label && (
                <label>
                    {label}
                    {props.required && <span>*</span>}
                </label>
            )}
            <ImageUploading
                {...field}
                multiple
                value={images}
                acceptType={acceptTypes}
                onChange={onChange}
                maxNumber={maxFileUpload}
                maxFileSize={maxFileSize}
                dataURLKey="data_url">
                {({
                      imageList,
                      onImageUpload,
                      onImageRemove,
                      isDragging,
                      dragProps
                  }) => (
                    // write your building UI
                    <div className={styles.uploadImage}>
                        {imageList.map((image, index) => (
                            <div key={index} className={styles.imageItem}>
                                <img src={image["data_url"]} alt=""/>
                                <button onClick={() => onImageRemove(index)}
                                        className={styles.closeIcon}>
                                    <CloseIcon/>
                                </button>
                            </div>
                        ))}
                        {
                            images.length < maxFileUpload &&
                            <div style={isDragging ? {color: "red"} : undefined}
                                 className={classNames(styles.uploadArea, {
                                     [styles.required]: isError,
                                     [styles.haveAImage]: imageList.length > 0
                                 })}
                                 onClick={onImageUpload}
                                 {...dragProps}>
                                Bấm vào để tải ảnh lên
                                {imageList.length < 1 &&
                                <p>(định dạng hỗ trợ: .png, .jpg, .jpeg và kích thước tối đa 10MB)</p>}
                            </div>
                        }
                    </div>
                )}
            </ImageUploading>
            {isError && (
                <div className={styles.feedback}>{meta.error}</div>
            )}
        </div>
    );
}

export default React.memo(UploadImage);
