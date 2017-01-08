interface CommentItem {
  id: number;
  level: number;
  user: string;
  time: number;
  time_ago: string;
  content: string;
  comments?: CommentItem[];
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

type Payload = string|Story|Story[]|boolean
type MetaData = number|null|undefined

interface Action<Payload, MetaData> {
  type: string;
  payload: Payload;
  metadata?: MetaData;
}

type NewsFetchRequestAction = Action<string, number>
type NewsFetchFulfilledAction = Action<Story[], null>
type CommentFetchRequestAction = Action<string, null>
type StoryFetchRequestAction = Action<string, null>

interface State {
  news: Story[];
  isFetching: boolean;
  story: Story;
  nav: boolean;
  newPage: number;
  topPage: number;
}

interface StoryRouteParam {
  id: string;
}

interface FeedRouteParam {
  type: string;
  page: string;
}
