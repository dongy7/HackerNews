import * as Rx from 'rxjs';
import {ActionsObservable} from 'redux-observable';
import {FETCH_STORY, fetchStoryFulfilled} from '../actions/story';
import {itemUrl} from '../api';

export const fetchStoryEpic = (action$: ActionsObservable<Action<Payload>>) =>
  action$.ofType(FETCH_STORY)
    .flatMap((action: StoryFetchRequestAction) =>
      Rx.Observable.fromPromise(fetch(`${itemUrl}/${action.payload}`))
        .flatMap(res => res.json())
        .takeLast(1)
        .map(res => fetchStoryFulfilled(res))
    );
