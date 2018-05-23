import * as React from 'react'
import * as marked from 'marked'
import { CardText } from 'material-ui/Card'
import classNames from 'classnames'

class Comment extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      toggled: true
    }
  }

  render() {
    const { comment } = this.props
    const toggleClass = classNames({
      toggle: true,
      open: this.state.toggled
    })
    const commentClass = classNames({
      comment: true,
    })
    const style = this.state.toggled ? {} : { display: 'none' }
    const toggleText = this.state.toggled ? '[-]' : `[+${this.props.length}]`
    return (
      <CardText className={commentClass} style={this.props.length === 0 ? {paddingBottom:0} : {}}>
        <div className="by">
          <a href={`https://news.ycombinator.com/user?id=${comment.user}`}>
            {comment.user}
          </a>
          {` ${comment.time_ago} `}
          {this.props.thread ? (
            <span className={toggleClass}>
              <a onClick={() => this.setState({ toggled: !this.state.toggled })}>{toggleText}</a>
            </span>
          ) : (<span />)}
        </div>
        <div className="text">
          <p
            dangerouslySetInnerHTML={{
              __html: marked(comment.content || '')
            }}
          />
        </div>

        <div style={style}>
          {this.props.children}
        </div>
      </CardText>
    )
  }
}

class CommentList extends React.Component {
  render() {
    return (
      <ul className="comment-children">
        {this.props.children}
      </ul>
    )
  }
}

class CommentItems extends React.Component {
  constructCommentList(comment) {
    const replyLength = comment.comments.length
    if (replyLength > 0) {
      return (
        <CommentList key={comment.id}>
          <Comment comment={comment} length={replyLength} thread>
            {comment.comments.map(comment => this.constructCommentList(comment))}
          </Comment>
        </CommentList>
      )
    } else {
      return <Comment key={comment.id} comment={comment} length={replyLength} />
    }
  }

  render() {
    return (
      <CommentList>
        {this.props.comments.map(comment => this.constructCommentList(comment))}
      </CommentList>
    )
  }
}

export default CommentItems
