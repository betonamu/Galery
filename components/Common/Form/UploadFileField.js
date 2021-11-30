import React, {useState, useEffect} from "react";
import {useDispatch} from "react-redux";
import ClipLoader from "react-spinners/ClipLoader";
import ReactImageUploading from "react-images-uploading";

import {accountActions} from "@redux/actions";
import apiConfig from "@constants/apiConfig";
import {sendRequest} from "@utils/api";
import useAuth from "@hooks/useAuth";

import IconPlus44 from "@assets/icons/icon-plus-44.svg";

import styles from "./AccountDetails.module.scss";

const UploadFileField = ({accountDetail}) => {


    const onChangeImage = (imageList) => {
        return new Promise(async resolve => {
            setLoading(true);
            const {
                success,
                responseData
            } = await sendRequest(apiConfig.account.uploadAvatar, {avatar: imageList[0]?.file});
            if (success) {
                setCurrentAvatar(responseData.data.avatar);
                dispatch(accountActions.setProfile({data: {...user, avatar: responseData.data.avatar}}));
            }
            setLoading(false);
        });
    }

    return (
        <div className={styles.photoUpload}>
            <ReactImageUploading
                value={[]}
                acceptType={["png", "jpeg", "jpg"]}
                onChange={onChangeImage}
                maxNumber={1}>
                {({
                      onImageUpload,
                  }) => (
                    <>
                        {loading
                            ?
                            <i>
                                <ClipLoader/>
                            </i>
                            :
                            <figure>
                                {(currentAvatar) ? (<img src={currentAvatar} alt="user avatar"/>) : (
                                    <IconPlus44/>)}
                            </figure>
                        }
                        <button onClick={onImageUpload}> Bấm để cập nhật ảnh mới</button>
                    </>
                )}
            </ReactImageUploading>
        </div>
    )
}

export default UploadFileField
