var vue = new Vue({
    el: '#app',
    data: {
        items: [],
        counter: 0,
        todo: ''
    },
    methods: {
        del: function (id) {
            this.items = this.items.filter(item => item.id != id);
            this.setStorage(this.items)
        },
        add: function () {
            let text = this.todo
            if (text.length != 0) {
                this.todo = ''
                this.items.push({ id: this.counter, text })
                this.counter++
                this.setStorage(this.items)
            }
        },
        setStorage: function(data) {
            localStorage.setItem('todos', JSON.stringify(data))
        },
        deleteAll: function () {
            this.items = []
            localStorage.removeItem('todos')
        }
    },
    mounted() {
        let data = JSON.parse(localStorage.getItem('todos'))
        if(data != null){
            this.items = data
        }

        let count = JSON.parse(localStorage.getItem('counter'))
        if(count != null){
            this.counter = count
        }
    }
})