import * as React from 'react';
import * as marked from 'marked';
import { CardText } from 'material-ui/Card';
import Divder from 'material-ui/Divider';
;
const flatten = (commentItems, thread) => {
    commentItems.forEach(commentItem => {
        const { comments, ...comment } = commentItem;
        thread.push(comment);
        flatten(comments || [], thread);
    });
};
export const getCommentThread = (comments) => {
    const thread = [];
    flatten(comments, thread);
    return thread;
};
class CommentList extends React.Component {
    render() {
        return (<div>
        {getCommentThread(this.props.comments).map(comment => {
            return (<div key={comment.id} style={{ marginLeft: `${comment.level * 20}px` }}>
              <CardText>
                <p dangerouslySetInnerHTML={{ __html: marked(comment.content || '') }}/>
                <br />
                {<b>{`${comment.user}`}</b>}
                {` ${comment.time_ago}`}
              </CardText>
              <Divder />
            </div>);
        })}
      </div>);
    }
}
;
export default CommentList;
