import React from 'react';

const AppContext = React.createContext();

export default AppContext;

export const appReducer = (state, action) => {
    switch (action.type) {
        case 'TOGGLE_MENU':
            return {
                isMenuOpen: !state.isMenuOpen
            };
        default:
            return state;
    }
};
