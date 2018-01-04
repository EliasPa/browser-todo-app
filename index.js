var vue = new Vue({
    el: '#app',
    data: {
        items: [],
        counter: 0,
        todo: '',
        id: null,
        checkedIDs: []
    },
    methods: {
        del: function (id) {
            this.items = this.items.filter(item => item.id != id);
            this.setStorage('todos', this.items)
        },
        add: function () {

            let text = this.todo
            if (text.length != 0) {
                this.todo = ''
                this.items.push({ id: this.counter, text, shouldBeDeleted: false})
                this.counter++
                this.setStorage('todos',this.items)
                this.setStorage('counter', this.counter)
            }
        },
        setStorage: function(key, data) {
            localStorage.setItem(key, JSON.stringify(data))
        },
        deleteAll: function () {
            this.items = []
            localStorage.removeItem('todos')
            this.counter = 0
        },
        toggle: function(id) {
            
        },
        deleteSelected: function(){
            this.items = this.items.filter(item => this.checkedIDs.indexOf(item.id) != -1);
            // console.log(this.checkedIDs)
            this.printArray(this.checkedIDs)
            this.setStorage('todos', this.items)
        },
        printArray: function(data){
            for (let index = 0; index < data.length; index++) {
                let el = data[index];
                console.log(el)
            }
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
        this.id = this._uid
        setInterval(function () { window.componentHandler.upgradeDom() }, 200)

    }
})