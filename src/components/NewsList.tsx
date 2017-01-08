import * as React from 'react';
import {List, ListItem} from 'material-ui/List';

const NewsList = (props: { news: Story[], onClick: Function }) => {
  return (
    <List>
      {props.news.map(story => {
        const infoText = (
          <div>
            {`${ story.points } points by ${ story.user } ${story.time_ago} | `}
            <a onClick={() => props.onClick(story.id)}>
              {`${ story.comments_count } comments`}
            </a>
          </div>
        );
        return (
          <ListItem
            key={story.id}
            primaryText={<a href={story.url}>{story.title}</a>}
            secondaryText={infoText}
            disabled
          />
        );
      })}
    </List>
  );
};

export default NewsList;
