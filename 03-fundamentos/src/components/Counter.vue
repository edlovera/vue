<template>
    <h2>{{customTitulo}}</h2>
    <p>{{counter}} <sup>2</sup>=  {{counter * counter}} </p>
    
    <div>
        <button @click="addCounter">+1</button>
        <button @click="decrementCounter">-1</button>
    </div>
    
    <!--
    <p>{{counter}} <sup>2</sup>=  {{getSqureValue()}} </p>
    <p>{{counter}} <sup>2</sup>=  {{getSqureValue()}} </p>
    <p>{{counter}} <sup>2</sup>=  {{getSqureValue()}} </p>
    <p>{{counter}} <sup>2</sup>=  {{getSqureValue()}} </p>
    <p>{{counter}} <sup>2</sup>=  {{getSqureValue()}} </p>

    
    <p>{{counter}} <sup>2</sup>=  {{squereCounter}} </p>
    <p>{{counter}} <sup>2</sup>=  {{squereCounter}} </p>
    <p>{{counter}} <sup>2</sup>=  {{squereCounter}} </p>
    <p>{{counter}} <sup>2</sup>=  {{squereCounter}} </p>
    <p>{{counter}} <sup>2</sup>=  {{squereCounter}} </p>
    -->

</template>

<script>
export default {

    props: {
        tituloDelLibro: String,
        start: {
            type: Number,
            //required: true,
            default: 100,
            validator (value) {
                return value >= 100
            }
        }
        
    },

    name:'Counter',

    data() {
        return {
            counter: this.start
        }
    },
    methods: {
        getSqureValue() {
            console.log('methods'); 
            return this.counter * this.counter
        },
        addCounter() {
            this.counter++;
        },
        decrementCounter() {
            this.counter--;
        }
    },
    computed: {
        squereCounter() {    
            console.log('computed');        
            return this.counter * this.counter
        },
        customTitulo() {
            return this.tituloDelLibro || 'Counter'
        }
    }

}
</script>

<style>

    button{
        background-color: #41b883;
        border: 1px solid #82cfad;
        border-radius: 5px;
        color: white;
        cursor: pointer;
        margin: 0 5px;
        padding: 5px 15px;
        transition: 0.3s ease-in-out;
    }
    button:hover{        
        background-color: #3a8f69;
    }
    button:active{
        background-color: #4dc991;
    }

</style>