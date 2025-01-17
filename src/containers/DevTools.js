import React from 'react'
import { createDevTools } from 'redux-devtools'
import LogMonitor from 'redux-devtools-log-monitor'
import SliderMonitor from 'redux-slider-monitor'
import DockMonitor from 'redux-devtools-dock-monitor'

export default createDevTools(
  <DockMonitor
  	toggleVisibilityKey="ctrl-h"
	changePositionKey="ctrl-k"
	changeMonitorKey='ctrl-m'
	defaultIsVisible={false}>
    <LogMonitor />
	<SliderMonitor />
  </DockMonitor>
)
