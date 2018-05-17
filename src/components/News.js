import * as React from 'react'
import { Card, CardTitle, CardText } from 'material-ui/Card'
import Divder from 'material-ui/Divider'
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
          <CardTitle title={`${this.props.story.comments_count} Comments`} style={{ paddingLeft: '32px' }} />
          <Divder />
          <CardText>
            <ThreadedCommentList comments={this.props.story.comments} />
          </CardText>
        </Card>
      </div>
    )
  }
}
export default News
