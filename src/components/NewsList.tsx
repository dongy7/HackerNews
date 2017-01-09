import * as React from 'react';
import {Card} from 'material-ui/Card';
import {List, ListItem} from 'material-ui/List';
import {Grid, Row, Col} from 'react-bootstrap';
import PageNavbar from './PageNavbar';

const NewsList = (
  props: {
    news: Story[], page: number, pageCount: number,
    onClick: Function, onLeftNav: Function, onRightNav: Function,
    onPageChange: Function,
  }) => {
    return (
      <div>
        <PageNavbar
          page={props.page}
          pageCount={props.pageCount}
          onLeftClick={props.onLeftNav}
          onRightClick={props.onRightNav}
          onPageChange={props.onPageChange}
        />
        <Grid>
          <Row>
            <Col xs={2} md={3} />
            <Col xs={8} md={12}>
              <Card>
                <List>
                  {props.news.map(story => {
                    const infoText = (
                      <div>
                        {`${ story.points } points by ${ story.user } ${story.time_ago} | `}
                        <a onClick={() => props.onClick(story.id)}>
                          {`${ story.comments_count } comments`}
                        </a>
                      </div>
                    );
                    return (
                      <ListItem
                        key={story.id}
                        primaryText={<a href={story.url}>{story.title}</a>}
                        secondaryText={infoText}
                        disabled
                      />
                    );
                  })}
                </List>
              </Card>
            </Col>
            <Col xsHidden md={3} />
          </Row>
        </Grid>
      </div>
    );
};

export default NewsList;
