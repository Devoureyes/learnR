import React from "react";

const StoreContext = React.createContext(null);

export const Provider = (p) => {
    return <StoreContext.Provider value={p.store}>
        {p.children}
    </StoreContext.Provider>
}

export default  StoreContext;