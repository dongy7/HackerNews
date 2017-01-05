import * as React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import { Story } from './NewsList';

interface Props {
  story: Story;
};

class News extends React.Component<Props, null> {
  render() {
    return (
      <Card>
        <CardTitle
          title={this.props.story.title}
          subtitle={`${ this.props.story.score } points by ${ this.props.story.by }`}
        />
      </Card>
    );
  }
};

export default News;
