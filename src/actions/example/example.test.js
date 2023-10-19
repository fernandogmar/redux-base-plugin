import test from 'tape';
import REDUX_BASE_PLUGIN_EXAMPLE, { reduxBasePluginExampleAction } from 'redux-base-plugin/example.action.js';

const TEST_NAME = 'reduxBasePluginExampleActionModule';

test(TEST_NAME, (t) => {

    t.test(`${TEST_NAME}: the default value of this module`, (t) => {
        const actual = REDUX_BASE_PLUGIN_EXAMPLE;
        t.equal(typeof actual, 'string', 'should be a string');
        t.notEqual(actual, '', 'should not be empty');
        t.end();
    });

    t.test(`${TEST_NAME}: the action creator 'reduxBasePluginExampleAction'`, (t) => {
        const card = 1;
        const created_action = reduxBasePluginExampleAction(card);
        const expected_action = {
            type: REDUX_BASE_PLUGIN_EXAMPLE,
            payload: card
        };

        t.equal(typeof reduxBasePluginExampleAction, 'function', 'should be a function');
        t.deepEqual(created_action, expected_action, 'should create the expected action');
        t.end();
    });

});
