import * as React from 'react';
import {List, ListItem} from 'material-ui/List';

const NewsList = (props: { news: Story[], fetch: Function }) => {
  props.fetch('topstories');
  return (
    <List>
      {props.news.map(story => {
        return (
          <ListItem
            primaryText={story.title}
            secondaryText={`${ story.score } points by ${ story.by } | ${ story.descendants } comments`}
          />
        );
      })}
    </List>
  );
};

export default NewsList;
