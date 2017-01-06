import {combineEpics} from 'redux-observable';
import {fetchNewsEpic} from './fetchNewsEpic';
import {fetchCommentEpic} from './fetchCommentEpic';

const rootEpic = combineEpics(fetchNewsEpic, fetchCommentEpic);

export default rootEpic;
