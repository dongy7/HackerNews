import * as React from 'react';
import {connect} from 'react-redux';
import Spinner from '../components/Spinner';
import News from '../components/News';
import {fetchStory} from '../actions/story';
import {getStory, getIsFetching} from '../reducers';

interface Props {
  isFetching: boolean;
  story: Story;
  fetch: Function;
  params: StoryRouteParam;
}

class NewsWrapper extends React.Component<Props, null> {
  componentDidMount() {
    const { fetch, params } = this.props;
    fetch(params.id);
  }

  render() {
    const { isFetching, story } = this.props;
    if (isFetching || !story) {
      return <Spinner />;
    }

    return <News story={story} />;
  }
}

const mapStateToProps = (state: State) => ({
  story: getStory(state),
  isFetching: getIsFetching(state),
});

const mapDispatchToProps = (dispatch: Function) => ({
  fetch: (id: string) => {
    dispatch(fetchStory(id));
  }
});

const Story = connect(mapStateToProps, mapDispatchToProps)(NewsWrapper);

export default Story;
