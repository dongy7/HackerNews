import * as React from 'react';
import {Card, CardTitle, CardText} from 'material-ui/Card';
import CommentList from './CommentList';

interface Props {
  story: Story;
};

class News extends React.Component<Props, null> {
  render() {
    const cardStyle = {
      margin: '15px',
    };

    return (
      <div>
        <Card style={cardStyle}>
          <CardTitle
            title={<a href={this.props.story.url}>{this.props.story.title}</a>}
            subtitle={`${ this.props.story.points } points by ${ this.props.story.user }`}
          />
        </Card>
        <br/>
        <Card style={cardStyle}>
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
