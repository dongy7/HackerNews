import * as React from 'react'
import { Card, CardTitle, CardText } from 'material-ui/Card'
import Divider from 'material-ui/Divider'
import ThreadedCommentList from './ThreadedCommentList'

class News extends React.Component {
  render() {
    return (
      <div className="view">
        <Card>
          <CardTitle
            title={<a href={this.props.story.url}>{this.props.story.title}</a>}
            subtitle={`${this.props.story.points} points by ${
              this.props.story.user
            }`}
          />
        </Card>
        <Card className="view-comments">
          <CardText>
            <CardText style={{ fontSize: '1.1em' }}>
              {`${this.props.story.comments_count} Comments`}
            </CardText>
            <Divider />
            <ThreadedCommentList count={this.props.story.comments_count} comments={this.props.story.comments} />
          </CardText>
        </Card>
      </div>
    )
  }
}
export default News
