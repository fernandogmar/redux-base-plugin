import test from 'tape';
import { reduxBasePluginExampleSelector } from 'redux-base-plugin/example.selector.js';

const TEST_NAME = 'reduxBasePluginExampleSelectorModule';

test(TEST_NAME, (t) => {

    t.test(`${TEST_NAME}: the 'reduxBasePluginExampleSelector' selector`, (t) => {
        t.equal(typeof reduxBasePluginExampleSelector, 'function', 'should be a function');
        t.deepEqual(reduxBasePluginExampleSelector(), undefined, 'should return undefined');
        t.deepEqual(reduxBasePluginExampleSelector({}), undefined, 'should return undefined');
        t.deepEqual(reduxBasePluginExampleSelector({ example: 'this is an example' }), 'this is an example', 'should return the example');
        t.end();
    });

});
