var salary_city_bar=echarts.init(document.getElementById("salary_city_bar"));
	var salary_city_option={
	   tooltip : {
	        trigger: 'axis',
	        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
	            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
	        }
	    },
	    legend: {
	        data:['城市居民人均可支配收入', '城市居民人均消费性支出','城市居民平均储蓄']
	    },
	    grid: {
	    	bottom: '4%',
	        containLabel: true
	    },
	    yAxis : [
	        {
	            type : 'value'
	            
	        }
	    ],
	    xAxis : [
	        {
	            type : 'category',
	            axisTick : {show: false},
	            data : ['2013年','2014年','2015年','2016年']
	        }
	    ],
	    series : [
	        {
	            name:'城市居民人均可支配收入',
	            type:'bar',
	            label: {
	                normal: {
	                    show: true,
	                    position: 'inside'
	                }
	            },
	            data:[29968,32665,33476,35902]
	        },
	        {
	            name:'城市居民人均消费性支出',
	            type:'bar',
	            label: {
	                normal: {
	                    show: true
	                }
	            },
	            data:[20362,21711,21825,23514]
	        },
	        {
	            name:'城市居民平均储蓄',
	            type:'line',
	            label: {
	                normal: {
	                    show: true,
	                    position: 'left'
	                }
	            },
	            data:[9609,10954,11651,12388]
	        }
	     ]			        
		};
	salary_city_bar.setOption(salary_city_option);
	var salary_country_bar=echarts.init(document.getElementById("salary_country_bar"));
	var salary_country_option={
	   tooltip : {
	        trigger: 'axis',
	        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
	            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
	        }
	    },
	    legend: {
	        data:['农村居民人均纯收入','农村居民人均生活消费支出','农村居民平均储蓄']
	    },
	    grid: {
	    	bottom: '4%',
	        containLabel: true
	    },
	    yAxis : [
	        {
	            type : 'value',
	            min: 0,
				max: 40000,
				interval:10000
	        }
	    ],
	    xAxis : [
	        {
	            type : 'category',
	            axisTick : {show: false},
	            data : ['2013年','2014年','2015年','2016年']
	        }
	    ],
	    series : [
	        {
	            name:'农村居民人均纯收入',
	            type:'bar',
	            label: {
	                normal: {
	                    show: true,
	                    position: 'inside'
	                }
	            },
	            data:[12985,14478,17690,18605]
	        },
	        {
	            name:'农村居民人均生活消费支出',
	            type:'bar',
	            label: {
	                normal: {
	                    show: true
	                }
	            },
	            data:[8866,9697,12711,13428]
	        },
	        {
	            name:'农村居民平均储蓄',
	            type:'line',
	            label: {
	                normal: {
	                    show: true,
	                    position: 'left'
	                }
	            },
	            data:[9609,10954,11651,12388]
	        }
	    ]
	};
	salary_country_bar.setOption(salary_country_option);