import React, { Component } from 'react'
import swiper from 'swiper'
import mojs from 'mo-js'
import { connect } from 'react-redux'


import '../styles/page.less';

class Page extends Component {
	render() {
		let {params, system} = this.props,
			width = parseFloat(system.width),
			height = parseFloat(system.height)
		if(height/width > 0.5625){
			height = width * 0.5625
		} else if(height/width < 0.5625) {
			width = height / 0.5625
		}

		const circle = new mojs.Shape({
		  shape:  			'circle',
		  scale:   			{ 0 : 1 },
		  left:         '25%',
		  fill:         { 'cyan': 'yellow' },
		  radius:       25,

		  duration:     2000,
		  repeat:       999,
		}).play();

		return (
			<div className="page">
				<div className="page-content" style={{height,width}}>

				</div>
				<div className="page-funcs">
					<div className="func prev"></div>
					<div className="func next"></div>
				</div>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		system: state.system
	}
}

module.exports = connect(mapStateToProps)(Page)
