// by:汐
//全球新冠疫情数据
const Api_GlobalCOVID19Data =
	"https://uaqy.api.storeapi.net/api/94/222?appid=5859&bank_id=513921200102233279&bank_name=%E5%90%B4%E6%97%AD&sign=6cb020ad1017e76e72163e884105b8c2"
//国内疫情数据比较
const Api_GeneralRemark = "https://lab.isaaclin.cn/nCoV/api/overall"

//实例化对象组件
let virusMap00Domestic = echarts.init(document.getElementById("virus-map-0-0"))
let virusMap01Domestic = echarts.init(document.getElementById("virus-map-0-1"))
let virusTrend00Domestic = echarts.init(document.getElementById("virus-trend-0-0"))
let virusTrend01Domestic = echarts.init(document.getElementById("virus-trend-0-1"))
let virusTrend02Domestic = echarts.init(document.getElementById("virus-trend-0-2"))
let virusTrend10Domestic = echarts.init(document.getElementById("virus-trend-1-0"))
let virusTrend11Domestic = echarts.init(document.getElementById("virus-trend-1-1"))
let virusTrend12Domestic = echarts.init(document.getElementById("virus-trend-1-2"))
let virusTrend13Domestic = echarts.init(document.getElementById("virus-trend-1-3"))


//加载模态框
let loadTime = loadStart(150)

//请求全国疫情数据
$.get(Api_GlobalCOVID19Data, function(data, state) {
	if (state === 'success') {
		initVirusInfo0Domestic(data.retdata)
		initVirusMap0Domestic(data.retdata)
		initVirusTrend0Domestic(data.retdata)
		initVirusTrend1Domestic(data.retdata)
		initVirusTable0Domestic(data.retdata)
	} else {
		alert('请求数据失败:' + state)
	}

	//取消模态框
	loadStop(loadTime)
})

//更新并初始化显示疫情数据
function initVirusMap0Domestic(data) {
	//获取全国总数据
	let dataDomestic = data.caseList
	//全国各地区现确诊人数集合
	let dataCurConfirmDomestic = dataDomestic.map(city => {
		return {
			name: city.xArea,
			value: city.curConfirm
		}
	})

	//全国各地累计确诊人数集合
	let dataConfirmDomestic = dataDomestic.map(city => {
		return {
			name: city.xArea,
			value: city.confirm
		}
	})

	//展示全国现确诊人数地图
	virusMap00Domestic.setOption({
		series: [{
			name: '各省现有确诊病例',
			type: 'map',
			map: 'china',
			label: {
				show: true,
				formatter: '{b}',
				fontSize: 11
			},
			zoom: 1.2,
			data: dataCurConfirmDomestic
		}]
	})
	//展示全国累计确诊人数地图
	virusMap01Domestic.setOption({
		series: [{
			name: '各省累计确诊病例',
			type: 'map',
			map: 'china',
			label: {
				show: true,
				formatter: '{b}',
				fontSize: 11
			},
			zoom: 1.2,
			data: dataConfirmDomestic
		}]
	})
}

function initVirusTrend0Domestic(data) {
	//境外输入新增趋势
	virusTrend00Domestic.setOption({
		xAxis: {
			type: 'category',
			data: data.chinaTotal.updateDate
		},
		yAxis: {
			type: 'value'
		},
		series: [{
			name: '新增境外输入',
			data: data.chinaTotal.xResult[9].data,
			type: 'line',
			smooth: true
		}]
	})

	//境外输入累计趋势
	virusTrend01Domestic.setOption({
		xAxis: {
			type: 'category',
			data: data.chinaTotal.updateDate
		},
		yAxis: {
			type: 'value'
		},
		series: [{
			name: '累计境外输入',
			data: data.chinaTotal.xResult[8].data,
			type: 'line',
			smooth: true
		}]
	})

	//境外输入累计确诊省Top10
	virusTrend02Domestic.setOption({
		xAxis: {
			type: 'category',
			data: data.topOverseasInput.map(city => city.xName)
		},
		yAxis: {
			type: 'value'
		},
		series: [{
			name: '累计境外输入',
			data: data.topOverseasInput.map(city => city.xValue),
			type: 'bar',
			smooth: true
		}]
	})

}

function initVirusTrend1Domestic(data) {
	//全国 总新增确诊/新增境外输入确诊 趋势
	virusTrend10Domestic.setOption({
		xAxis: {
			type: 'category',
			data: data.chinaTotal.updateDate
		},
		yAxis: {
			type: 'value'
		},
		series: [{
			name: '总新增确诊',
			data: data.chinaTotal.xResult[4].data,
			type: 'line',
			smooth: true
		}, {
			name: '新增境外输入',
			data: data.chinaTotal.xResult[9].data,
			type: 'line',
			smooth: true
		}]
	})

	//全国 现有确诊/疑似/累计确诊 趋势
	virusTrend11Domestic.setOption({
		xAxis: {
			type: 'category',
			data: data.chinaTotal.updateDate
		},
		yAxis: {
			type: 'value'
		},
		series: [{
			name: '现有确诊',
			data: data.chinaTotal.xResult[4].data,
			type: 'line',
			smooth: true
		}, {
			name: '现有疑似',
			data: data.chinaTotal.xResult[1].data,
			type: 'line',
			smooth: true
		}, {
			name: '累计确诊',
			data: data.chinaTotal.xResult[0].data,
			type: 'line',
			smooth: true
		}]
	})

	//全国 累计治愈/死亡 趋势
	virusTrend12Domestic.setOption({
		xAxis: {
			type: 'category',
			data: data.chinaTotal.updateDate
		},
		yAxis: {
			type: 'value'
		},
		series: [{
			name: '治愈',
			data: data.chinaTotal.xResult[2].data,
			type: 'line',
			smooth: true
		}, {
			name: '死亡',
			data: data.chinaTotal.xResult[3].data,
			type: 'line',
			smooth: true
		}]
	})

	//全国 治愈率/死亡率 趋势
	virusTrend13Domestic.setOption({
		xAxis: {
			type: 'category',
			data: data.chinaTotal.updateDate
		},
		yAxis: {
			type: 'value'
		},
		series: [{
			name: '治愈率',
			data: data.chinaTotal.xResult[2].data.map((cur, index) => {
				return (parseFloat(cur) / parseFloat(data.chinaTotal.xResult[0].data[index]) * 100).toFixed(2)
			}),
			type: 'line',
			smooth: true
		}, {
			name: '死亡率',
			data: data.chinaTotal.xResult[3].data.map((cur, index) => {
				return (parseFloat(cur) / parseFloat(data.chinaTotal.xResult[0].data[index]) * 100).toFixed(2)
			}),
			type: 'line',
			smooth: true
		}]
	})
}

function initVirusTable0Domestic(data) {
	renderTable(data.caseList)
}

function initVirusInfo0Domestic(data) {
	let handleData = {}
	handleData.dataList = []

	//更新时间
	handleData.lastUpdate = data.lastUpdateTime

	//现有确诊
	let number = data.chinaTotal.xResult[0].data.pop() - data.chinaTotal.xResult[2].data.pop() - data.chinaTotal.xResult[3]
		.data.pop()
	let left = number - (data.chinaTotal.xResult[0].data.slice(-1)[0] - (data.chinaTotal.xResult[2].data.slice(-1)[0] +
		data.chinaTotal.xResult[3].data.slice(-1)[0]))
	handleData.dataList.push({
		number,
		left
	})

	//无症状
	handleData.dataList.push({
		number: 247,
		left: 14
	})

	//疑似
	number = data.chinaTotal.xResult[4].data.pop()
	left = number - data.chinaTotal.xResult[4].data.slice(-1)[0]
	handleData.dataList.push({
		number,
		left
	})

	//重症
	handleData.dataList.push({
		number: 1,
		left: 1
	})

	//累计确诊
	number = data.chinaTotal.xResult[0].data.pop()
	left = number - data.chinaTotal.xResult[0].data.slice(-1)[0]
	handleData.dataList.push({
		number,
		left
	})

	//境外输入
	number = data.chinaTotal.xResult[8].data.pop()
	left = number - data.chinaTotal.xResult[8].data.slice(-1)[0]
	handleData.dataList.push({
		number,
		left
	})

	//累计治愈
	number = data.chinaTotal.xResult[2].data.pop()
	left = number - data.chinaTotal.xResult[2].data.slice(-1)[0]
	handleData.dataList.push({
		number,
		left
	})

	//累计死亡
	number = data.chinaTotal.xResult[3].data.pop()
	left = number - data.chinaTotal.xResult[3].data.slice(-1)[0]
	handleData.dataList.push({
		number,
		left
	})

	//渲染
	renderInfo(handleData)
}

//现有确诊
virusMap00Domestic.setOption({
	tooltip: {
		trigger: 'item',
		formatter: '地区：{b}<br/>确诊：{c}'
	},
	visualMap: {
		type: 'piecewise',
		pieces: [{
				gt: 10000,
				color: 'darkred',
			},
			{
				gt: 1000,
				lte: 9999,
				color: 'red',
				colorAlpha: 0.8
			},
			{
				gt: 100,
				lte: 999,
				color: 'red',
				colorAlpha: 0.6
			},
			{
				gt: 10,
				lte: 99,
				color: 'red',
				colorAlpha: 0.4
			},
			{
				gt: 1,
				lte: 9,
				color: 'red',
				colorAlpha: 0.3
			},
			{
				lt: 1,
				color: 'green',
				colorAlpha: 0.5
			}
		]
	},
	series: [{
		name: '各省现有确诊病例',
		type: 'map',
		map: 'china',
		label: {
			show: true,
			formatter: '{b}',
			fontSize: 11
		},
		zoom: 1.2,
		data: []
	}]
})

//累计确诊
virusMap01Domestic.setOption({
	tooltip: {
		trigger: 'item',
		formatter: '地区：{b}<br/>确诊：{c}'
	},
	visualMap: {
		type: 'piecewise',
		pieces: [{
				gt: 10000,
				color: 'darkred',
			},
			{
				gt: 1000,
				lte: 9999,
				color: 'red',
				colorAlpha: 0.8
			},
			{
				gt: 100,
				lte: 999,
				color: 'red',
				colorAlpha: 0.6
			},
			{
				gt: 10,
				lte: 99,
				color: 'red',
				colorAlpha: 0.4
			},
			{
				gt: 1,
				lte: 9,
				color: 'red',
				colorAlpha: 0.3
			},
			{
				lt: 1,
				color: 'green',
				colorAlpha: 0.5
			}
		]
	},
	series: [{
		name: '各省累计确诊病例',
		type: 'map',
		map: 'china',
		label: {
			show: true,
			formatter: '{b}',
			fontSize: 11
		},
		zoom: 1.2,
		data: []
	}]
})

function renderTable(handleData) {
	let insert = ""
	handleData.forEach(item => {
		insert +=
			`<tr>
		<td>${item.xArea}</td>
		<td>${item.asymptomatic||0}</td>
		<td>${item.curConfirm}</td>
		<td>${item.confirm}</td>
		<td>${item.heal}</td>
		<td>${item.died}</td>
		</tr>`
	})
	$("#firstTable").append(insert)
}

virusTrend00Domestic.setOption({
	title: {
		text: '境外输入新增趋势',
		subtext: "单位：例"
	},
	legend: {
		x: 'right',
		data: ['新增境外输入'],
	},
	tooltip: {
		trigger: 'axis'
	},
	xAxis: {
		type: 'category',
		data: []
	},
	yAxis: {
		type: 'value'
	},
	series: [{
		name: '新增境外输入',
		data: [],
		type: 'line',
		smooth: true
	}]
})

virusTrend01Domestic.setOption({
	title: {
		text: '境外输入累计趋势',
		subtext: '单位：例'
	},
	legend: {
		x: 'right',
		data: ['累计境外输入'],
	},
	tooltip: {
		trigger: 'axis'
	},
	xAxis: {
		type: 'category',
		data: []
	},
	yAxis: {
		type: 'value'
	},
	series: [{
		name: '累计境外输入',
		data: [],
		type: 'line',
		smooth: true
	}]
})

virusTrend02Domestic.setOption({
	title: {
		text: '境外输入累计确诊省Top10',
		subtext: '单位：例'
	},
	legend: {
		x: 'right',
		data: ['累计境外输入'],
	},
	tooltip: {
		trigger: 'axis'
	},
	xAxis: {
		type: 'category',
		data: []
	},
	yAxis: {
		type: 'value'
	},
	series: [{
		name: '累计境外输入',
		data: [],
		type: 'bar',
		smooth: true
	}]
})

virusTrend10Domestic.setOption({
	title: {
		text: '全国 总新增确诊/新增境外输入确诊 趋势',
		subtext: '单位：例'
	},
	legend: {
		x: 'right',
		data: ['总新增确诊', '新增境外输入']
	},
	tooltip: {
		trigger: 'axis'
	},
	xAxis: {
		type: 'category',
		data: []
	},
	yAxis: {
		type: 'value'
	},
	series: [{
		name: '总新增确诊',
		data: [],
		type: 'line',
		smooth: true
	}, {
		name: '新增境外输入',
		data: [],
		type: 'line',
		smooth: true
	}]
})

virusTrend11Domestic.setOption({
	title: {
		text: '全国 现有确诊/疑似/累计确诊 趋势',
		subtext: '单位：例'
	},
	legend: {
		x: 'right',
		data: ['现有确诊', '现有疑似', '累计确诊'],
	},
	tooltip: {
		trigger: 'axis'
	},
	xAxis: {
		type: 'category',
		data: []
	},
	yAxis: {
		type: 'value'
	},
	series: [{
		name: '现有确诊',
		data: [],
		type: 'line',
		smooth: true
	}, {
		name: '现有疑似',
		data: [],
		type: 'line',
		smooth: true
	}, {
		name: '累计确诊',
		data: [],
		type: 'line',
		smooth: true
	}]
})

virusTrend12Domestic.setOption({
	title: {
		text: '全国 累计治愈/死亡 趋势',
		subtext: '单位：例'
	},
	legend: {
		x: 'right',
		data: ['治愈', '死亡'],
	},
	tooltip: {
		trigger: 'axis'
	},
	xAxis: {
		type: 'category',
		data: []
	},
	yAxis: {
		type: 'value'
	},
	series: [{
		name: '治愈',
		data: [],
		type: 'line',
		smooth: true
	}, {
		name: '死亡',
		data: [],
		type: 'line',
		smooth: true
	}]
})

virusTrend13Domestic.setOption({
	title: {
		text: '全国 治愈率/死亡率 趋势',
		subtext: '单位：例'
	},
	legend: {
		x: 'right',
		data: ['治愈率', '死亡率'],
	},
	tooltip: {
		trigger: 'axis'
	},
	xAxis: {
		type: 'category',
		data: []
	},
	yAxis: {
		type: 'value'
	},
	series: [{
		name: '治愈率',
		data: [],
		type: 'line',
		smooth: true
	}, {
		name: '死亡率',
		data: [],
		type: 'line',
		smooth: true
	}]
})

function renderInfo(handleData) {
	$('.ptab-domestic-0 .title span').text(handleData.lastUpdate)
	for (index in handleData.dataList) {
		let $target = $('.ptab-domestic-0 .content .col').eq(index)
		$target.children().eq(1).text(handleData.dataList[index].number.toLocaleString())
		$target.children().eq(2).children().text((handleData.dataList[index].left >= 0 ? '+' + handleData.dataList[index].left :
			handleData.dataList[index].left).toLocaleString())
	}
}
