import React from 'react';

const AppContext = React.createContext({});

export default AppContext;

export const appReducer = (state, action) => {
    switch (action.type) {
        case 'TOGGLE_MENU':
            return {
                ...state,
                isMenuOpen: !state.isMenuOpen
            };
        case 'SET_PAGE':
            return {
                ...state,
                activePage: action.activePage,
                isMenuOpen: false
            };
        default:
            return state;
    }
};
