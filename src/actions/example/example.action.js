import { registerAction } from 'redux-base-plugin/register.js';

const example = card => ({ payload: card });
const { ACTION_NAME, reduxBasePluginExampleAction } = registerAction(example);

export {
    reduxBasePluginExampleAction,
    ACTION_NAME as default
};
