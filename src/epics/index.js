import { combineEpics } from 'redux-observable';
import { fetchNewsEpic } from './fetchNewsEpic';
import { fetchStoryEpic } from './fetchStoryEpic';
import { fetchPageCountEpic } from './fetchPageCountEpic';
const rootEpic = combineEpics(fetchNewsEpic, fetchStoryEpic, fetchPageCountEpic);
export default rootEpic;
