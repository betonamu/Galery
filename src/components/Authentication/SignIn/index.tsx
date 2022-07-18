import React, {useState} from "react";
import * as Yup from 'yup';
import {useDispatch} from "react-redux";
import {useRouter} from "next/router";

import BasicForm from "@components/Common/Control/BasicForm";
import InputTextField from "@components/Common/Form/InputTextField";
import Container from "@components/Common/Container";
import Button from "@components/Common/Control/Button";
import {accountActions} from "@redux/actions";
import {paths, storageKeys} from "@constants";
import {ResponseApi} from "@common/Models/ApiModels";
import {FormikInitType} from "@common/Models/Formik";

import UserIcon from "@assets/icons/user-gray.svg";

import styles from "./SignIn.module.scss";


const SignInForm = () => {
    const [errorMsg, setErrorMsg] = useState([]);
    const dispatch = useDispatch();
    const {push} = useRouter();

    const onSubmitSignIn = (values: FormikInitType<any>) => {
        console.log(values)
        dispatch(accountActions.signIn({
            params: values,
            onCompleted: (data: ResponseApi) => {
                console.log({data})
                push(paths.home).then();
            },
            onError: (error: ResponseApi) =>{
                console.log(error)
            }
        }))
    }

    const validationSchema = () => {
        return Yup.object().shape({
            username: Yup.string()
                .required("Required"),
            password: Yup.string()
                .required("Required")
        });
    }

    return (
        <Container>
            <div className={styles.signInWrapper}>
                <div className={styles.leftContent}>1321</div>
                <BasicForm
                    initialValues={{
                        username: 'admin',
                        password: 'Anhquoc@2020',
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
                    <InputTextField
                        placeholder="Username or email"
                        type="text"
                        name="username"
                        iconLeft={<UserIcon/>}
                        autoComplete="off"
                        label="Username or email"
                        required/>
                    <InputTextField
                        placeholder="password"
                        type="password"
                        name="password"
                        autoComplete="off"
                        iconLeft={<UserIcon/>}
                        label="Password"
                        required/>
                    <Button className={styles.submitBtn}>Sign In</Button>
                </BasicForm>
            </div>
        </Container>
    )
}

export default SignInForm;