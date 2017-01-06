interface Story {
  by: string;
  descendants: number;
  id: number;
  kids: number[];
  score: number;
  time: number;
  title: string;
  type: string;
  url: string;
}

interface CommentItem {
  by: string;
  id: number;
  kids: number[];
  parent: number;
  text: string;
  time: number;
  type: string;
}

type Payload = string|Story[]

interface Action<Payload> {
  type: string;
  payload: Payload;
}

type NewsFetchRequestAction = Action<string>
type NewsFetchFulfilledAction = Action<Story[]>

interface State {
  news: Story[];
  isFetching: boolean;
}
