import * as React from 'react';
import {List, ListItem} from 'material-ui/List';

const NewsList = (props: { news: Story[], onClick: Function }) => {
  return (
    <List>
      {props.news.map(story => {
        return (
          <ListItem
            key={story.id}
            primaryText={story.title}
            secondaryText={
              `${ story.points } points by ${ story.user } ${story.time_ago} | ${ story.comments_count } comments
              `}
            onClick={() => props.onClick(story.id)}
          />
        );
      })}
    </List>
  );
};

export default NewsList;
