<template>
    <h2>{{getTitulo}}</h2>
    <p>{{counter}}<sup>2</sup> = {{getMultiplicador}}</p>

    <div>
        <button @click="add">+1</button>
        <button @click="sub">-1</button>
    </div>
</template>

<script>
export default {
    name: 'Counter',
    props: {
        titulo: String,
        start: {
            type: Number,
            default: 100,
            validator( value ){
                return value > 100
            }
        }
    },
    data() {
        return{
            counter : this.start
        }
    },
    methods: {
        multiplicador(){
            return this.counter * this.counter
        },
        add(){
            return this.counter++;
        },
        sub(){
            return this.counter--;
        }
    },
    computed: {
        getMultiplicador(){
             return this.counter * this.counter
        },
        getTitulo(){
            return this.titulo || 'Counter'
        }
    }
}
</script>

<style>

</style>