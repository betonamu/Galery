import React, {useEffect} from "react";

import Container from "@components/Common/Container";
import ModelItem from "@components/Common/ModelItem";
import {useSelectorTyped} from "@hooks/useSelectorType";

import styles from "./Home.module.scss";
import MetaWrapper from "@components/Common/MetaWrapper";

const Home: React.FC = () => {
    const collections = useSelectorTyped(state => state.home.collections);

    return (
        <MetaWrapper meta={{}}>
            <Container>
                <div className={styles.homeWrapper}>
                    {collections.map((item: any, index: number) => (
                        <ModelItem data={item} key={index}/>
                    ))}
                    <h1 className={styles.mixins}>TEST MIXINS</h1>
                </div>
            </Container>
        </MetaWrapper>
    );
}

export default Home;