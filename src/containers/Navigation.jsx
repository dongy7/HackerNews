import { connect } from 'react-redux';
import Navbar from '../components/Navbar';
import { change, close, toggle } from '../actions/nav';
import { getNavStatus } from '../reducers';
const mapStateToProps = (state) => ({
    open: getNavStatus(state),
});
const mapDispatchToProps = (dispatch) => ({
    onChange: (isOpen) => {
        dispatch(change(isOpen));
    },
    onClose: () => {
        dispatch(close());
    },
    onToggle: () => {
        dispatch(toggle());
    },
});
const Navigation = connect(mapStateToProps, mapDispatchToProps)(Navbar);
export default Navigation;
