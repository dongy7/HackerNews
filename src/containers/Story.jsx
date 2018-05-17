import * as React from 'react';
import { connect } from 'react-redux';
import Spinner from '../components/Spinner';
import News from '../components/News';
import { fetchStory } from '../actions/story';
import { getStory, getIsFetching } from '../reducers';
class NewsWrapper extends React.Component {
    componentDidMount() {
        const { fetch, params } = this.props;
        fetch(params.id);
    }
    render() {
        const { isFetching, story } = this.props;
        if (isFetching || !story) {
            return <Spinner />;
        }
        return <News story={story}/>;
    }
}
const mapStateToProps = (state) => ({
    story: getStory(state),
    isFetching: getIsFetching(state),
});
const mapDispatchToProps = (dispatch) => ({
    fetch: (id) => {
        dispatch(fetchStory(id));
    }
});
const Story = connect(mapStateToProps, mapDispatchToProps)(NewsWrapper);
export default Story;
