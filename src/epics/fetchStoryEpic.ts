import * as Rx from 'rxjs';
import {ActionsObservable} from 'redux-observable';
import {FETCH_STORY, FETCH_STORY_REJECTED, fetchStoryFulfilled} from '../actions/story';
import {itemUrl} from '../api';

export const fetchStoryEpic = (action$: ActionsObservable<Action<Payload, MetaData>>) =>
  action$.ofType(FETCH_STORY)
    .flatMap((action: StoryFetchRequestAction) =>
      Rx.Observable.fromPromise(fetch(`${itemUrl}/${action.payload}`))
        .flatMap(res => {
            if (!res.ok) {
              return Rx.Observable.throw(`Error: ${res.status}`);
            }
            return res.json();
          })
        .takeLast(1)
        .map(res => fetchStoryFulfilled(res))
        .catch(err => {
          return Rx.Observable.of({
            type: FETCH_STORY_REJECTED,
            payload: err,
          });
        })
    );
