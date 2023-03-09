const app = Vue.createApp({
data(){

    return{
Lastname: 'Bergancia',
LastnameA: 'Ares',
LastnameP: 'Ares',
firstname: 'jonald',
firstnameA: 'Albert',
firstnameP: 'John Kenneth',
age: 22

    }
},
methods:{
    changeTitle(){
        this.Lastname = 'Ares'
        
    },
    changeName(){
        
        this.firstnameA = 'albert'

    },
    changek(){
        this.LastnameP = 'Pastrana'
        
    },
    changej(){
        
        this.firstname = 'John Kenneth'

    }
},



})
app.mount('#app')