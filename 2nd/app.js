const app = Vue.createApp({
data(){

    return{
Lastname: 'Bergancia',
firstname: 'jonald',
age: 22

    }
},
methods:{
    changeTitle(){
        this.Lastname = 'gg'
        this.Lastname = 'kk'
    }
}


})
app.mount('#app')