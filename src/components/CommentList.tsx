import * as React from 'react';
import {CardText} from 'material-ui/Card';
import Divder from 'material-ui/Divider';

interface Props {
  comments: CommentItem[];
};

class CommentList extends React.Component<Props, null> {
  render() {
    return (
      <div>
        {this.props.comments.map(comment => {
          return (
            <div>
              <CardText>
                {comment.text}
                <br />
                {<b>{comment.by}</b>}
              </CardText>
              <Divder/>
            </div>
          );
        })}
      </div>
    );
  }
};

export default CommentList;
