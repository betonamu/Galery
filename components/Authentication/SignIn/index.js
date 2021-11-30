import React, {useState} from "react";
import * as Yup from 'yup';

import BasicForm from "../../Common/Control/BasicForm";
import InputTextField from "../../Common/Form/InputTextField";
import {phoneRegExp} from "../../../constants";

import UserIcon from "../../../asstes/icons/user-gray.svg";


import styles from "./SignIn.module.scss";
import Container from "../../Common/Container";

const SignInForm = () => {
    const [errorMsg, setErrorMsg] = useState([]);

    const onSubmitSignIn = () => {
        return null;
    }

    const validationSchema = () => {
        return Yup.object().shape({
            customer_phone: Yup.string()
                .required("Required")
                .matches(phoneRegExp, "Khong hop le"),
        });
    }

    return (
        <Container>
            <div className={styles.signInWrapper}>
                <div className={styles.leftContent}>1321</div>
                <BasicForm
                    initialValues={{
                        phone: '',
                    }}
                    validationSchema={validationSchema}
                    onSubmit={onSubmitSignIn}
                    className={styles.rightContent}>
                    <h2 className="d-flex justify-content-center">Đăng nhập</h2>
                    {
                        errorMsg
                            ?
                            <p className="input-feedback">{errorMsg}</p>
                            :
                            null
                    }
                    <p>Tài khoản</p>
                    <InputTextField
                        placeholder="Username or email"
                        type="text"
                        name="username"
                        iconLeft={<UserIcon/>}
                        required/>
                </BasicForm>
            </div>
        </Container>
    )
}

export default SignInForm;