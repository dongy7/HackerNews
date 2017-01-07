import * as React from 'react';
import * as marked from 'marked';
import {CardText} from 'material-ui/Card';
import Divder from 'material-ui/Divider';

interface Props {
  comments: CommentItem[];
};

const flatten = (commentItems: CommentItem[], thread: CommentItem[]) => {
  commentItems.forEach(commentItem => {
    const { comments, ...comment } = commentItem;
    thread.push(comment);
    flatten(comments || [], thread);
  });
};

export const getCommentThread = (comments: CommentItem[]): CommentItem[] => {
  const thread: CommentItem[] = [];
  flatten(comments, thread);

  return thread;
};

class CommentList extends React.Component<Props, null> {
  render() {
    return (
      <div>
        {getCommentThread(this.props.comments).map(comment => {
          return (
            <div key={comment.id}>
              <CardText>
                <p dangerouslySetInnerHTML={{__html: marked(comment.content)}} />
                <br />
                {<b>{comment.user}</b>}
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
