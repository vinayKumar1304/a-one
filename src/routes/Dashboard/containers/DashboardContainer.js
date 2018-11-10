import { connect } from 'react-redux';

import Dashboard from '../components/dashboardRoutes';

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
