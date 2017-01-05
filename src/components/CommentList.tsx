import * as React from 'react';
import {List, ListItem} from 'material-ui/List';
import {Comment} from '../types';

interface Props {
  comments: Comment[];
};

class CommentList extends React.Component<Props, null> {
  render() {
    return (
      <List>
        {this.props.comments.map(comment => {
          return (
            <ListItem
              primaryText={comment.text}
              secondaryText={comment.by}
            />
          );
        })}
      </List>
    );
  }
};

export default CommentList;
