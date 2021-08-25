import React from "react";

// eslint-disable-next-line import/no-anonymous-default-export
export default props => (
    <div style={{color: 'yellow', border: '3px dashed red', padding: '5px'}}>
        {props.error}
    </div>
)