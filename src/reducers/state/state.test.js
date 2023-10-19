import test from 'tape';
import REDUX_BASE_PLUGIN, { reduxBasePluginStateReducer, initial_state } from 'redux-base-plugin/state.reducer.js';
import { reduxBasePluginExampleAction } from 'redux-base-plugin/example.action.js';

const TEST_NAME = 'reduxBasePluginStateReducerModule';

test(TEST_NAME, (t) => {
    const nothing = undefined;

    t.test(`${TEST_NAME}: the default export of this module`, (t) => {
        const actual = REDUX_BASE_PLUGIN;
        t.equal(typeof actual, 'string', 'should be a string');
        t.notEqual(actual, '', 'should not be empty');
        t.end();
    });

    t.test(`${TEST_NAME}: the 'reduxBasePluginState' reducer`, (t) => {
        t.equal(typeof reduxBasePluginStateReducer, 'function', 'should be a function');
        t.deepEqual(reduxBasePluginStateReducer(), initial_state, 'should return the initial value when called without arguments');
        t.end();
    });

    t.test(`${TEST_NAME}: for action 'reduxBasePluginExampleAction' the reducer, when the card is selected`, (t) => {
        const action = reduxBasePluginExampleAction('this is an example');
        const state = _state({ example: null });
        const new_state = reduxBasePluginStateReducer(state, action);
        const expected_state =_state({ example: 'this is an example' });

        t.notEqual(new_state, state, 'should return a different state');
        t.deepEqual(new_state, expected_state, 'should update the selected cards');
        t.end();
    });

    function _state(values) {
        return {
            ...reduxBasePluginStateReducer(),
            ...values
        }; // Extend initial state
    }

});
