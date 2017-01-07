import * as React from 'react';
import {Card, CardTitle, CardText} from 'material-ui/Card';
import CommentList from './CommentList';

interface Props {
  story: Story;
};

class News extends React.Component<Props, null> {
  render() {
    return (
      <div>
        <Card>
          <CardTitle
            title={this.props.story.title}
            subtitle={`${ this.props.story.points } points by ${ this.props.story.user }`}
          />
        </Card>
        <br/>
        <Card>
          <CardTitle
            title="Comments"
          />
          <CardText>
            <CommentList
              comments={this.props.story.comments}
            />
          </CardText>
        </Card>
      </div>
    );
  }
};

export default News;
