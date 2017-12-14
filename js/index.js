//joint.setTheme('material');

// 创建绘制对象实例
var graph = createGraph();
// 创建画布
var paper = createPaper(paperMode.size);
// 创建拓展画板
var paperScroller = createPaperScroller();
paperScroller.lock();
paperScroller.render().center();

$('#paper').append(paperScroller.el);



// 画布回调	
graph.on('relation', function (elementView, evt,x,y) {
	console.log("=======");
	console.log(elementView);
});

paper.on('blank:pointerdown', paperScroller.startPanning); // 画布拖拽
// paper.on('cell:pointerclick', function (cellView) {
// 	onElementClick(cellView);
// });
paper.on('link:connect', function (evt, cellView, magnet, arrowhead) {
	checkElementPoint()
});

var commandManager = new joint.dia.CommandManager({
	graph: graph
});


// 创建工具栏
var toolbar = new joint.ui.Toolbar({
	// initialize tools with default settings
	tools: ['zoomIn', 'zoomOut', 'zoomToFit', 'zoomSlider', 'undo', 'redo',
		{
			type: 'button',
			name: 'layout',
			text: 'layout'
		},
		{
			type: 'button',
			name: 'dsl',
			text: 'dsl'
		},
		{
			type: 'button',
			name: 'dsl2Layout',
			text: 'dsl2Layout'
		},
		{
			type: 'button',
			name: 'dslText',
			text: 'dslText'
		},
		{
			type: 'button',
			name: 'text2Dsl',
			text: 'Text2Dsl'
		}
	],
	references: {
		paperScroller: paperScroller,
		commandManager: commandManager
	}
});
// 监听layout button事件
toolbar.on('layout:pointerclick', function (event) {
	graphLayout();
});
// 监听DSL button事件
toolbar.on('dsl:pointerclick', function (event) {
	getDslStr();
});
// 监听dsl2Layout button事件
toolbar.on('dsl2Layout:pointerclick', function (event) {
	var dslStr = prompt("dslStr:");
	getDsl(dslStr);

});
// 监听流式图
toolbar.on('dslText:pointerclick', function (event) {
	init(graph);
	$("#textarea").val(processGraph());
	console.log(processGraph());
});
toolbar.on('text2Dsl:pointerclick', function (event) {
	let dslStr = $("#textarea").val();
	textToGraph(dslStr);
});
$('#toolbar').append(toolbar.render().el);

paperScroller.center();
commandManager.listen();


// START
var start = createBasicModel(jointConfig.elementOpts.start.groupName, jointConfig.elementOpts.start.groupName,
	jointConfig.elementModel.startState, {
		'in': jointConfig.portGroups.circle.topInPort,
		'out': jointConfig.portGroups.circle.bottomOutPort
	}, [{
		group: 'out',
		port: 'output'
	}]);
start.set('position', {
	x: Math.ceil(paperMode.size.width / 2) - 30,
	y: 30
});

// END
var end = createBasicModel(jointConfig.elementOpts.end.type, jointConfig.elementOpts.end.groupName,
	jointConfig.elementModel.endState, {
		'in': jointConfig.portGroups.circle.topInPort,
		'out': jointConfig.portGroups.circle.bottomOutPort
	}, [{
		group: 'in',
		port: 'input'
	}]);
end.set('position', {
	x: Math.ceil(paperMode.size.width / 2) - 30,
	y: paperMode.size.herght - 186
});


// node
function createModel(txtName, groupName) {
	var node = createBasicModel(txtName, groupName, jointConfig.elementModel.rect, {
		'in': jointConfig.portGroups.circle.topInPort,
		'out': jointConfig.portGroups.circle.bottomOutPort
	}, [{
		group: 'in',
		port: 'input'
	}, {
		group: 'out',
		port: 'output'
	}]);
	return node;
}
// SYNC
var sync = createBasicModel('sync', jointConfig.elementOpts.controlNods.groupName, jointConfig.elementModel.circle, {
	'in': jointConfig.portGroups.circle.topInPort,
	'out': jointConfig.portGroups.circle.bottomOutPort
}, [{
	group: 'in',
	port: 'input'
}, {
	group: 'out',
	port: 'output'
}]);
var SYNC_ID = sync.id;


// other
var other1 = createBasicModel('other1', 'other', jointConfig.elementModel.rect, {
	'out': jointConfig.portGroups.rect.rightOutPort
}, [{
	group: 'out'
}]);
var other2 = createBasicModel('other2', 'other', jointConfig.elementModel.rect, {
	'in': jointConfig.portGroups.rect.leftInPort,
	'out': jointConfig.portGroups.rect.rightOutPort
}, [{
	group: 'in'
}, {
	group: 'out'
}]);


// 创建模板样例
var d1 = createModel('banana', jointConfig.elementOpts.apps.groupName);
var d2 = createModel('tomato', jointConfig.elementOpts.apps.groupName);
var d3 = createModel('potato', jointConfig.elementOpts.apps.groupName);


d1.attr({rect: {
	event: "relation"
}});
 graph.addCells([d1,d2,d3,sync])
// graph.addCell(start).addCell(end);
// 画布格式化
function graphLayout() {
	var direction = 'B';
	if (true) {
		direction = 'R';
	}
	var graphLayout = new joint.layout.TreeLayout({
		graph: graph,
		direction: direction, // L R B T
		parentGap: 100,
		siblingGap: 100,
		size: {
			width: 100,
			height: 100
		},
		margin: 100,
		updateVertices: null // 自动生成不带Vertices
	});
	graphLayout.layout();
}




// 提示
//var content = '<h4>HTML Tooltip</h4><b>JointJS</b> tooltips can contain arbitrary HTML.';

var tooltip = function (content, target) {
	new joint.ui.Tooltip({
		rootTarget: document.body,
		target: target,
		direction: 'auto',
		padding: 20,
		// trigger: 'click',
		// hideTrigger: 'mouseout',
		content: content
	});
}

tooltip('InputPort', '.port-in-body');
tooltip('OutputPort', '.port-out-body');



paper.on('cell:mouseenter', function (cellView) {
	//console.log(cellView);
});

// 创建交互界面
function showHalo(view) {
	var halo = new joint.ui.Halo({
		cellView: view,
		boxContent: '' // 设置光环底部的信息框隐藏
	});

	//自定义交互
	halo.addHandle({
		name: 'properties',
		position: 'sw',
		icon: 'img/cog.svg'
	});
	halo.on('action:properties:pointerdown', function (evt) {
		console.log(view);
		evt.stopPropagation();
		alert('do something..');
	});
	halo.changeHandle('remove', {
		position: 'se'
	});
	halo.changeHandle('unlink', {
		position: 'w'
	});
	// 删除默认交互
	halo.removeHandle('clone');
	halo.removeHandle('rotate');
	halo.removeHandle('resize');
	halo.removeHandle('link');
	if (view.model.attributes.groupName === jointConfig.elementOpts.start.groupName || view.model.attributes.groupName === jointConfig.elementOpts.end.groupName) {
		halo.removeHandle('remove');
	}

	if (view.model.attributes.groupName === jointConfig.elementOpts.end.groupName || view.model.attributes.groupName === jointConfig.elementOpts.controlNods.groupName) {
		halo.removeHandle('properties');
	}
	halo.render();
}

// 点击元素事件
function onElementClick(view) {
	var cell = view.model;
	if (cell.isLink()) {
		console.log("isLink");
		console.log(cell);
	}
	if (cell.isElement()) {
		console.log("isElement");
		console.log(cell);
		/* setElementProps(cell.id,'w1',{
			'path':'/www',
			'pid':12412122
		}) */
		showHalo(view);
		//highLight(view);
	}
}
// 点击链接事件
function onLinkClick(evt, cellView, magnet, arrowhead) {
	//console.log(evt);
	//console.log(magnet);
}

// 元素焦点：荧光笔
function highLight(cellView) {
	var highlightedCellViews = [];

	cellView.highlight();
	highlightedCellViews.push(cellView);

	paper.on('blank:pointerclick', function (cellView) {
		for (var i = 0; i < highlightedCellViews.length; i++) {
			highlightedCellViews[i].unhighlight();
		}
	});
}

// link 设置监听:当连线的设置被点击时
paper.on('link:options', function (linkView) {
	setLinkLabel(linkView);
});

// 设置link标签
function setLinkLabel(linkView) {
	var labelText = prompt("设置标签:");
	if (labelText) {
		var model = linkView.model;
		model.set('labels', [{
			position: 0.5,
			attrs: {
				text: {
					text: labelText
				}
			}
		}]);
		console.log(linkView);
	}
}

// 连线回调
graph.on('add', function (eventName, cell) {
	//getElementsArr(); // 获取全部元素link数组
	if (eventName.isElement()) {
		checkElementPoint(); // 检查端口有效性
		//	tooltip(); // 刷新提示信息
	}
});
graph.on('remove', function (eventName, cell) {
	//getElementsArr(); // 获取全部元素link数组
	checkElementPoint();
});
graph.on('change', function (eventName, cell) { });

/** 
 判断所有元素的端口是否为空：
 1.start 是叶子节点（isSink = true）则为空
 2.end 是根节点（isSource=true）则为空
 3.其他节点）（isSink = true || isSource=true）则为空
 4.SOURCE 是叶子节点（isSink = true）则为空
 
 
*/
function checkElementPoint() {
	var checkFlag = true;
	var jointElements = graph.getElements(); // 获取全部元素
	if (jointElements) {
		//	console.log(jointElements);
		for (var i = 0; i < jointElements.length; i++) {
			removeErrorFlag(jointElements[i]);
			if (jointElements[i].attributes.groupName === jointConfig.elementOpts.start.groupName) {
				// start
				if (graph.isSink(jointElements[i])) {
					addErrorFlag(jointElements[i]);
					tooltip('OutputPort', '.error-flag');
					checkFlag = false;
				}
			} else if (jointElements[i].attributes.groupName === jointConfig.elementOpts.end.groupName) {
				// end
				if (graph.isSource(jointElements[i])) {
					addErrorFlag(jointElements[i]);
					checkFlag = false;
				}
			} else if (jointElements[i].attributes.groupName === jointConfig.elementOpts.source.groupName) {
				// source
				if (graph.isSink(jointElements[i])) {
					addErrorFlag(jointElements[i]);
					checkFlag = false;
				}
			} else if (jointElements[i].attributes.groupName === jointConfig.elementOpts.processor.groupName) {
				// processor
				if (graph.isSink(jointElements[i]) || graph.isSource(jointElements[i])) {
					addErrorFlag(jointElements[i]);
					checkFlag = false;
				}
			} else if (jointElements[i].attributes.groupName === jointConfig.elementOpts.sink.groupName) {
				// sink
				if (graph.isSource(jointElements[i])) {
					addErrorFlag(jointElements[i]);
					checkFlag = false;
				}
			} else if (jointElements[i].attributes.groupName === jointConfig.elementOpts.apps.groupName) {
				// apps
				if (graph.isSink(jointElements[i]) || graph.isSource(jointElements[i])) {
					addErrorFlag(jointElements[i]);
					checkFlag = false;
				}
			}
		}
		//	console.log(checkFlag);
		return checkFlag;
	}
}

// 获取全部元素link数组
function getElementsArr() {
	var cells = {
		"nodes": [],
		"links": [],
		"properties": {}
	};
	var jointElements = graph.getElements(); // 获取全部元素
	var jointLinks = graph.getLinks(); // 获取全部连接
	/** 拼装全部元素的 [{name,id}] 数据结构*/
	if (jointElements) {
		for (var i = 0; i < jointElements.length; i++) {
			var node = {};
			node.name = jointElements[i].attributes.type;
			node.id = jointElements[i].id;
			// 添加label
			if (jointElements[i].attributes.type !== jointElements[i].attributes.attrs.text.text) {
				node.metadata = {};
				node.metadata.label = jointElements[i].attributes.attrs.text.text;
			}
			// 添加属性
			if (jointElements[i].attributes.properties) {
				if (jointElements[i].attributes.type === jointConfig.elementOpts.start.type) {
					cells.properties = jointElements[i].attributes.properties;
				} else {
					node.properties = jointElements[i].attributes.properties;
				}
			}
			cells.nodes.push(node);
		}
	}
	/** 遍历元素，获取各元素的邻居元素*/
	if (jointLinks) {
		for (var i = 0; i < jointLinks.length; i++) {
			var link = {};
			if (jointLinks[i].getSourceElement()) {
				link.from = jointLinks[i].getSourceElement().id;
			}
			if (jointLinks[i].getTargetElement()) {
				link.to = jointLinks[i].getTargetElement().id;
			}
			if (jointLinks[i].attributes.labels) {
				link.properties = {
					'transitionName': jointLinks[i].attributes.labels[0].attrs.text.text
				}
			}
			cells.links.push(link);
		}
	}
	return cells;
}

// 请求
function getDslStr() {
	var cells = JSON.stringify(getElementsArr());
	//var test = {"nodes":[{"name":"START","id":"c52ab919-4051-40da-a551-553c9cf73511"},{"name":"END","id":"8cd18b1c-f467-49d6-a2ca-85f83aa29872","properties":{}},{"name":"TaskTest","id":"25e5b755-eb95-47e1-b767-6afa971440f3","properties":{}}],"links":[{"from":"c52ab919-4051-40da-a551-553c9cf73511","to":"25e5b755-eb95-47e1-b767-6afa971440f3"},{"from":"25e5b755-eb95-47e1-b767-6afa971440f3","to":"8cd18b1c-f467-49d6-a2ca-85f83aa29872"}],"properties":{}}	
	$.ajax({
		type: "POST",
		url: "http://192.168.10.123:9393/tools/convertTaskGraphToText",
		contentType: "application/json",
		dataType: "json",
		data: cells,
		success: function (data) {
			console.log(data);
		}
	});
};


// 根据属性获取元素
function getElementByAttr(tag, attr, element) {
	var aElements = document.getElementsByTagName(tag);
	var aEle = [];
	for (var i = 0; i < aElements.length; i++) {
		if (aElements[i].getAttribute(attr) == element.id) {
			aEle.push(aElements[i]);
		}
	}
	//console.log(aEle);
	return aEle;
};

// 添加svg子元素
function addErrorFlag(element) {
	var aEle = getElementByAttr('g', 'model-id', element)
	if (aEle) {
		var childSVG = document.createElementNS("http://www.w3.org/2000/svg", "image");
		childSVG.setAttribute('width', 16);
		childSVG.setAttribute('height', 16);
		childSVG.setAttribute('class', 'error-flag');
		childSVG.setAttribute('href', 'img/error.svg');
		for (var i = 0; i < aEle.length; i++) {
			childSVG.setAttribute('id', aEle[i].id + '_img');
			aEle[i].appendChild(childSVG);
		}
	}
}

function removeErrorFlag(element) {
	var aEle = getElementByAttr('g', 'model-id', element)
	if (aEle) {
		for (var i = 0; i < aEle.length; i++) {
			var list = document.getElementById(aEle[i].id + '_img');
			if (list) {
				aEle[i].removeChild(list);
			}
		}
	}
}
// 添加element设置参数
function setElementProps(elementId, label, properties) {
	var element = graph.getCell(elementId);
	if (element) {
		if (properties) {
			element.set('properties', properties);
			element.set('props', properties)
		}
		if (label) {
			element.attr('.label1/text', label);
			element.set('name', label);
		}
		//console.log(element);
	}
}
// 获取element设置参数
function getElementProps(elementId) {
	var element = graph.getCell(elementId);
	if (element) {
		var props = {};
		props.label = element.attributes.name;
		props.properties = element.attributes.properties;
		props.props = element.attributes.props;
		return props;
	}
}
// 导航
var nav = new joint.ui.Navigator({
	paperScroller: paperScroller,
	width: 300,
	height: 200,
	padding: 10,
	zoomOptions: {
		max: 2,
		min: 0.2
	}
});
// nav.$el.appendTo('#navigator');
nav.render();

// dsl转joint图
function dsl2Cells(dslJson) {
	var elements = [];
	var links = [];
	if (!dslJson) {
		return;
	}

	for (var i = 0; i < dslJson.nodes.length; i++) {
		var element;
		if (dslJson.nodes[i].name === jointConfig.elementOpts.start.type) {
			element = start.clone();

		} else if (dslJson.nodes[i].name === jointConfig.elementOpts.end.type) {
			element = end.clone();
		} else {
			element = createModel(dslJson.nodes[i].name, jointConfig.elementOpts.apps.groupName);
			if (dslJson.nodes[i].metadata) {
				element.attr('.label1/text', dslJson.nodes[i].metadata.label);
				element.set('name', dslJson.nodes[i].metadata.label);



			}
			if (dslJson.nodes[i].properties) {
				element.set('properties', dslJson.nodes[i].properties);
			}
		}
		element.set('id', dslJson.nodes[i].id);
		elements.push(element);
	}
	graph.resetCells(elements);
	for (var i = 0; i < dslJson.links.length; i++) {
		var from = {};
		from.element = graph.getCell(dslJson.links[i].from);
		from.ports = from.element.getPorts();
		for (var j = 0; j < from.ports.length; j++) {
			if (from.ports[j] && from.ports[j].group === 'out') {
				from.portId = from.ports[j].id;
			}
		}

		var to = {};
		to.element = graph.getCell(dslJson.links[i].to);
		to.ports = to.element.getPorts();
		for (var j = 0; j < to.ports.length; j++) {
			if (to.ports[j] && to.ports[j].group === 'in') {
				to.portId = to.ports[j].id;
			}
		}
		var link = createLink({
			id: from.element.id,
			port: from.portId
		}, {
				id: to.element.id,
				port: to.portId
			});
		links.push(link);
	}
	graph.resetCells(elements.concat(links));
	graphLayout();
}


// 请求
function getDsl(dslStr) {
	var data = {}
	data.dsl = dslStr;
	data.name = "unknown";
	data = JSON.stringify(data);
	$.ajax({
		type: "POST",
		url: "http://192.168.10.123:9393/tools/parseTaskTextToGraph",
		contentType: "application/json",
		dataType: "json",
		data: data,
		success: function (data) {
			console.log(data);
			if (data.graph) {
				dsl2Cells(data.graph);
			}
		}
	});
};

/*********************************************************************************************
 *********************************************************************************************
 * 加载模板
 */

var metamodel = [];
// 添加初始化参数:比如spring data flow 中的other组件的创建
loadOtherIntoPalette(metamodel);

function loadApps(apps, metamodel) {
	if (!apps) {
		return;
	}
	for (var i = 0; i < apps.length; i++) {
		var app = apps[i];
		if (app.type === 'task') { // Don't include Tasks!
			continue;
		}
		var entry = {
			'name': app.name,
			'group': app.type
		};
		var metadata = createMetadata(entry);
		// console.log(metadata)
		if (!metamodel[metadata.group]) {
			metamodel[metadata.group] = {};
		}
		metamodel[metadata.group][metadata.name] = metadata;
	}
}
loadApps(apps, metamodel);
// console.log(metamodel);

function createStencil2(metamodel) {
	let groups = {};
	for (let key in metamodel) {
		groups[key] = {
			'label': key
		};
	}
	let stencil = createStencil(groups);
	$('#stencil-container').append(stencil.render().el);
	return stencil;
}

// 创建模板实例
var stencil = createStencil2(metamodel);


// 配置模板分类
/**
{
	groupNmae:[],
	groupNmae2:[],
}
*/

/*******************************************************
 * sink
 */
function createSinkModel(metamodel) {
	let model = createBasicModel(metamodel.name, jointConfig.elementOpts.sink.groupName, jointConfig.elementModel.rect, {
		'in': jointConfig.portGroups.rect.leftInPort
	}, [{
		group: 'in',
		port: 'input'
	}], metamodel);
	model.attr('.label2/text', metamodel.metadata.unicodeChar);
	return model;
}

/*******************************************************
 * source
 */
function createSourceModel(metamodel) {
	let model = createBasicModel(metamodel.name, jointConfig.elementOpts.source.groupName, jointConfig.elementModel.rect, {
		'out': jointConfig.portGroups.rect.rightOutPort,
		'out2': jointConfig.portGroups.circle.bottomOutPort
	}, [{
		group: 'out',
		port: 'output'
	}, {
		group: 'out2',
		port: 'tap'
	}], metamodel);
	model.attr('.label2/text', metamodel.metadata.unicodeChar);
	return model;
}




/*******************************************************
 * processor
 */
function createProcessorModel(metamodel) {
	let model = createBasicModel(metamodel.name, jointConfig.elementOpts.processor.groupName, jointConfig.elementModel.rect, {
		'in': jointConfig.portGroups.rect.leftInPort,
		'out2': jointConfig.portGroups.circle.bottomOutPort,
		'out': jointConfig.portGroups.rect.rightOutPort
	}, [{
		group: 'in',
		port: 'input'
	}, {
		group: 'out',
		port: 'output'
	}, {
		group: 'out2',
		port: 'tap'
	}], metamodel);
	model.attr('.label2/text', metamodel.metadata.unicodeChar);
	return model;
}

/*******************************************************
 * processor
 */
function createOtherModel(metamodel) {
	let model = createBasicModel(metamodel.name, jointConfig.elementOpts.other.groupName, jointConfig.elementModel.rect, {
		'in': jointConfig.portGroups.rect.leftInPort,
		'out2': jointConfig.portGroups.circle.bottomOutPort,
		'out': jointConfig.portGroups.rect.rightOutPort
	}, [{
		group: 'in',
		port: 'input'
	}, {
		group: 'out',
		port: 'output'
	}, {
		group: 'out2',
		port: 'tap'
	}], metamodel);
	model.attr('.label2/text', metamodel.metadata.unicodeChar);
	return model;
}


/************************************************************************
 * stream 加载 模板
 */
function stencilLoad(stencil, metamodel) {
	if (!stencil || !metamodel) {
		return;
	}
	if (metamodel.processor) {
		let models = [];
		for (let key in metamodel.processor) {
			models.push(createProcessorModel(metamodel.processor[key]));
		}
		stencil.load({
			'processor': models
		});
	}
	if (metamodel.sink) {
		let models = [];
		for (let key in metamodel.sink) {
			models.push(createSinkModel(metamodel.sink[key]));
		}
		stencil.load({
			'sink': models
		});
	}
	if (metamodel.source) {
		let models = [];
		for (let key in metamodel.source) {
			models.push(createSourceModel(metamodel.source[key]));
		}
		stencil.load({
			'source': models
		});
	}
	if (metamodel.other) { }

}
stencilLoad(stencil, metamodel);


/**
 *  创建流示图模板
 *  metadata：自定义属性
 * 	props:：
 */
function createStreamModel(metadata, props) {
	let streamModel;
	if (!metadata) {
		return streamModel;
	}
	if (metadata.group === jointConfig.elementOpts.source.groupName) {
		streamModel = createSourceModel(metadata);

	} else if (metadata.group === jointConfig.elementOpts.processor.groupName) {
		streamModel = createProcessorModel(metadata);
	} else if (metadata.group === jointConfig.elementOpts.sink.groupName) {
		streamModel = createSinkModel(metadata);
	} else if (metadata.group === jointConfig.elementOpts.other.groupName) {
		console.log('todo other model');
		// todo
	}
	console.log(streamModel);
	streamModel.attr('properties', props);
	return streamModel;
}



/*********************************************************************
 * 
 */

function textToGraph(dslStr) {
	return parseAndRefreshGraph(dslStr, function (json) {
		graph.clear();
		buildGraphFromJson(json, metamodel);
	}, function (errors) {
		// definition.parseError = errors;
		console.log(errors);
	});
}