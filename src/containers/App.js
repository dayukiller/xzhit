import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className="app">{this.props.children || 'this is the begin'}</div>
    );
  }
}


// App.propTypes = {
//
// };
// function mapStateToProps(state) {
//   const props = {};
//   return props;
// }
// function mapDispatchToProps(dispatch) {
//   const actions = {};
//   const actionMap = { actions: bindActionCreators(actions, dispatch) };
//   return actionMap;
// }
// export default connect(mapStateToProps, mapDispatchToProps)(App);
export default connect()(App);
