import React, {useState} from "react";
import CounterContext from "./CounterContext";

const CounterProvider = ({children}) => {
    const [number, setNumber] = useState(0);

    const updateNumber = () => {
        setNumber(number + 1);
    }

    return (
        <CounterContext.Provider value={{
            number: number,
            updateNumber: updateNumber
        }}>
            {children}
        </CounterContext.Provider>
    )
}

export default CounterProvider;

