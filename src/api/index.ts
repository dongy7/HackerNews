const baseUrl = 'https://hacker-news.firebaseio.com/v0';

export const fetchNewest = () => {
  fetch(`${ baseUrl }/newstories.json]`)
    .then((res) => res.json)
    .catch((err) => {
      throw new Error(`Failed to fetch newest stories: ${ err }`);
    });
};

export const fetchItem = (id: string) => {
  fetch(`${ baseUrl }/item/${ id }.json`)
    .then((res) => res.json)
    .catch((err) => {
      throw new Error(`Failed to fetch item ${ id }: ${ err }`);
    });
};