<template>
    <img :src="img" alt="bg"/>

    <div class="bg-dark"></div>
    <div class="indecision-container">
        <input type="text" v-model="question" placeholder="Hax una pregunta">
        <p>recuerda terminar con signo ?</p>
        <div>
            <p>{{question}}</p>
            <h1 v-if="isValidQuestion">{{answer}}</h1>

        </div>
    </div>
</template>

<script>
export default {
    name: 'Indecision',
    data(){
        return {
            question: null,
            answer: null,
            img: "https://via.placeholder.com/250",
            isValidQuestion: false,
        }
    },
    methods: {
        async getAnswer() {
            this.answer = "pensando...";
            const {answer, image} = await fetch('https://yesno.wtf/api').then(r => r.json());
            this.answer = answer === "yes"  ? "Si!!!" : "No!!!";
            this.img = image;

        }
    },
    watch: {
        question(value){
            this.isValidQuestion = false;

            if(!value.includes('?')) return;

            this.isValidQuestion = true;

            this.getAnswer();
        }
    }
}
</script>

<style scoped>

    img, .bg-dark {
        height: 100vh;
        left: 0px;
        max-height: 100%;
        max-width: 100%;
        position: fixed;
        top: 0px;
        width: 100vw;
    }

    .bg-dark {
        background-color: rgba(0, 0, 0, 0.4);
    }

    .indecision-container {
        position: relative;
        z-index: 99;
    }
    
    input {
        width: 250px;
        padding: 10px 15px;
        border-radius: 5px;
        border: none;
    }
    input:focus {
        outline: none;
    }

    p {
        color: white;
        font-size: 20px;
        margin-top: 0px;
    }

    h1, h2 {
        color: white;
    }
    
    h2 {
        margin-top: 150px;
    }

</style>