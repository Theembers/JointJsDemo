/********************************************************
 配置
*/
var port = {
	circle: {
		markup: {}
	},
	rect: {
		markup: {}
	}
}

/************************** circle **************************/
port.circle.markup.in = '<circle class="tap-port-in-body"/>'
port.circle.markup.out = '<circle class="tap-port-out-body"/>'
port.circle.inputCSS = {
	'.tap-port-in-body': {
		stroke: '#16A085',
		'stroke-width': 2,
		r: 7,
		magnet: 'passive'
	}
}
port.circle.outputCSS = {
	'.tap-port-out-body': {
		stroke: '#E74C3C',
		'stroke-width': 2,
		r: 7,
		magnet: !0
	}
}

/************************** rect **************************/
port.rect.markup.in = '<rect class="port-in-body"/>'
port.rect.markup.out = '<rect class="port-out-body"/>'
port.rect.inputCSS = {
	'.port-in-body': {
		stroke: '#16A085',
		'stroke-width': 2,
		width: 12,
		height: 12,
		x: -6,
		y: -6,
		magnet: 'passive'
	}
}
port.rect.outputCSS = {
	'.port-out-body': {
		stroke: '#E74C3C',
		'stroke-width': 2,
		width: 12,
		height: 12,
		x: -6,
		y: -6,
		magnet: !0
	}
}


var jointConfig = {
	// 配置元素接口样式
	portGroups: {
		circle: {
			leftInPort: {
				position: 'left', // 位置（top bottom left right）（默认left）
				attrs: port.circle.inputCSS,
				label: {
					markup: '<g></g>'
				},
				markup: port.circle.markup.in
			},
			leftOutPort: {},
			rightInPort: {
				position: 'right',
				attrs: port.circle.inputCSS,
				label: {
					markup: '<g></g>'
				},
				markup: port.circle.markup.in
			},
			rightOutPort: {
				position: 'right',
				attrs: port.circle.outputCSS,
				label: {
					markup: '<g></g>'
				},
				markup: port.circle.markup.out
			},
			topInPort: {
				position: 'top',
				attrs: port.circle.inputCSS,
				label: {
					markup: '<g></g>'
				},
				markup: port.circle.markup.in
			},
			topOutPort: {},
			bottomInPort: {},
			bottomOutPort: {
				position: 'bottom',
				attrs: port.circle.outputCSS,
				label: {
					markup: '<g></g>'
				},
				markup: port.circle.markup.out
			}
		},
		rect: {
			leftInPort: {
				position: 'left', // 位置（top bottom left right）（默认left）
				attrs: port.rect.inputCSS,
				label: {
					markup: '<g></g>'
				},
				markup: port.rect.markup.in
			},
			leftOutPort: {},
			rightInPort: {},
			rightOutPort: {
				position: 'right',
				attrs: port.rect.outputCSS,
				label: {
					markup: '<g></g>'
				},
				markup: port.rect.markup.out
			},
			topInPort: {
				position: 'top',
				attrs: port.rect.inputCSS,
				label: {
					markup: '<g></g>'
				},
				markup: port.rect.markup.in
			},
			topOutPort: {},
			bottomInPort: {},
			bottomOutPort: {
				position: 'bottom',
				attrs: port.rect.outputCSS,
				label: {
					markup: '<g></g>'
				},
				markup: port.rect.markup.out
			}
		}

		/**
			port规则
			1. input/output port为方形
			2. tap port 为圆形，tap 属于output
			3. input 不可以成功引出连线
			4. 每个port只能引出一条连线
			
			校验规则
			1. input/output 必须连接
			
			
		*/



	},
	// 配置元素样式
	elementModel: {
		circle: {
			size: {
				width: 50,
				height: 50
			},
			markup: '<g class="rotatable"><g class="scalable"><circle/></g><text class="label1"/></g>',
			attrs: {
				circle: {
					stroke: '#0066CC',
					'stroke-width': 2,
					r: 24,
					cx: 24,
					cy: 24
				},
				'.label1': {
					'font-size': 14,
					'text-anchor': 'middle',
					'ref-x': .5,
					'ref-y': .5,
					'y-alignment': 'middle',
					'fill': '#000000'
				},
			}
		},
		rect: {
			size: {
				width: 120,
				height: 50
			},
			markup: '<g class="rotatable"><g class="scalable"><rect class="body"/></g><text class="label1"/><text class="label2"/><text class="stream-label"/></g>',
			attrs: {
				rect: {
					stroke: '#31d0c6',
					rx: 5,
					ry: 5,
					'stroke-width': 2,
					width: 100,
					height: 50
				},
				'.label1': {
					'font-size': 14,
					'text-anchor': 'middle',
					'ref-x': .5,
					'ref-y': .5,
					'y-alignment': 'middle',
					'fill': '#000000'
				},
				'.label2': {
					'y-alignment': 'middle',
					'ref-x': 7, // jointjs specific: relative position to ref'd element
					'ref-y': 0.55, // jointjs specific: relative position to ref'd element
					fill: 'black',
					'font-size': 20
				},
                '.stream-label': {
                    'x-alignment': 'middle',
                    'y-alignment': -0.999999,
                    'ref-x': 0.5, // jointjs specific: relative position to ref'd element
                    'ref-y': 0, // jointjs specific: relative position to ref'd element
                    fill: '#AAAAAA',
                    'font-size': 15
                },
			}
		},
		endState: {
			size: {
				width: 50,
				height: 50
			},
			markup: '<g class="rotatable"><g class="scalable"><circle class="outer"/><circle class="inner"/></g><text class="label1"/></g>',
			attrs: {
				".outer": {
					transform: "translate(10, 10)",
					r: 10,
					fill: "#ffffff",
					stroke: "#0066CC",
					'stroke-width': 2
				},
				".inner": {
					transform: "translate(10, 10)",
					r: 6,
					fill: "#31d0c6",
					stroke: "#0066CC",
					'stroke-width': 2
				},
				'.label1': {
					'font-size': 14,
					'text-anchor': 'middle',
					'ref-x': .5,
					'ref-y': .5,
					'y-alignment': 'middle',
					'fill': '#000000'
				},
			}
		},
		startState: {
			size: {
				width: 50,
				height: 50
			},
			markup: '<g class="rotatable"><g class="scalable"><circle /></g><text class="label1"/></g>',
			attrs: {
				circle: {
					fill: "#31d0c6",
					stroke: '#0066CC',
					'stroke-width': 2,
					r: 24,
					cx: 24,
					cy: 24
				},
				'.label1': {
					'font-size': 14,
					'text-anchor': 'middle',
					'ref-x': .5,
					'ref-y': .5,
					'y-alignment': 'middle',
					'fill': '#000000'
				},
			}
		}
	},
	// 配置元素自定义属性
	elementOpts: {
		start: {
			type: 'START',
			groupName: 'start'
		},
		end: {
			type: 'END',
			groupName: 'end'
		},
		controlNods: {
			type: 'controlNods',
			groupName: 'controlNods'
		},
		apps: {
			groupName: 'apps'
		},
		source: {
			groupName: 'source'
		},
		processor: {
			groupName: 'processor'
		},
		sink: {
			groupName: 'sink'
		},
		other: {
			groupName: 'other'
		}
	},
	// 连线link设置
	link: {
		attrs: {
			'.marker-target': {
				fill: '#4b4a67',
				stroke: '#4b4a67',
				d: 'M 10 0 L 0 5 L 10 10 z'
			}
		}
	}

}