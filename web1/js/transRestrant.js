var transport_bar=echarts.init(document.getElementById("transport_bar"));
	var transport_option={
		tooltip: {
        	trigger: 'axis',
        	axisPointer: {
            	type: 'cross',
            	crossStyle: {
                color: '#999'
            	}
            }
	    },
	    legend: {
	        data:['成都双流国际机场旅客吞吐量','成都地铁年客运量']
	    },
	    grid: {
	        left: '3%',
	        right: '4%',
	        bottom: '3%',
	        containLabel: true
	    },
	    toolbox: {
	        feature: {
	            saveAsImage: {}
	        }
	    },
	    xAxis: {
	        type: 'category',
	         axisTick: {
                alignWithLabel: true
            },
	        data: ['2013年','2014年','2015年','2016年','2017年']
	    },
	    yAxis: [
	    	{
		        type: 'value',
		        name:'吞吐量',
		        position:'left',
		        min: 3000,
		        max: 5000,
		        interval: 500,
		        axisLabel: {
			        formatter: '{value} (万人次)'
		    	}
		    },
		    {
		        type: 'value',
		        name:'客运量',
		        position:'right',
		        min: 0,
		        max: 10,
		        interval: 2.5,
		        axisLabel: {
			        formatter: '{value} (亿人次)'
		    	}
	    	}
	    ],
	    series: [
	        {
	            name:'成都双流国际机场旅客吞吐量',
	            type:'line',
	            yAxisIndex: 0,
	            data:[3344.5,3767.5,4223.94,4603.90,4980.1]
	        },
	        {
	            name:'成都地铁年客运量',
	            type:'line',
	            yAxisIndex: 1,
	            data:[1.03,2.8,3.39,5.52,7.82]

	        }
	    ]
	};
	transport_bar.setOption(transport_option);
	var restrant_bar = echarts.init(document.getElementById('restrant_bar'));
	var restrant_option={
	
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
	    data:['餐饮收入','餐饮收入增速']
	},
	xAxis: [
	    {
	        type: 'category',
	        data: ['2013年','2014年','2015年','2016年','2017年'],
	        axisPointer: {
	            type: 'shadow'
	        }
	    }
	],
	yAxis: [
	    {
	        type: 'value',
	        name: '收入',
	        min: 400,
	        max: 800,
	        interval: 100,
	        axisLabel: {
	            formatter: '{value} (亿元)'
	        }
	    },
	    {
	        type: 'value',
	        name: '增速',
	        min: 0,
	        max: 16,
	        interval: 4,
	        axisLabel: {
	            formatter: '{value} %'
	        }
	    }
	],
	series: [
	    {
	        name:'餐饮收入',
	        type:'bar',
	        data:[478.4,544.4,594.6,698.1,794]
	    },
	    {
	        name:'餐饮收入增速',
	        type:'line',
	        yAxisIndex: 1,
	        data:[6.50,7.40,9.20,12.40,12.40]
	    }
	]
	};
	restrant_bar.setOption(restrant_option);