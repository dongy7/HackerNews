import {combineEpics} from 'redux-observable';
import {fetchNewsEpic} from './fetchNewsEpic';
import {fetchStoryEpic} from './fetchStoryEpic';

const rootEpic = combineEpics(fetchNewsEpic, fetchStoryEpic);

export default rootEpic;
