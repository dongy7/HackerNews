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

interface NewsCache {
  [page: number]: Story[]
}

interface Category {
  type: string;
  pageAt: number;
  pageCount: number;
  cachedNews: NewsCache;
}

interface Page {
  type: string;
  id: number;
}

type Payload = string|Story|Story[]|boolean|number
type MetaData = number|string|Page|null|undefined

interface Action<Payload, MetaData> {
  type: string;
  payload: Payload;
  metadata: MetaData;
}

type NewsFetchRequestAction = Action<string, number>
type NewsFetchFulfilledAction = Action<Story[], Page>
type CommentFetchRequestAction = Action<string, null>
type StoryFetchRequestAction = Action<string, null>
type PageCountFetchFulfilledAction = Action<number, string>

interface State {
  isFetching: boolean;
  story: Story;
  nav: boolean;
  newCategory: Category;
  topCategory: Category;
  error: boolean;
  msg: string;
}

interface StoryRouteParam {
  id: string;
}

interface FeedRouteParam {
  type: string;
  page: string;
}
