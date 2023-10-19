import { registerSelector } from 'redux-base-plugin/register.js';

const example = (redux_base_plugin_state) => redux_base_plugin_state?.example;
const { SELECTOR_NAME, reduxBasePluginExampleSelector } = registerSelector(example);

export {
    reduxBasePluginExampleSelector,
    SELECTOR_NAME as default
};
