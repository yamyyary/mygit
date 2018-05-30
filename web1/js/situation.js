var situation_bar=echarts.init(document.getElementById('situation_bar'));
situation_option={
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:['综合指数','最大指数']
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
        data: ['广州','深圳','济南','成都','天津']
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name:'综合指数',
            type:'line',
            stack: '总量',
            data:[4.47,3.44,7.77,6.38,6.65]
        },
        {
            name:'最大指数',
            type:'line',
            stack: '总量',
            data:[1.15,0.84,2.17,1.80,1.97]
        }
    ]
};
situation_bar.setOption(situation_option);
