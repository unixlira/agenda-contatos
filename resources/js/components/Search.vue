<template>
    <div class="container">
        <div class="col-12 text-center mt-5">
            <div class="row d-flex justify-content-center">
                <div class="col-6">
                    <div class="card">
                        <div class="card-header">
                            <h4>Endereço Encontrado</h4>
                        </div>
                        <div class="card-body">
                            <div class="row">
                                <div class="col-12 mb-2">
                                    <div class="form-group">
                                    <h1>{{ endereco }}</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    name:"endereco",
    data(){
        return {
            endereco:[]
        }
    },
    mounted(){
        this.getEndereco()
    },
    methods:{
        async getEndereco(){
            await this.axios.get('/api/search').then(response=>{
                this.endereco = response.data
                console.log(this.endereco)

            }).catch(error=>{
                console.log(error)
                this.endereco = []
            })
        }
    }
}
</script>
