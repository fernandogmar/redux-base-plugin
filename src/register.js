import { registerPlugin } from 'redux-plugin-creator';

const { PLUGIN_NAME, registerAction, registerReducer, registerSelector } = registerPlugin('redux-base-plugin');

export {
    registerAction,
    registerReducer,
    registerSelector,
    PLUGIN_NAME as default
};
