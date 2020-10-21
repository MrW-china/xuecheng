var {add,add2} =require('./model01')
var Vue=require('./vue.min')
var VM = new Vue({
    el: "#app",
    data: {
        name: 'nmsl',
        num1: 0,
        num2: 0,
        url: 'http://www.baidu.com',
        result: 0
    },
    methods: {
        change:function () {
            this.result =add(Number.parseInt(this.num1) , Number.parseInt(this.num2))
        }
    }


})