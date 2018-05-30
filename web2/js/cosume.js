var comsume_bar=echarts.init(document.getElementById('comsume_bar'));
comsume_option={
	timeline:{  
        data:[   
            '2017-07','2017-08','2017-09','2017-10','2017-11',
            '2017-12','2018-01','2018-02','2018-03','2018-04'
        ],  
        label : {
            formatter :function(s) {
                    return (new Date(s)).getFullYear()+"."+(new Date(s)).getMonth();
            }
        }, 
        tooltip:{
        	formatter:function(params){
        		return (params.name);
        	}
        },
         autoPlay : true,  
         playInterval : 1000
    }, 
	options:[
	{
		tooltip:{
	        trigger: 'item',
	        formatter: "{a} <br/>{b} : {c} ({d}%)"
	    },
	    legend: {
	        type: 'scroll',
	        orient: 'vertical',
	        right: 10,
	        top: 20,
	        bottom: 20,
	        data: ['食品烟酒','粮食','衣着','居住','生活用品','交通和通信','教育文化和娱乐','医疗保健']
	    },
	    calculable : true,
	    series : [
	        {
	        	title : {'text':'2013年成都文化建设'},
	            name:'消费分类占比',
	            type: 'pie',
	            radius : '55%',
	            center: ['40%', '50%'],
	            data:[{name:'食品烟酒',value:99.4},{name:'粮食',value:114.7},{name:'衣着',value:103.5},
	            {name:'居住',value:99.7},{name:'生活用品',value:99.2},{name:'交通和通信',value:107.8},
	            {name:'教育文化和娱乐',value:106.5},{name:'医疗保健',value:105.5}],
	            itemStyle: {
	                emphasis: {
	                    shadowBlur: 10,
	                    shadowOffsetX: 0,
	                    shadowColor: 'rgba(0, 0, 0, 0.5)'
	                }
	            }
	        }
	    ]
	},
	         {  
	        	title : {'text':'2014年成都文化建设'},
                series : [  
                    {
                    	 'type':'pie',
                    	'data': [{name:'食品烟酒',value:101.4},{name:'粮食',value:100.5},{name:'衣着',value:102.1},
	            {name:'居住',value:100.7},{name:'生活用品',value:100.5},{name:'交通和通信',value:108.4},
	            {name:'教育文化和娱乐',value:105.9},{name:'医疗保健',value:105.7}]}  
                ]
            },
             {  
            	title : {'text':'2014年成都文化建设'},
                series : [  
                    { 'type':'pie',
                    	'data': [{name:'食品烟酒',value:100.5},{name:'粮食',value:100.5},{name:'衣着',value:102.1},
	            {name:'居住',value:100.4},{name:'生活用品',value:101.5},{name:'交通和通信',value:101.8},
	            {name:'教育文化和娱乐',value:106.1},{name:'医疗保健',value:103.3}]}  
                ]
            },
            { 
            	title : {'text':'2014年成都文化建设'}, 
                series : [  
                    { 'type':'pie',
                    	'data': [{name:'食品烟酒',value:100.3},{name:'粮食',value:96.9},{name:'衣着',value:110.5},
	            {name:'居住',value:99.3},{name:'生活用品',value:102.2},{name:'交通和通信',value:102.0},
	            {name:'教育文化和娱乐',value:101.3},{name:'医疗保健',value:105.9}]}  
                ]
            },	
            {  
            	title : {'text':'2014年成都文化建设'},
                series : [  
                    {
                    	 'type':'pie',
                    	 'data': [{name:'食品烟酒',value:100.6},{name:'粮食',value:99.7},{name:'衣着',value:110.5},
	            {name:'居住',value:100.2},{name:'生活用品',value:101.5},{name:'交通和通信',value:100.8},
	            {name:'教育文化和娱乐',value:99.7},{name:'医疗保健',value:105.7}]}  
                ]
            },	
             {  
             	title : {'text':'2014年成都文化建设'},
                series : [  
                    { 'type':'pie',
                    'data': [{name:'食品烟酒',value:100.8},{name:'粮食',value:99.7},{name:'衣着',value:100.2},
	            {name:'居住',value:101.4},{name:'生活用品',value:100.9},{name:'交通和通信',value:102.1},
	            {name:'教育文化和娱乐',value:99.4},{name:'医疗保健',value:104.6}]}  
                ]
            },	
            {  
            	title : {'text':'2014年成都文化建设'},
                series : [  
                    { 'type':'pie',
                    'data': [{name:'食品烟酒',value:101.6},{name:'粮食',value:100.2},{name:'衣着',value:115.0},
	            {name:'居住',value:100.6},{name:'生活用品',value:101.0},{name:'交通和通信',value:100.7},
	            {name:'教育文化和娱乐',value:98.7},{name:'医疗保健',value:101.1}]}  
                ]
            },	
          {  
          		title : {'text':'2014年成都文化建设'},
                series : [  
                    { 'type':'pie',
                    'data': [{name:'食品烟酒',value:103.9},{name:'粮食',value:98.8},{name:'衣着',value:99.3},
	            {name:'居住',value:99.0},{name:'生活用品',value:100.8},{name:'交通和通信',value:101.0},
	            {name:'教育文化和娱乐',value:107.4},{name:'医疗保健',value:102.0}]}  
                ]
            },	
            {  
            	title : {'text':'2014年成都文化建设'},
                series : [  
                    { 'type':'pie',
                    'data': [{name:'食品烟酒',value:101.2},{name:'粮食',value:99.2},{name:'衣着',value:98.8},
	            {name:'居住',value:98.8},{name:'生活用品',value:101.0},{name:'交通和通信',value:100.6},
	            {name:'教育文化和娱乐',value:101.5},{name:'医疗保健',value:102.5}]}  
                ]
            },	
			{  
				title : {'text':'2014年成都文化建设'},
                series : [  
                    { 'type':'pie',
                    'data': [{name:'食品烟酒',value:100.3},{name:'粮食',value:99.7},{name:'衣着',value:99.3},
	            {name:'居住',value:99.9},{name:'生活用品',value:100.8},{name:'交通和通信',value:101.5},
	            {name:'教育文化和娱乐',value:101.6},{name:'医疗保健',value:103.0}]}  
                ]
            }	
	        ]

};
	comsume_bar.setOption(comsume_option);