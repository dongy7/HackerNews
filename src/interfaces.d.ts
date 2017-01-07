interface CommentItem {
  id: number;
  level: number;
  user: string;
  time: number;
  time_ago: string;
  content: string;
  comments: CommentItem[];
}

interface Story {
  id: number;
  title: string;
  points: number;
  user: string;
  time: number;
  time_ago: string;
  type: string;
  url: string;
  domain: string;
  comments: CommentItem[];
  comments_count: number;
}


type Payload = string|Story[]|CommentItem[]

interface Action<Payload> {
  type: string;
  payload: Payload;
}

type NewsFetchRequestAction = Action<string>
type NewsFetchFulfilledAction = Action<Story[]>
type CommentFetchRequestAction = Action<string>

interface State {
  news: Story[];
  isFetching: boolean;
  comments: CommentItem[];
}

interface StoryRouteParam {
  id: string;
}
