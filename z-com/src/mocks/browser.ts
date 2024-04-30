import {setupWorker} from 'msw/browser';
import {handler} from './handler';

const worker=setupWorker(...handler);

export default worker;