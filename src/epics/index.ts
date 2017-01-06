import {combineEpics} from 'redux-observable';
import {fetchNewsEpic} from './fetchNewsEpic';

const rootEpic = combineEpics(fetchNewsEpic);

export default rootEpic;
