import React from 'react';
import Loader from '../todo/Loader';

export const withSuspense = Component => {
    return props => {
        return <React.Suspense fallback={<Loader type={1}/>}>
            <Component {...props} />
        </React.Suspense>
    }
}