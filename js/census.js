var censusTimer,start_date="20220901",date=new Date,end_date=""+date.getFullYear()+(date.getMonth()>8?date.getMonth()+1:"0"+(date.getMonth()+1))+(date.getDate()>9?date.getDate():"0"+date.getDate()),access_token="121.d5b973ff1cebe77d5c75a393f2b3add5.Y3ignFxF5Brq9Mwnur1zkRkfNPT1sdizhB2Rg4w.DiVqew",site_id="18384478",dataUrl="https://baidu-tongji.fomal.cc/api?access_token="+access_token+"&site_id="+site_id,metrics="pv_count",metricsName="pv_count"===metrics?"访问次数":"visitor_count"===metrics?"访客数":"",color="light"===document.documentElement.getAttribute("data-theme")?"#4c4948":"rgba(255,255,255,0.7)";function mapChart(){let e=document.createElement("script");fetch(dataUrl+("&start_date="+start_date+"&end_date="+end_date+"&metrics="+metrics+"&method=overview/getDistrictRpt")).then((e=>e.json())).then((t=>{let n=t.result.items[0],r=t.result.items[1],o=[],a=r[0][0];for(let e=0;e<n.length;e++)o.push({name:n[e][0],value:r[e][0]});let s=JSON.stringify(o);e.innerHTML=`\n      var mapChart = echarts.init(document.getElementById('map-chart'), 'light');\n      var mapOption = {\n        title: {\n          text: '网站访客地域分布图🌏',\n          x: 'center',\n          textStyle: {\n            color: '${color}'\n          }\n        },\n        tooltip: {\n          trigger: 'item'\n        },\n        visualMap: {\n          min: 0,\n          max: ${a},\n          left: 'left',\n          top: 'bottom',\n          text: ['多','少'],\n          color: ['#39c5bb', '#b9ebe4'],\n          textStyle: {\n            color: '${color}'\n          },\n          calculable: true\n        },\n        series: [{\n          name: '${metricsName}',\n          type: 'map',\n          mapType: 'china',\n          showLegendSymbol: false,\n          label: {\n            normal: {\n              show: false\n            },\n            emphasis: {\n              show: true,\n              color: '#617282'\n            }\n          },\n          itemStyle: {\n            normal: {\n              areaColor: 'rgb(230, 232, 234)',\n              borderColor: 'rgb(255, 255, 255)',\n              borderWidth: 1\n            },\n            emphasis: {\n              areaColor: 'gold'\n            }\n          },\n          data: ${s}\n        }]\n      };\n      mapChart.setOption(mapOption);\n      window.addEventListener("resize", () => { \n        mapChart.resize();\n      });`,document.getElementById("map-chart").after(e)})).catch((function(e){console.log(e)}))}function trendsChart(){let e=document.createElement("script");fetch(dataUrl+("&start_date="+start_date+"&end_date="+end_date+"&metrics="+metrics+"&method=trend/time/a&gran=month")).then((e=>e.json())).then((t=>{let n=[],r=[],o=t.result.items[0],a=t.result.items[1];for(let e=o.length-1;e>=0;e--)n.push(o[e][0].substring(0,7).replace("/","-")),r.push("--"!==a[e][0]?a[e][0]:0);let s=JSON.stringify(n),l=JSON.stringify(r);e.innerHTML=`\n      var trendsChart = echarts.init(document.getElementById('trends-chart'), 'light');\n      var trendsOption = {\n        title: {\n          text: '网站访客日期分布图📅',\n          x: 'center',\n          textStyle: {\n            color: '${color}'\n          }\n        },\n        tooltip: {\n          trigger: 'axis'\n        },\n        xAxis: {\n          name: '日期',\n          type: 'category',\n          boundaryGap: false,\n          nameTextStyle: {\n            color: '${color}'\n          },\n          axisTick: {\n            show: false\n          },\n          axisLabel: {\n            show: true,\n            color: '${color}'\n          },\n          axisLine: {\n            show: true,\n            lineStyle: {\n              color: '${color}'\n            }\n          },\n          data: ${s}\n        },\n        yAxis: {\n          name: '${metricsName}',\n          type: 'value',\n          nameTextStyle: {\n            color: '${color}'\n          },\n          splitLine: {\n            show: false\n          },\n          axisTick: {\n            show: false\n          },\n          axisLabel: {\n            show: true,\n            color: '${color}'\n          },\n          axisLine: {\n            show: true,\n            lineStyle: {\n              color: '${color}'\n            }\n          }\n        },\n        series: [{\n          name: '${metricsName}',\n          type: 'line',\n          smooth: true,\n          lineStyle: {\n              width: 0\n          },\n          showSymbol: false,\n          itemStyle: {\n            opacity: 1,\n            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{\n              offset: 0,\n              color: 'rgba(128, 255, 165)'\n            },\n            {\n              offset: 1,\n              color: 'rgba(1, 191, 236)'\n            }])\n          },\n          areaStyle: {\n            opacity: 1,\n            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{\n              offset: 0,\n              color: 'rgba(128, 255, 165)'\n            }, {\n              offset: 1,\n              color: 'rgba(1, 191, 236)'\n            }])\n          },\n          data: ${l},\n          markLine: {\n            data: [{\n              name: '平均值',\n              type: 'average',\n              label: {\n                color: '${color}'\n              }\n            }]\n          }\n        }]\n      };\n      trendsChart.setOption(trendsOption);\n      window.addEventListener("resize", () => { \n        trendsChart.resize();\n      });`,document.getElementById("trends-chart").after(e)})).catch((function(e){console.log(e)}))}function sourcesChart(){let e=document.createElement("script");fetch(dataUrl+("&start_date="+start_date+"&end_date="+end_date+"&metrics="+metrics+"&method=source/all/a")).then((e=>e.json())).then((t=>{let n=t.result.items[0],r=t.result.items[1],o=[];for(let e=0;e<n.length;e++)o.push({name:n[e][0].name,value:r[e][0]});let a=JSON.stringify(o);e.innerHTML=`\n      var sourcesChart = echarts.init(document.getElementById('sources-chart'), 'light');\n      var sourcesOption = {\n        title: {\n          text: '网站访客来源分布图🎨',\n          x: 'center',\n          textStyle: {\n            color: '${color}'\n          }\n        },\n        legend: {\n          top: 'bottom',\n          textStyle: {\n            color: '${color}'\n          }\n        },\n        tooltip: {\n          trigger: 'item'\n        },\n        series: [{\n          name: '${metricsName}',\n          type: 'pie',\n          radius: [30, 80],\n          center: ['50%', '50%'],\n          roseType: 'area',\n          label: {\n            color: '${color}',\n            formatter: "{b} : {c} ({d}%)"\n          },\n          data: ${a},\n          itemStyle: {\n            emphasis: {\n              shadowBlur: 10,\n              shadowOffsetX: 0,\n              shadowColor: 'rgba(255, 255, 255, 0.5)'\n            }\n          }\n        }]\n      };\n      sourcesChart.setOption(sourcesOption);\n      window.addEventListener("resize", () => { \n        sourcesChart.resize();\n      });`,document.getElementById("sources-chart").after(e)})).catch((function(e){console.log(e)}))}function switchVisitChart(){let e="light"===document.documentElement.getAttribute("data-theme")?"#4c4948":"rgba(255,255,255,0.7)";if(document.getElementById("map-chart")&&mapOption)try{let t=mapOption;t.title.textStyle.color=e,t.visualMap.textStyle.color=e,mapChart.setOption(t)}catch(e){console.log(e)}if(document.getElementById("trends-chart")&&trendsOption)try{let t=trendsOption;t.title.textStyle.color=e,t.xAxis.nameTextStyle.color=e,t.yAxis.nameTextStyle.color=e,t.xAxis.axisLabel.color=e,t.yAxis.axisLabel.color=e,t.xAxis.axisLine.lineStyle.color=e,t.yAxis.axisLine.lineStyle.color=e,t.series[0].markLine.data[0].label.color=e,trendsChart.setOption(t)}catch(e){console.log(e)}if(document.getElementById("sources-chart")&&sourcesOption)try{let t=sourcesOption;t.title.textStyle.color=e,t.legend.textStyle.color=e,t.series[0].label.color=e,sourcesChart.setOption(t)}catch(e){console.log(e)}}document.getElementById("map-chart")&&mapChart(),document.getElementById("trends-chart")&&trendsChart(),document.getElementById("sources-chart")&&sourcesChart();try{document.addEventListener("click",(function(){clearTimeout(censusTimer),censusTimer=setTimeout(switchVisitChart,100)}))}catch(e){}