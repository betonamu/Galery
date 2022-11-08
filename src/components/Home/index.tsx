import React, {useEffect} from "react";
import {useDispatch} from "react-redux";

import Container from "@components/Common/Container";
import {useSelectorTyped} from "@hooks/useSelectorType";
import MetaWrapper from "@components/Common/MetaWrapper";
import BriefIntroduction from "@components/Home/BriefIntroduction";

import styles from "./Home.module.scss";

const Home: React.FC = () => {
    const dispatch = useDispatch();
    const collections = useSelectorTyped(state => state.home.collections);
    const a = useSelectorTyped(state => state.product.models)

    return (
        <MetaWrapper meta={{}}>
            <Container>
                <BriefIntroduction/>

            </Container>
        </MetaWrapper>
    );
}

export default Home;