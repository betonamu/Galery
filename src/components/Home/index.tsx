import React, {useEffect} from "react";
import {useDispatch} from "react-redux";

import Container from "@components/Common/Container";
import {useSelectorTyped} from "@hooks/useSelectorType";
import MetaWrapper from "@components/Common/MetaWrapper";
import BriefIntroduction from "@components/Home/BriefIntroduction";

import styles from "./Home.module.scss";
import {getObjectData, getStringData} from "@utils/localStorage";
import {storageKeys} from "@constants";
import {Form, FormikContext, FormikProvider, useFormik} from "formik";
import OTPForm from "@components/Common/Form/OTPField";

const Home: React.FC = () => {
    const dispatch = useDispatch();
    const collections = useSelectorTyped(state => state.home.collections);
    const a = useSelectorTyped(state => state.product.models)
    const userToken = getObjectData(storageKeys.USER_TOKEN);

    const onSubmit = (values: any) => {
        console.log(values)
    }

    const formikBag = useFormik({
        initialValues: {otp: {otp1: '', otp2: '', otp3: '', otp4: '', otp5: '', otp6: ''}},
        onSubmit
    });


    return (
        <MetaWrapper meta={{}}>
            <Container>
                <BriefIntroduction/>

                <FormikContext.Provider value={formikBag}>
                    <Form>
                        <OTPForm name="otp" otpCount={6}/>
                    </Form>
                </FormikContext.Provider>
            </Container>
        </MetaWrapper>
    );
}

export default Home;