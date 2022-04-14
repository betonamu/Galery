import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import Container from "@components/Common/Container";
import {homeActions} from "@redux/actions";
import ModelItem from "@components/Common/ModelItem";

import styles from "./Home.module.scss";

const Home = () => {
    const dispatch = useDispatch();
    const collections = useSelector(state => state.home?.collections);
    console.log(collections)

    return (
        <Container>
            <div className={styles.homeWrapper}>
                {collections?.map((item, index) => (
                        <ModelItem data={item} key={index}/>
                ))}
            </div>
        </Container>
    );
}

export default Home;