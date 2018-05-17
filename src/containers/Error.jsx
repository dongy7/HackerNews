import { connect } from 'react-redux';
import ErrorDialog from '../components/ErrorDialog';
import { closeDialog } from '../actions/dialog';
import { getError, getErrMsg } from '../reducers';
const mapStateToProps = (state) => ({
    open: getError(state),
    msg: getErrMsg(state),
});
const mapDispatchToProps = (dispatch) => ({
    onClose: () => {
        dispatch(closeDialog());
    },
});
const Error = connect(mapStateToProps, mapDispatchToProps)(ErrorDialog);
export default Error;
