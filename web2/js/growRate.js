var grow_rate_bar=echarts.init(document.getElementById("grow_rate_bar"));
	var grow_rate_option={
		tooltip : {
	        trigger: 'item',
	        formatter: "{a} <br/>{b} : {c} ({d}%)"
	    },
	    legend: {
	        type: 'scroll',
	        orient: 'vertical',
	        right: 10,
	        top: 20,
	        bottom: 20,
	        data: ['成都','北京','上海','重庆','天津','广州']
	    },
	    series : [
	        {
	            name:'城市',
	            type: 'pie',
	            radius : '55%',
	            center: ['40%', '50%'],
	            data:[{name:'成都',value:27.24},{name:'北京',value:26.17},{name:'上海',value:26.00},
	            {name:'重庆',value:25.50},{name:'天津',value:24.39},{name:'广州',value:20.22}],
	            itemStyle: {
	                emphasis: {
	                    shadowBlur: 10,
	                    shadowOffsetX: 0,
	                    shadowColor: 'rgba(0, 0, 0, 0.5)'
	                }
	            }
	        }
	    ]
	};
	grow_rate_bar.setOption(grow_rate_option);