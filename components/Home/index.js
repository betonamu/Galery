import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import Container from "../Common/Container";
import {homeActions} from "../../redux/actions";
import ModelItem from "../Common/ModelItem";

import styles from "./Home.module.scss";

const Home = () => {
    const dispatch = useDispatch();
    const collections = useSelector(state => state.home?.collections);
    useEffect(() => {
        dispatch(homeActions.getAllCollection());
    }, []);

    return (
        <Container>
            <div className={styles.homeWrapper}>
                {collections?.map(item => {
                    return (
                        <ModelItem data={item}/>
                    )
                })}
            </div>
        </Container>
    );
}

export default Home;