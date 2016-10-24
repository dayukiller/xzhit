import React, { Component } from 'react'
import Page from './Page'
import '../styles/report.less'

class Report extends Component {
	renderPageContent(index) {

	}

	render() {
		let {params} = this.props
		let pages = [{
			index: 0,
			theme: 'normal',
			renderPageContent: this.renderPageContent.bind(this)
		}]

		return (
			<div className="report">
				{pages.map(p=><Page page={p} />)}
			</div>
		)
	}
}

module.exports = Report
