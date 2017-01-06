import * as React from 'react';
import {connect} from 'react-redux';
import Spinner from '../components/Spinner';
import CommentList from '../components/CommentList';
import {fetchComments} from '../actions/comments';
import {getComments, getIsFetching} from '../reducers';

interface Props {
  isFetching: boolean;
  comments: CommentItem[];
  fetch: Function;
  id: string;
}

class CommentWrapper extends React.Component<Props, null> {
  componentDidMount() {
    const { fetch, id } = this.props;
    fetch(id);
  }

  render() {
    const { isFetching, comments } = this.props;
    if (isFetching) {
      return <Spinner />;
    }

    return <CommentList comments={comments} />;
  }
}

const mapStateToProps = (state: State) => ({
  comments: getComments(state),
  isFetching: getIsFetching(state),
});

const mapDispatchToProps = (dispatch: Function) => ({
  fetch: (id: string) => {
    dispatch(fetchComments(id));
  }
});

const Story = connect(mapStateToProps, mapDispatchToProps)(CommentWrapper);

export default Story;
