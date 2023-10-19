import REDUX_BASE_PLUGIN_EXAMPLE from 'redux-base-plugin/example.action.js';
import { registerReducer } from 'redux-base-plugin/register.js';

const INITIAL_STATE = Object.freeze({
    example: null
});

const state = (redux_base_plugin_state = INITIAL_STATE, action = {}) => {
    switch(action.type) {
        case REDUX_BASE_PLUGIN_EXAMPLE: return { example: action.payload };
        default:  return redux_base_plugin_state;
    }
};
const { REDUCER_NAME, reduxBasePluginStateReducer } = registerReducer(state);

export {
    reduxBasePluginStateReducer,
    INITIAL_STATE as initial_state,
    REDUCER_NAME as default
};
