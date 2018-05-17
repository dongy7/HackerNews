import * as React from 'react'
import { Card } from 'material-ui/Card'
import { List, ListItem } from 'material-ui/List'
import PageNavbar from './PageNavbar'
const NewsList = props => {
  return (
    <div>
      <PageNavbar
        page={props.page}
        pageCount={props.pageCount}
        onLeftClick={props.onLeftNav}
        onRightClick={props.onRightNav}
        onPageChange={props.onPageChange}
      />

      <div className="view">
        <Card className="main-card">
          <List>
            {props.news.map(story => {
              const infoText = (
                <div>
                  {`${story.points} points by ${story.user} ${
                    story.time_ago
                    } | `}
                  <a onClick={() => props.onClick(story.id)}>
                    {`${story.comments_count} comments`}
                  </a>
                </div>
              )
              return (
                <ListItem
                  key={story.id}
                  className="news-item"
                  primaryText={<a href={story.url}>{story.title}</a>}
                  secondaryText={infoText}
                  disabled
                />
              )
            })}
          </List>
        </Card>
      </div>
    </div>
  )
}
export default NewsList
