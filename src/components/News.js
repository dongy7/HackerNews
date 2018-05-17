import * as React from 'react'
import { Card, CardTitle, CardText } from 'material-ui/Card'
import Divder from 'material-ui/Divider'
import CommentList from './CommentList'
class News extends React.Component {
  render() {
    const cardStyle = {
      margin: '15px'
    }
    return (
      <div>
        <Card style={cardStyle}>
          <CardTitle
            title={<a href={this.props.story.url}>{this.props.story.title}</a>}
            subtitle={`${this.props.story.points} points by ${
              this.props.story.user
            }`}
          />
        </Card>
        <Card style={cardStyle}>
          <CardTitle title={`${this.props.story.comments_count} Comments`} />
          <Divder />
          <CardText>
            <CommentList comments={this.props.story.comments} />
          </CardText>
        </Card>
      </div>
    )
  }
}
export default News
