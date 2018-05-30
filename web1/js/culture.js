var culture_bar=echarts.init(document.getElementById("culture_bar"));
var culture_option={
 	timeline:{  
        data:[   
            '2013','2014','2015','2016','2017'  
        ],  
        label : {
            formatter :function(s) {
                    return (new Date(s)).getFullYear();
            }
        }, 
         autoPlay : true,  
         playInterval : 1000
    }, 
	options:[  
            {  
                title : {  
                    'text':'2013年成都文化建设' 
                },  
                tooltip : {'trigger':'axis'},  
                toolbox : {  
                    'show':true,  
                    orient : 'vertical',  
                    x: 'right',  
                    y: 'center',  
                    'feature':{  
                        'mark':{'show':true},  
                        'dataView':{'show':true,'readOnly':false},  
                        'magicType':{'show':true,'type':['line','bar','stack','tiled']},  
                        'restore':{'show':true},  
                        'saveAsImage':{'show':true}  
                    }  
                },  
                calculable : true,  
                grid : {'y':80,'y2':100},  
                xAxis : [{  
                    'type':'category',  
                    'axisLabel':{'interval':0},  
                    'data':[  
                        '图书馆','博物馆','广播节目','电视节目','文化馆'
                    ]  
                }],  
                yAxis : [  
                    {  
                        'type':'value',  
                        'name':'数量',  
                        'max':66  
                    }
                ],  
                series : [  
                    {  
                        'name':'文化建设',  
                        'type':'bar',  
                        'data': [22,65,24,34,22]
                    }
                    
                ]  
            },  
            {  
                title : {'text':'2014年成都文化建设'},  
                series : [  
                    {'data': [21,33,16,22,22]}  
                ]
            },
            {  
                title : {'text':'2015年成都文化建设'},  
                series : [  
                    {'data': [21,33,17,19,22]}  
                ]
            },
             {  
                title : {'text':'2016年成都文化建设'},  
                series : [  
                    {'data': [22,34,18,21,22]}  
                ]
            }, 
            {  
                title : {'text':'2017年成都文化建设'},  
                series : [  
                    {'data': [22,35,18,20,22]}  
                ]
            }  

               
        ]
};

culture_bar.setOption(culture_option);