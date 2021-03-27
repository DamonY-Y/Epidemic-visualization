var url = "https://oyen.api.storeapi.net/api/94/222?appid=5825&format=json&sign=6b73fff9171e2c91652d4bcde2900c85"
let nameMap = {
	Afghanistan: '阿富汗',
	Singapore: '新加坡',
	Angola: '安哥拉',
	Albania: '阿尔巴尼亚',
	'United Arab Emirates': '阿拉伯联合酋长国',
	Argentina: '阿根廷',
	Armenia: '亚美尼亚',
	'French Southern and Antarctic Lands': '法属南半球和南极领地',
	Australia: '澳大利亚',
	Austria: '奥地利',
	Azerbaijan: '阿塞拜疆',
	Burundi: '布隆迪',
	Belgium: '比利时',
	Benin: '贝宁',
	'Burkina Faso': '布基纳法索',
	Bangladesh: '孟加拉国',
	Bulgaria: '保加利亚',
	'The Bahamas': '巴哈马',
	'Bosnia and Herzegovina': '波斯尼亚和黑塞哥维那',
	Belarus: '白俄罗斯',
	Belize: '伯利兹',
	Bermuda: '百慕大',
	Bolivia: '玻利维亚',
	Brazil: '巴西',
	Brunei: '文莱',
	Bhutan: '不丹',
	Botswana: '博茨瓦纳',
	'Central African Republic': '中非共和国',
	Canada: '加拿大',
	Switzerland: '瑞士',
	Chile: '智利',
	China: '中国',
	'Ivory Coast': '象牙海岸',
	Cameroon: '喀麦隆',
	'Democratic Republic of the Congo': '刚果（金）',
	'Republic of the Congo': '刚果（布）',
	Colombia: '哥伦比亚',
	'Costa Rica': '哥斯达黎加',
	Cuba: '古巴',
	'Northern Cyprus': '北塞浦路斯',
	Cyprus: '塞浦路斯',
	'Czech Republic': '捷克共和国',
	Germany: '德国',
	Djibouti: '吉布提',
	Denmark: '丹麦',
	'Dominican Republic': '多明尼加共和国',
	Algeria: '阿尔及利亚',
	Ecuador: '厄瓜多尔',
	Egypt: '埃及',
	Eritrea: '厄立特里亚',
	Spain: '西班牙',
	Estonia: '爱沙尼亚',
	Ethiopia: '埃塞俄比亚',
	Finland: '芬兰',
	Fiji: '斐',
	'Falkland Islands': '福克兰群岛',
	France: '法国',
	Gabon: '加蓬',
	'United Kingdom': '英国',
	Georgia: '格鲁吉亚',
	Ghana: '加纳',
	Guinea: '几内亚',
	Gambia: '冈比亚',
	'Guinea Bissau': '几内亚比绍',
	Greece: '希腊',
	Greenland: '格陵兰岛',
	Guatemala: '危地马拉',
	'French Guiana': '法属圭亚那',
	Guyana: '圭亚那合作共和国',
	Honduras: '洪都拉斯',
	Croatia: '克罗地亚',
	Haiti: '海地',
	Hungary: '匈牙利',
	Indonesia: '印度尼西亚',
	India: '印度',
	Ireland: '爱尔兰',
	Iran: '伊朗',
	Iraq: '伊拉克',
	Iceland: '冰岛',
	Israel: '以色列',
	Italy: '意大利',
	Jamaica: '牙买加',
	Jordan: '约旦',
	Japan: '日本',
	Kazakhstan: '哈萨克斯坦',
	Kenya: '肯尼亚',
	Kyrgyzstan: '吉尔吉斯斯坦',
	Cambodia: '柬埔寨',
	Kosovo: '科索沃',
	Kuwait: '科威特',
	Laos: '老挝',
	Lebanon: '黎巴嫩',
	Liberia: '利比里亚',
	Libya: '利比亚',
	'Sri Lanka': '斯里兰卡',
	Lesotho: '莱索托',
	Lithuania: '立陶宛',
	Luxembourg: '卢森堡',
	Latvia: '拉脱维亚',
	Morocco: '摩洛哥',
	Moldova: '摩尔多瓦',
	Madagascar: '马达加斯加',
	Mexico: '墨西哥',
	Macedonia: '北马其顿',
	Mali: '马里',
	Myanmar: '缅甸',
	Montenegro: '黑山',
	Mongolia: '蒙古国',
	Mozambique: '莫桑比克',
	Mauritania: '毛里塔尼亚',
	Malawi: '马拉维',
	Malaysia: '马来西亚',
	Namibia: '纳米比亚',
	'New Caledonia': '新喀里多尼亚',
	Niger: '尼日尔',
	Nigeria: '尼日利亚',
	Nicaragua: '尼加拉瓜',
	Netherlands: '荷兰',
	Norway: '挪威',
	Nepal: '尼泊尔',
	'New Zealand': '新西兰',
	Oman: '阿曼',
	Pakistan: '巴基斯坦',
	Panama: '巴拿马',
	Peru: '秘鲁',
	Philippines: '菲律宾',
	'Papua New Guinea': '巴布亚新几内亚',
	Poland: '波兰',
	'Puerto Rico': '波多黎各',
	'North Korea': '北朝鲜',
	Portugal: '葡萄牙',
	Paraguay: '巴拉圭',
	Qatar: '卡塔尔',
	Romania: '罗马尼亚',
	Russia: '俄罗斯',
	Rwanda: '卢旺达',
	'Western Sahara': '西撒哈拉',
	'Saudi Arabia': '沙特阿拉伯',
	Sudan: '苏丹',
	'South Sudan': '南苏丹',
	Senegal: '塞内加尔',
	'Solomon Islands': '所罗门群岛',
	'Sierra Leone': '塞拉利昂',
	'El Salvador': '萨尔瓦多',
	Somaliland: '索马里兰',
	Somalia: '索马里',
	'Republic of Serbia': '塞尔维亚',
	Suriname: '苏里南',
	Slovakia: '斯洛伐克',
	Slovenia: '斯洛文尼亚',
	Sweden: '瑞典',
	Swaziland: '斯威士兰',
	Syria: '叙利亚',
	Chad: '乍得',
	Togo: '多哥',
	Thailand: '泰国',
	Tajikistan: '塔吉克斯坦',
	Turkmenistan: '土库曼斯坦',
	'East Timor': '东帝汶',
	'Trinidad and Tobago': '特里尼达和多巴哥',
	Tunisia: '突尼斯',
	Turkey: '土耳其',
	'United Republic of Tanzania': '坦桑尼亚',
	Uganda: '乌干达',
	Ukraine: '乌克兰',
	Uruguay: '乌拉圭',
	'United States': '美国',
	Uzbekistan: '乌兹别克斯坦',
	Venezuela: '委内瑞拉',
	Vietnam: '越南',
	Vanuatu: '瓦努阿图',
	'West Bank': '西岸',
	Yemen: '也门',
	'South Africa': '南非',
	Zambia: '赞比亚',
	Korea: '韩国',
	Tanzania: '坦桑尼亚',
	Zimbabwe: '津巴布韦',
	Congo: '刚果',
	'Central African Rep.': '中非共和国',
	Serbia: '塞尔维亚',
	'Bosnia and Herz.': '波黑',
	'Czech Rep.': '捷克',
	'W. Sahara': '西撒哈拉',
	'Lao PDR': '老挝',
	'Dem.Rep.Korea': '朝鲜',
	'Falkland Is.': '福克兰群岛',
	'Timor-Leste': '东帝汶',
	'Solomon Is.': '所罗门群岛',
	Palestine: '巴勒斯坦',
	'N. Cyprus': '北塞浦路斯',
	Aland: '奥兰群岛',
	'Fr. S. Antarctic Lands': '法属南半球和南极陆地',
	Mauritius: '毛里求斯',
	Comoros: '科摩罗',
	'Eq. Guinea': '赤道几内亚',
	'Guinea-Bissau': '几内亚比绍',
	'Dominican Rep.': '多米尼加',
	'Saint Lucia': '圣卢西亚',
	Dominica: '多米尼克',
	'Antigua and Barb.': '安提瓜和巴布达',
	'U.S. Virgin Is.': '美国原始岛屿',
	Montserrat: '蒙塞拉特',
	Grenada: '格林纳达',
	Barbados: '巴巴多斯',
	Samoa: '萨摩亚',
	Bahamas: '巴哈马',
	'Cayman Is.': '开曼群岛',
	'Faeroe Is.': '法罗群岛',
	'IsIe of Man': '马恩岛',
	Malta: '马耳他共和国',
	Jersey: '泽西',
	'Cape Verde': '佛得角共和国',
	'Turks and Caicos Is.': '特克斯和凯科斯群岛',
	'St. Vin. and Gren.': '圣文森特和格林纳丁斯'
};

$.ajax({
	url: url,
	method: "get",
	success: function(data) {
		// console.log(data.retdata);

		WorldMapCur(data); //现存确诊
		WorldMapAll(data); // 累计确诊
		countries_table(data); // 列表
		foreign_inforender(data); // 总体信息渲染
		DomesticForeignAddCom(data); // 国内外新增对比
		ForeignAllCur(data); // 国外累计确诊与现存确诊
		ForeignHealDied(data); // 国外 治愈死亡
		WorldAddTop(data); //  新增Top10

		SouthAmerica(data)
		NorthAmerica(data)
		AsianCountries(data)
		EuropeanCountries(data)
	}
})

//  国外疫情数据总体展示
function foreign_inforender(data) {
	foreign_now = data.retdata.theWorldTrend.xResult[3].data.pop()
	foreign_now_add = foreign_now - data.retdata.theWorldTrend.xResult[3].data.pop()


	foreign_total = data.retdata.theWorldTrend.xResult[0].data.pop()

	foreign_heal = data.retdata.theWorldTrend.xResult[1].data.pop()
	foreign_heal_add = foreign_heal - data.retdata.theWorldTrend.xResult[1].data.pop()
	foreign_healrate = Math.round((foreign_heal / foreign_total) * 1000) / 10

	foreign_died = data.retdata.theWorldTrend.xResult[2].data.pop()
	foreign_died_add = foreign_died - data.retdata.theWorldTrend.xResult[2].data.pop()
	foreign_diedrate = Math.round((foreign_died / foreign_total) * 1000) / 10

	// console.log(foreign_healrate, foreign_diedrate);
	$("#foreign-updatetime").text(data.retdata.lastUpdateTime)
	$('#foreign-now').text(foreign_now);
	$("#foreign-now-add").text("+" + foreign_now_add);

	$("#foreign-heal").text(foreign_heal);
	$("#foreign-heal-add").text("+" + foreign_heal_add)

	$('#foreign-died').text(foreign_died);
	$('#foreign-died-add').text("+" + foreign_died_add)


	$("#foreign-total").text(foreign_total)
	$("#foreign-total-add").text("+" + data.retdata.theWorldTrend.xResult[4].data.pop())
	$("#foreign-healrate").text(foreign_healrate + "%")
	$("#foreign-diedrate").text(foreign_diedrate + "%")

}

// 数据表格化
function countries_table(data) {
	var data = data.retdata.caseOutsideList;
	// console.log(data);
	data.sort(compare("curConfirm"));
	for (var i = 0; i < data.length; i++) {
		// ${data[i].curConfirm}
		var str =
			`<tr>
                        <td>${data[i].xArea}</td>
                        <td>${data[i].curConfirm}</td>
                        <td>${data[i].confirm}</td>
                        <td>${data[i].heal}</td>
                        <td>${data[i].died}</td>
                        </tr>`
		$("#twoTable").append(str)
	}
}

function compare(key) {
	return function(value1, value2) {
		var val1 = value1[key];
		var val2 = value2[key];
		return val2 - val1;
	}
}

// 世界地图：累计确诊
function WorldMapAll(data) {
	// console.log(data.retdata);
	var length = data.retdata.chinaTotal.xResult[0].data.length
	var china = {
		name: "中国",
		value: data.retdata.chinaTotal.xResult[0].data[length - 1]
	}
	var data = data.retdata.caseOutsideList;
	var world_confirm = [china]
	for (var i = 0; i < data.length; i++) {
		var country = {
			name: data[i].xArea,
			value: data[i].confirm
		}
		world_confirm.push(country)
	}
	// console.log(world_confirm);
	var worldMapall = echarts.init($("#world-map-all")[0])
	option = {
		tooltip: {
			trigger: 'item',
		},
		visualMap: {
			type: 'piecewise',
			pieces: [{
					min: 100000,
					max: 99999999,
					label: '>=100000',
					color: '#8a0808'
				},
				{
					min: 10000,
					max: 99999,
					label: '>=10000',
					color: '#b80909'
				},
				{
					min: 1000,
					max: 9999,
					label: '1000-9999',
					color: '#a92919'
				},
				{
					min: 100,
					max: 999,
					label: '500-999',
					color: '#f57567'
				},
				{
					min: 50,
					max: 99,
					label: '100-499',
					color: '#ff9985'
				},
				{
					min: 10,
					max: 49,
					label: '10-49',
					color: '#ffc4b3'
				},
				{
					min: 1,
					max: 9,
					label: '1-9',
					color: '#ffe5db'
				},
				{
					min: 0,
					max: 0,
					label: "0",
					color: '#fefefe'
				},
			],
			orient: 'horizontal',
			// color: ['#E0022B', '#E09107', '#A3E00B']
		},
		nameMap: nameMap,
		toolbox: {
			show: true,
			orient: 'vertical',
			left: 'right',
			top: 'center',
			feature: {
				mark: {
					show: true
				},
				dataView: {
					show: true,
					readOnly: false
				},
				restore: {
					show: true
				},
				saveAsImage: {
					show: true
				}
			}
		},
		roamController: {
			show: true,
			left: 'right',
			mapTypeControl: {
				'world': true
			}
		},
		series: [{
			name: '累计确诊',
			type: 'map',
			map: 'world',
			roam: false,
			label: {
				show: false, // 这里就不在地图上显示名字了，200多个会晕的
				color: 'rgb(0, 0, 0)'
			},
			data: world_confirm
		}]
	};
	worldMapall.setOption(option);
	// console.log(world_confirm);

}

// 世界地图：现存确诊
function WorldMapCur(data) {
	// console.log(data.retdata);
	var length = data.retdata.chinaTotal.xResult[0].data.length
	var china = {
		name: "中国",
		// value: data.retdata.chinaTotal.xResult[0].data[length-1]
		value: "460"
	}
	var data = data.retdata.caseOutsideList;
	var world_curconfirm = [china]
	for (var i = 0; i < data.length; i++) {
		var country = {
			name: data[i].xArea,
			value: data[i].curConfirm
		}
		world_curconfirm.push(country)
	}
	// console.log(world_curconfirm);

	var WorldMapCur = echarts.init($("#world-map-cur")[0])

	option = {
		tooltip: {
			trigger: 'item',
		},
		visualMap: {
			type: 'piecewise',
			pieces: [{
					min: 100000,
					max: 99999999,
					label: '>=100000',
					color: '#8a0808'
				},
				{
					min: 10000,
					max: 99999,
					label: '>=10000',
					color: '#b80909'
				},
				{
					min: 1000,
					max: 9999,
					label: '1000-9999',
					color: '#a92919'
				},
				{
					min: 100,
					max: 999,
					label: '500-999',
					color: '#f57567'
				},
				{
					min: 50,
					max: 99,
					label: '100-499',
					color: '#ff9985'
				},
				{
					min: 10,
					max: 49,
					label: '10-49',
					color: '#ffc4b3'
				},
				{
					min: 1,
					max: 9,
					label: '1-9',
					color: '#ffe5db'
				},
				{
					min: 0,
					max: 0,
					label: "0",
					color: '#fefefe'
				},
			],
			orient: 'horizontal',
			// color: ['#E0022B', '#E09107', '#A3E00B']
		},
		nameMap: nameMap,
		toolbox: {
			show: true,
			orient: 'vertical',
			left: 'right',
			top: 'center',
			feature: {
				mark: {
					show: true
				},
				dataView: {
					show: true,
					readOnly: false
				},
				restore: {
					show: true
				},
				saveAsImage: {
					show: true
				}
			}
		},
		roamController: {
			show: true,
			left: 'right',
			mapTypeControl: {
				'world': true
			}
		},
		series: [{
			name: '现存确诊',
			type: 'map',
			map: 'world',
			roam: false,
			label: {
				show: false, // 这里就不在地图上显示名字了，200多个会晕的
				color: 'rgb(0, 0, 0)'
			},
			data: world_curconfirm
		}]
	};
	WorldMapCur.setOption(option);
}

// 国内/国外新增对比
function DomesticForeignAddCom(data) {
	var world_date = data.retdata.theWorldTrend.updateDate;
	var china_addconfirm = data.retdata.chinaTotal.xResult[4].data.slice(20, );
	var world_add = data.retdata.theWorldTrend.xResult[4].data
	var foreign_add = world_add - china_addconfirm

	var DomesticForeignAddComChart = echarts.init($("#domestic-foreign-add")[0])
	var option = {
		title: {
			text: "国内/国外新增确诊 趋势",
			subtext: "单位：例"
		},
		legend: {
			data: ["国外", "国内"],
			left: "right"
		},
		tooltip: {
			trigger: "axis"
		},
		xAxis: {
			type: 'category',
			data: world_date
		},
		yAxis: {
			type: 'value'
		},
		series: [{
				data: world_add,
				name: "国外",
				type: 'line',
				smooth: true
			},
			{
				data: china_addconfirm,
				name: "国内",
				type: 'line',
				smooth: true
			}
		]
	};
	DomesticForeignAddComChart.setOption(option)
}

// 国外累计确诊 ？现有确诊
function ForeignAllCur(data) {
	var world_date = data.retdata.theWorldTrend.updateDate;
	var world_confirm = data.retdata.theWorldTrend.xResult[0].data
	var world_now = data.retdata.theWorldTrend.xResult[3].data

	var ForeignAllCurComChart = echarts.init($("#foreign-add-cur")[0])
	var option = {
		title: {
			text: "国外累计确诊/现有确诊 趋势",
			subtext: "单位：例"
		},
		legend: {
			data: ["累计确诊", "现有确诊"],
			left: "right"
		},
		tooltip: {
			trigger: "axis"
		},
		xAxis: {
			type: 'category',
			data: world_date
		},
		yAxis: {
			type: 'value'
		},
		series: [{
				data: world_confirm,
				name: "累计确诊",
				type: 'line',
				smooth: true
			},
			{
				data: world_now,
				name: "现有确诊",
				type: 'line',
				smooth: true
			}
		]
	};
	ForeignAllCurComChart.setOption(option)
}

// 国外治愈/死亡
function ForeignHealDied(data) {
	var world_date = data.retdata.theWorldTrend.updateDate;
	var world_heal = data.retdata.theWorldTrend.xResult[1].data
	var world_died = data.retdata.theWorldTrend.xResult[2].data

	var ForeignHealDiedChart = echarts.init($("#foreign-heal-died")[0])
	var option = {
		title: {
			text: "国外累计治愈/死亡 趋势",
			subtext: "单位：例"
		},
		legend: {
			data: ["治愈", "死亡"],
			left: "right"
		},
		tooltip: {
			trigger: "axis"
		},
		xAxis: {
			type: 'category',
			data: world_date
		},
		yAxis: {
			type: 'value'
		},
		series: [{
				data: world_heal,
				name: "治愈",
				type: 'line',
				smooth: true
			},
			{
				data: world_died,
				name: "死亡",
				type: 'line',
				smooth: true
			}
		]
	};
	ForeignHealDiedChart.setOption(option)
}

// 新增Top10
function WorldAddTop(data) {
	var data = data.retdata.topAddCountry
	// data = JSON.parse(JSON.stringify(data).replace(/xValue/g, '新增'))
	// console.log(data);
	var worldAddtopchart = echarts.init($("#world-add-top10")[0])

	var option = {
		title: {
			text: "新增确诊国家Top10",
			subtext: "单位：例"
		},
		tooltip: {
			trigger: "axis",
			// formatter: "国家:{b}<br/>新增：{c}"
		},
		dataset: {
			// dimensions: ['xName', '新增'],
			dimensions: ['xName', 'xValue'],
			source: data
		},
		xAxis: {
			type: 'category',
		},
		yAxis: {},
		series: [{

			type: 'bar'
		}]
	};
	worldAddtopchart.setOption(option)
}

function SouthAmerica(data) {
	var SouthAmericaChart = echarts.init($("#South-America-Countries")[0])
	var option = {
		title: {
			text: '某站点用户访问来源',
			subtext: '纯属虚构',
			left: 'center'
		},
		tooltip: {
			trigger: 'item'
		},
		legend: {
			orient: 'vertical',
			left: 'left',
		},
		series: [{
			name: '访问来源',
			type: 'pie',
			radius: '50%',
			data: [{
					value: 1048,
					name: '搜索引擎'
				},
				{
					value: 735,
					name: '直接访问'
				},
				{
					value: 580,
					name: '邮件营销'
				},
				{
					value: 484,
					name: '联盟广告'
				},
				{
					value: 300,
					name: '视频广告'
				}
			]
		}]
	};
	SouthAmericaChart.setOption(option)
}

function NorthAmerica(data) {
	var NorthAmericaChart = echarts.init($("#North-America-Countries")[0])
	var option = {
		title: {
			text: '某站点用户访问来源',
			subtext: '纯属虚构',
			left: 'center'
		},
		tooltip: {
			trigger: 'item'
		},
		legend: {
			orient: 'vertical',
			left: 'left',
		},
		series: [{
			name: '访问来源',
			type: 'pie',
			radius: '50%',
			data: [{
					value: 1048,
					name: '搜索引擎'
				},
				{
					value: 735,
					name: '直接访问'
				},
				{
					value: 580,
					name: '邮件营销'
				},
				{
					value: 484,
					name: '联盟广告'
				},
				{
					value: 300,
					name: '视频广告'
				}
			]
		}]
	};
	NorthAmericaChart.setOption(option)
}

function AsianCountries(data) {
	var AsianChart = echarts.init($("#Asian-Countries")[0])
	var option = {
		title: {
			text: '某站点用户访问来源',
			subtext: '纯属虚构',
			left: 'center'
		},
		tooltip: {
			trigger: 'item'
		},
		legend: {
			orient: 'vertical',
			left: 'left',
		},
		series: [{
			name: '访问来源',
			type: 'pie',
			radius: '50%',
			data: [{
					value: 1048,
					name: '搜索引擎'
				},
				{
					value: 735,
					name: '直接访问'
				},
				{
					value: 580,
					name: '邮件营销'
				},
				{
					value: 484,
					name: '联盟广告'
				},
				{
					value: 300,
					name: '视频广告'
				}
			]
		}]
	};
	AsianChart.setOption(option)
}

function EuropeanCountries(data) {
	var EuropeanChart = echarts.init($("#European-Countries")[0])
	var option = {
		title: {
			text: '某站点用户访问来源',
			subtext: '纯属虚构',
			left: 'center'
		},
		tooltip: {
			trigger: 'item'
		},
		legend: {
			orient: 'vertical',
			left: 'left',
		},
		series: [{
			name: '访问来源',
			type: 'pie',
			radius: '50%',
			data: [{
					value: 1048,
					name: '搜索引擎'
				},
				{
					value: 735,
					name: '直接访问'
				},
				{
					value: 580,
					name: '邮件营销'
				},
				{
					value: 484,
					name: '联盟广告'
				},
				{
					value: 300,
					name: '视频广告'
				}
			]
		}]
	};
	EuropeanChart.setOption(option)
}
