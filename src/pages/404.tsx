import {CSSProperties} from "react";

const style: CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}

const Custom404 = () => {
    return (
        <div style={style}>
            <h1>404 - Page Not Found</h1>
        </div>
    );
}

export default Custom404;