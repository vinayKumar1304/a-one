import { connect } from 'react-redux';

import Dashboard from '../components/Dashboard';

const mapDispatchToProps = (dispatch) => {
  return({
    dashboardProps: (status) => dispatch(dashboardProps(status))
  })
};

const mapStateToProps = (state) => {
    return ({
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
