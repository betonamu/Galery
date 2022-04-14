import React, {useEffect, useState} from "react";
import Link from "next/link";
import {useDispatch, useSelector} from "react-redux";
import * as Yup from 'yup';

import Container from "@components/Common/Container";
import InputTextField from "@components/Common/Form/InputTextField";
import BasicForm from "@components/Common/Control/BasicForm";
import SelectField from "@components/Common/Form/SelectField";
import {productActions} from "@redux/actions";
import UploadFileField from "@components/Common/Form/UploadFileField";
import Button from "@components/Common/Control/Button";
import useNotification from "@hooks/useNotification";

import BackIcon from "@assets/icons/chevron.svg";

import styles from "./CreateCollection.module.scss";

const CreateCollection = () => {
    const dispatch = useDispatch();
    const {showError, showSuccess} = useNotification();

    const [errorMsg, setErrorMsg] = useState();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const models = useSelector(state => state.product?.models);

    const onSubmit = (values,{resetForm}) => {
        setIsSubmitting(true);
        values.fileObjects = {imagesUpload: values.imagesUpload};

        dispatch(productActions.createCollection({
            params: values,
            onCompleted: (response) => {
                console.log(response);
                setIsSubmitting(false);
                resetForm();
                showSuccess("Create Successful");
            },
            onError: (error) => {
                // setErrorMsg(error);
                console.log(error)
                setIsSubmitting(false);
            }
        }))
    }

    useEffect(() => {
        dispatch(productActions.getAllModel());
    }, []);

    return (
        <Container>
            <div className={styles.createCollectionWrapper}>
                <BasicForm
                    initialValues={{
                        collectionName: '',
                        modelId: '',
                        description: '',
                        folderName: '',
                        imagesUpload: [],
                    }}
                    onSubmit={onSubmit}
                    validationSchema={Yup.object().shape({
                        collectionName: Yup.string()
                            .required("Required"),
                        modelId: Yup.string()
                            .required("Required"),
                        description: Yup.string()
                            .required("Required"),
                        folderName: Yup.string()
                            .required("Required"),
                        coverImage: Yup.array()
                            .min(1, "Required"),
                    })}>
                    <Link href={"/"}>
                        <h4 className="d-flex align-items-center"><BackIcon/> Create Collection</h4>
                    </Link>
                    {
                        errorMsg
                            ?
                            <p className="input-feedback">{errorMsg}</p>
                            :
                            null
                    }
                    <div className={styles.collectionInfoGroup}>
                        <InputTextField
                            label="Collection Name"
                            placeholder="Collection Name"
                            type="text"
                            className={styles.inputField}
                            name="collectionName"
                            required/>
                        <SelectField
                            label="Model"
                            placeholder="Choose Model"
                            className={styles.inputField}
                            options={models}
                            name="modelId"
                            optionLabelKey={"name"}
                            optionValueKey={"id"}
                            required/>
                        <InputTextField
                            label="Description"
                            placeholder="Collection Name"
                            type="text"
                            className={styles.inputField}
                            name="description"
                            required/>
                        <InputTextField
                            label="Folder Name"
                            placeholder="Folder Name"
                            type="text"
                            className={styles.inputField}
                            name="folderName"
                            required/>
                    </div>
                    <UploadFileField
                        label="Cover Image"
                        className={styles.inputField}
                        name="imagesUpload"
                        maxFileUpload={2}
                        required/>

                    <Button
                        primary={true}
                        loading={isSubmitting}
                        className={styles.btnSubmit}
                        type="submit">
                        Gửi thông tin
                    </Button>
                </BasicForm>
            </div>
        </Container>
    )
}

export default CreateCollection;
