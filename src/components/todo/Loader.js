import React from "react";

const s = {
    width: '100%',
    height: '100%',
    //background: 'linear-gradient(145deg, rgba(255, 0, 0, 1) 0%, rgba(255, 115, 0, 1) 44%, rgba(255, 179, 0, 1) 91%)',
    backgroundColor: 'rgba(108,108,108,0.6)',
    display: 'flex',
    justifyContent: 'center',
}
// eslint-disable-next-line import/no-anonymous-default-export
export default (p) => {
    return <div
        style={s}>
        {p.type === 1 &&
        <div className="lds-ellipsis">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
        </div>
        }
        {p.type === 2 && <div className="lds-roller">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
        }
        {p.type === 3 && <div className="lds-hourglass"></div>
        }
    </div>
}