var tour_bar=echarts.init(document.getElementById("tour_bar"));
	var tour_option={
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
	        data:['成都旅游总收入','全市接待游客人数']
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
	        boundaryGap: false,
	        data: ['2013年','2014年','2015年','2016年','2017年']
	    },
	    yAxis: [
	    	{
		        type: 'value',
		        name:'元',
		        axisLabel: {
			        formatter: '{value} (亿元)'
		    	}
		    },
		    {
		        type: 'value',
		        name:'人数',
		        axisLabel: {
			        formatter: '{value} (亿人次)'
		    	}
	    	}
	    ],
	    series: [
	        {
	            name:'成都旅游总收入',
	            type:'line',
	            data:[1330.66,1663.37,2040.19,2502.25,3033.42]
	        },
	        {
	            name:'全市接待游客人数',
	            type:'line',
	            yAxisIndex:1,
	            data:[1.5515,1.86,1.91,	2.003,2.1005]

	        }
	    ]
	};
	tour_bar.setOption(tour_option);
	