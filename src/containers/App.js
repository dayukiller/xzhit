import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as sysAct from '../actions/system'
import click from '../plugins/mojs/click'
import Main from '../components/Main'

class App extends Component {
	constructor(props) {
		super(props)
		click()
	}

	componentWillMount() {
		this.props.dispatch(sysAct.initApp())
	}

	componentDidMount(){
		let _this = this
		window.onresize = ()=>{
			_this.props.dispatch(sysAct.resizeApp())
		}
	}

	render() {
		return (
			<div className="app">{this.props.children || <Main />}</div>
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
