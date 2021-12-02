<template>
    <div class="container">
        <div class="col-12 text-center mt-5">
            <div class="row d-flex justify-content-center">
                <div class="col-6">
                    <div class="card">
                        <div class="card-header">
                            <h4>Consulta de Endereço</h4>
                        </div>
                        <div class="card-body">
                            <form @submit.prevent="onSubmit">
                                <div class="row">
                                    <div class="col-12 mb-2">
                                        <div class="form-group">
                                            <label>Insira o Cep</label>
                                            <input type="text" class="form-control" name="cep" v-model="cep">
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <button type="submit" class="btn btn-primary">Pesquisar</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-12 text-center mt-5" v-show="address.localidade">
            <div class="row d-flex justify-content-center">
                <div class="col-6">
                    <div class="card">
                        <div class="card-header">
                            <h4 class="text-primary">Endereço Localizado</h4>
                        </div>
                        <div class="card-body">
                            <table class="table">
                                <thead>
                                <tr>
                                    <th scope="col">Logradouro</th>
                                    <th scope="col">Bairro</th>
                                    <th scope="col">Cidade</th>
                                    <th scope="col">Estado</th>
                                    <th scope="col">Cep</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>{{address.logradouro}}</td>
                                    <td>{{address.bairro}}</td>
                                    <td>{{address.localidade}}</td>
                                    <td>{{address.uf}}</td>
                                    <td>{{address.cep}}</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data (){
        return{
            title: 'Buscar Cep com VIACEP',
            cep: '',
            address:{},
            preloader: false,
            error: ''
        }
    },
    methods:{
        onSubmit(){
            this.reset(),
                this.preloader = true
            this.axios.get('https://viacep.com.br/ws/'+this.cep+'/json/')
                .then(response =>{
                    this.address = response.data

                }, error => {
                    console.log(error)
                    this.error = 'Cep Invalido!'

                })
                .finally(()=>{
                    this.preloader = false
                })
        },
        reset(){
            this.error = '',
                this.address={}
        }
    }
}
</script>
