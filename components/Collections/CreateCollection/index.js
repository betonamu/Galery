import React, {useEffect, useState} from "react";
import Link from "next/link";

import Container from "../../Common/Container";
import InputTextField from "../../Common/Form/InputTextField";
import BasicForm from "../../Common/Control/BasicForm";

import BackIcon from "../../../asstes/icons/chevron.svg";

import styles from "./CreateCollection.module.scss";
import TextAreaField from "../../Common/Form/TextAreaField";
import SelectField from "../../Common/Form/SelectField";

const CreateCollection = () => {
    const [errorMsg,setErrorMsg] = useState();

    return (
        <Container>
            <div className={styles.createCollectionWrapper}>

                <BasicForm
                    initialValues={{
                        phone: '',
                    }}>
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
                            name="modelId"
                            required/>
                        <InputTextField
                            label="Description"
                            placeholder="Collection Name"
                            type="text"
                            className={styles.inputField}
                            name="description"
                            required/>
                    </div>
                </BasicForm>
            </div>
        </Container>
    )
}

export default CreateCollection;
