// 创建绘画实例
function createGraph() {
	return new joint.dia.Graph;
}

function taskValidateLink(cellViewS, magnetS, cellViewT, magnetT, end, linkView) {
	// 防止从输入端口链接
	if (magnetS && magnetS.getAttribute('port-group') === 'in') {
		return false;
	}
	// 防止在一个元素中从输出端口连接到输入端口
	if (cellViewS === cellViewT) {
		return false;
	}
	// 防止连接到输入端口
	return magnetT && magnetT.getAttribute('port-group') === 'in';
}

function streamValidateLink(cellViewS, magnetS, cellViewT, magnetT, end, linkView) {
	// Prevent linking from input ports.
	if (magnetS && magnetS.getAttribute('port-group') === 'in') {
		return false;
	}
	// Prevent linking from output ports to input ports within one element.
	if (cellViewS === cellViewT) {
		return false;
	}
	// Prevent linking to input ports.
	if (magnetT && magnetT.getAttribute('port-group') === 'out') {
		return false;
	}

	if (cellViewS.model.attr('metadata') && cellViewT.model.attr('metadata')) {
		// Target is a SOURCE node? Disallow link!
		if (cellViewT.model.attr('metadata/group') === 'source') {
			return false;
		}
		// Target is an explicit tap? Disallow link!
		if (cellViewT.model.attr('metadata/name') === 'tap') {
			return false;
		}
		// Target is a DESTINATION with outgoing links? Disallow, because DESTINATION can either be SOURCE or SINK but not both
		if (cellViewT.model.attr('metadata/name') === 'destination' && graph.getConnectedLinks(cellViewT.model, {
				outbound: true
			}).length) {
			return false;
		}
		// Sinks and Tasks cannot have outgoing links
		if (cellViewS.model.attr('metadata/group') === 'sink' || cellViewS.model.attr('metadata/group') === 'task') {
			return false;
		}
		// Source is a DESTINATION with incoming links? Disallow, because DESTINATION can either be SOURCE or SINK but not both
		if (cellViewS.model.attr('metadata/name') === 'destination' && graph.getConnectedLinks(cellViewS.model, {
				inbound: true
			}).length) {
			return false;
		}
		var idx;
		var i;
		var targetIncomingLinks = graph.getConnectedLinks(cellViewT.model, {
			inbound: true
		});
		idx = targetIncomingLinks.indexOf(linkView.model);
		if (idx >= 0) {
			targetIncomingLinks.splice(idx, 1);
		}
		var outgoingSourceLinks = graph.getConnectedLinks(cellViewS.model, {
			outbound: true
		});
		idx = outgoingSourceLinks.indexOf(linkView.model);
		if (idx >= 0) {
			outgoingSourceLinks.splice(idx, 1);
		}

		if (targetIncomingLinks.length > 0) {
			return false;
		}

		if (outgoingSourceLinks.length > 0) {
			// Make sure there is no link between this source and target already
			for (i = 0; i < outgoingSourceLinks.length; i++) {
				if (outgoingSourceLinks[i].get('target').id) {
					var t = graph.getCell(outgoingSourceLinks[i].get('target').id);
					if (t && t === cellViewT.model) {
						return false;
					}
				}
			}

			// Invalid if output-port has more than one outgoing link
			if (magnetS.getAttribute('class') === 'port-out-body') {
				for (i = 0; i < outgoingSourceLinks.length; i++) {
					var selector = outgoingSourceLinks[i].get('source').selector;
					// Another link from the 'output-port' is present
					if (selector) {
						var port = cellViewS.el.querySelector(selector);
						if (port && port.getAttribute('class') === 'port-out-body') {
							return false;
						}
					}
				}
			}
		}

		// All checks passed, valid connection.
		//return true;
		// 防止连接到输入端口
		return magnetT && magnetT.getAttribute('port-group') === 'in';
	}
}







// 创建画布
function createPaper(size) {
	return new joint.dia.Paper({
		width: size.width,
		herght: size.herght,
		model: graph,
		gridSize: 10,
		drawGrid: true,
		validateConnection: function (cellViewS, magnetS, cellViewT, magnetT, end, linkView) {
			if (false) {
				return taskValidateLink(cellViewS, magnetS, cellViewT, magnetT, end, linkView);
			} else {
				return streamValidateLink(cellViewS, magnetS, cellViewT, magnetT, end, linkView);
			}

		},
		validateEmbedding: function (childView, parentView) {
			return parentView.model instanceof joint.shapes.devs.Coupled;
		},
		// perpendicularLinks:true,//链接将倾向于与其相关联的对象垂直
		snapLinks: true, // 接口吸附
		// snapLinks: { radius: 75 },// 设置吸附范围
		linkPinning: false, // 设置成false 连线只能在接口上连接（默认true）
		markAvailable: true, // 设置可连接接口
		multiLinks: false, // 保证两个元素之间只能创建一个连接	
		/* interactive: function (cellView) {
			return {
				//vertexAdd: false,
				//vertexRemove:false,
				vertexMove: false
			};
		}, */
		defaultLink: new joint.shapes.devs.Link({ // 连线样式
			attrs: jointConfig.link.attrs,
			router: { name: 'manhattan' },
			connector: { name: 'rounded' },
			smooth: true // 平滑曲线 
		}),
		linkView: joint.dia.LinkView.extend({
			options: _.defaults({
				doubleLinkTools: true
			}, joint.dia.LinkView.prototype.options)
		})
	});
}

// 创建拓展画布
function createPaperScroller() {
	return new joint.ui.PaperScroller({
		paper: paper,
		autoResizePaper: true
	});
}

// 创建link
function createLink(source, target) {
	var link = new joint.shapes.devs.Link({
		source: {
			id: source.id,
			port: source.port
		},
		target: {
			id: target.id,
			port: target.port
		},
		router: { name: 'manhattan' },
		connector: { name: 'rounded' },
		attrs: jointConfig.link.attrs,
		//smooth: true
	});
	return link;
}


/*
 创建模板：
	txtName 模板名称
	model 模板类型
*/
function basicModel(model, portGroups) {
	var model = joint.shapes.basic.Generic.extend({
		markup: model.markup,
		defaults: _.defaultsDeep({
			size: model.size,
			ports: {
				groups: portGroups
			},
			attrs: model.attrs
		}, joint.shapes.basic.Generic.prototype.defaults)
	});
	return new model;
}

function createBasicModel(txtName, groupName, model, portGroups, ports, metamodel) {
	var model = basicModel(model, portGroups);
	model.set('type', txtName);
	model.set('name', txtName);
	model.set('groupName', groupName);
	model.attr('.label1/text', txtName);
	model.addPorts(ports);
	model.attr('metadata', metamodel);
	return model;
}

/* 创建Stencil模板:
	groups:{
		controlNodes:{label:'control nodes'},
        group1: { label: '第一组'},
        group2: { label: '第二组'}
	}
*/
function createStencil(groups) {
	return new joint.ui.Stencil({
		graph: graph,
		paper: paperScroller,

		groups: groups,
		search: {
			'*': ['attrs/.label1/text'],
			'basic.Image': ['description'],
			'basic.Path': ['description']
		},
		layout: {
			columnWidth: 140,
			columns: 2,
			rowHeight: 70,
			rowWidth: 90
		},
		scaleClones: true
		/* dragStartClone: function (a) {
			var elemnet = a.clone();

			return elemnet;
		} */
	});
}