//createApp是Vue的配置对象，Vue如果想实现任何功能都是通过creatApp对象里面的内容进行实现的
const app = Vue.createApp({
    //定义的data必须是一个函数，因为定义成函数之后才能确定数据的变化
    data(){
        //在return中定义的数据在HTML都都可以进行访问
        return {

        }
    }
});
app.mount("#app")