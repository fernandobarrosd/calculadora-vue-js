const calculadora = new Vue({
    el: "#app",
    data: {
        n1_value: 0,
        n2_value: 0,
        result_value: 0
    },
    methods: {
        somar() {
            this.result_value = 
            this.n1_value + this.n2_value;
        }
    },
})

