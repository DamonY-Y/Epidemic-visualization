$(function() {
	//地图切换
	$("#switch-toggle-domestic,#switch-toggle-foreign").change(function() {
		let select = $(this).prop('checked')
		$(this).parent().next().text(select ? "累计确诊病例数，包含治愈、死亡" : "现有确诊病例数，排除治愈、死亡")
		$(this).parent().parent().next().children().eq(select).css('visibility', '').siblings().css('visibility',
			'hidden')
	})

	//图表切换
	$(".container .tab .btn").click(function() {
		$(this).addClass('active').siblings().removeClass('active')
		$(this).parent().prev().children().eq($(this).index()).css('visibility', '').siblings().css('visibility',
			'hidden')
	})
})


// loding
function loadStop(loadTime) {
	clearInterval(loadTime)
	$("div.loading").css("display", "none")
}

function loadStart(sleep) {
	$("div.loading").css("display", "block")
	let index = 1
	let loadTime = setInterval(function() {
		let itemLen = $("div.loading div.loadDiv div").length
		if (index > itemLen) {
			index = 1
		}
		let $item = $("div.loading div.loadDiv div:nth-child(" + (index++) + ")")
		$item.siblings().each(function() {
			$(this).find("span").removeClass("active")
			$(this).find("span").addClass("default")
		});
		$item.find("span").removeClass("default")
		$item.find("span").addClass("active")
	}, sleep)
	return loadTime
}
