var population_bar = echarts.init(document.getElementById('population_bar'));
	var population_option={
	
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            crossStyle: {
                color: '#999'
            }
        }
    },
    toolbox: {
        feature: {
            dataView: {show: true, readOnly: false},
            magicType: {show: true, type: ['line', 'bar']},
            restore: {show: true},
            saveAsImage: {show: false}
        }
    },
	legend: {
	    data:['迁入人口数','迁出人口数','机械变动增长率']
	},
	xAxis: [
	    {
	        type: 'category',
	        data: ['2013年','2014年','2015年','2016年'],
	        axisPointer: {
	            type: 'shadow'
	        }
	    }
	],
	yAxis: [
	    {
	        type: 'value',
	        name: '人口数',
	        min: 0.0000,
	        max: 30.0000,
	        interval: 6,
	        axisLabel: {
	            formatter: '{value} (万人)'
	        }
	    },
	    {
	        type: 'value',
	        name: '增长率',
	        min: 0,
	        max: 20,
	        interval: 4,
	        axisLabel: {
	            formatter: '{value} ‰'
	        }
	    }
	],
	series: [
	    {
	        name:'迁入人口数',
	        type:'bar',
	        data:[21.7234,27.2080,23.4697,26.8651]
	    },
	    {
	        name:'迁出人口数',
	        type:'bar',
	        data:[10.2792,10.0512,12.7733,11.5876]
	    },
	    {
	        name:'机械变动增长率',
	        type:'line',
	        yAxisIndex: 1,
	        data:[9.69,14.30,8.77,11.01]
	    }
	]
	};
	population_bar.setOption(population_option);