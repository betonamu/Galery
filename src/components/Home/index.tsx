import React, {useEffect} from "react";
import {useDispatch} from "react-redux";
import useSWR from "swr";
import * as Yup from 'yup';

import Container from "@components/Common/Container";
import ModelItem from "@components/Common/ModelItem";
import {useSelectorTyped} from "@hooks/useSelectorType";
import MetaWrapper from "@components/Common/MetaWrapper";

import styles from "./Home.module.scss";
import DatePicker from "@components/Common/Form/DatePicker";
import BasicForm from "@components/Common/Control/BasicForm";
import apiConfig from "@constants/apiConfig";

const Home: React.FC = () => {
    const dispatch = useDispatch();
    const collections = useSelectorTyped(state => state.home.collections);
    const a = useSelectorTyped(state => state.product.models)
    const headers = {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiJ4aXVyZW4uYWRtaW5AZ21haWwuY29tIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvZ2l2ZW5uYW1lIjoiTmd1eWVuIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoiU3lzdGVtLlJ1bnRpbWUuQ29tcGlsZXJTZXJ2aWNlcy5Bc3luY1Rhc2tNZXRob2RCdWlsZGVyYDErQXN5bmNTdGF0ZU1hY2hpbmVCb3hgMVtTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5JTGlzdGAxW1N5c3RlbS5TdHJpbmddLE1pY3Jvc29mdC5Bc3BOZXRDb3JlLklkZW50aXR5LlVzZXJNYW5hZ2VyYDErPEdldFJvbGVzQXN5bmM-ZF9fMTExW015V2ViQVBJLkVudGl0aXlGcmFtZXdvcmsuRW50aXRpZXMuQXBwVXNlcl1dIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZSI6ImFkbWluIiwiZXhwIjoxNjYxNDUzNDYyLCJpc3MiOiJodHRwczovL3hpdXJlbi1nYWxlcnktYXBpLmNvbSIsImF1ZCI6Imh0dHBzOi8veGl1cmVuLWdhbGVyeS1hcGkuY29tIn0.-bZsEOySGl9wDL0xMf6Zp8N6E0Qg4Xz-VL9QHa6ACiI'
    }
    const {data, error, isValidating} = useSWR(apiConfig.collection.getAllCollection);
    console.log(data, isValidating, error);


    return (
        <MetaWrapper meta={{}}>
            <Container>
                <div className={styles.homeWrapper}>
                    {collections.map((item: any, index: number) => (
                        <ModelItem data={item} key={index}/>
                    ))}
                    <h1 className={styles.mixins}>TEST MIXINS</h1>
                </div>
                <BasicForm initialValues={{date: ''}}
                           onSubmit={(values: any) => console.log(values)}
                           validationSchema={() => Yup.object().shape({})}>
                    <DatePicker name='date'/>
                    <input type="date" />
                    <button type={"submit"} className={styles.submit}>ngu</button>
                </BasicForm>
            </Container>
        </MetaWrapper>
    );
}

export default Home;