import { Context } from '@azure/functions';
import { mockContext} from './test_utils/MockContext';

const context = {
    log: {
        info: jest.fn(message => console.log(message)),
        error: jest.fn(message => console.log(message)),
        verbose: jest.fn(message => console.log(message)),
        warn: jest.fn(message => console.log(message))
    }
}

function logstuff(context: Context) {

}

test("my mock test", () => {

    logstuff(mockContext);

    context.log.info('it\'s a sunny day');
    context.log.error('it\'s a sunny day');
    context.log.verbose('it\'s a sunny day');
    context.log.warn('it\'s a sunny day');

    expect(context.log.info.mock.calls.length).toBe(1);
    expect(context.log.error.mock.calls.length).toBe(1);
    expect(context.log.warn.mock.calls.length).toBe(1);
    expect(context.log.verbose.mock.calls.length).toBe(1);
})