    var app = new Vue ({

            el: '#app',
            data:{

                 },

                 mounted () {

                    axios.get(' ./api/index.php ')
                    .then( (res) => {
                        console.log(res.data)

                    })

    
                 },
                 beforeupdate () {

                 },

                 methods: {

                 }

        })