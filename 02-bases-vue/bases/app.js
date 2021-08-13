const app = Vue.createApp({
   /* template: `
    <h1>Hola Mundo</h1>
    <p> {{ 1 + 1}} </p>
    `*/



    data() {
        return {
            autor: 'Bruce wane',
            quote: "I'm Batman"
        }
    },

    methods: {
        cambiarQuote(event) {
            console.log(event)
            this.autor = 'Eli Lovera';
            this.capitalizar();
        },
        capitalizar() {
            this.quote = this.quote.toUpperCase();
        }
    }


})

app.mount('#myApp');