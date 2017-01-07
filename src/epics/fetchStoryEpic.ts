import * as Rx from 'rxjs';
import {ActionsObservable} from 'redux-observable';
import {FETCH_STORY, fetchStoryFulfilled} from '../actions/story';
import {itemUrl} from '../api';

export const fetchStoryEpic = (action$: ActionsObservable<Action<Payload>>) =>
  action$.ofType(FETCH_STORY)
    .flatMap((action: StoryFetchRequestAction) =>
      Rx.Observable.ajax(`${itemUrl}/${action.payload}`)
        .flatMap(res => Rx.Observable.of(res.response))
        .takeLast(1)
        .map(res => fetchStoryFulfilled(res))
    );
