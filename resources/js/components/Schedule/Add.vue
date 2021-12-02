<template>
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-header">
                    <h4>Criar Contato</h4>
                </div>
                <div class="card-body">
                    <form @submit.prevent="create">
                        <div class="row">
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>Nome</label>
                                    <input type="text" class="form-control" v-model="schedule.nome">
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>Email</label>
                                    <input type="text" class="form-control" v-model="schedule.email">
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>Telefone</label>
                                    <input type="text" class="form-control" v-model="schedule.telefone">
                                </div>
                            </div>
                            <div class="col-12">
                                <button type="submit" class="btn btn-primary">Salvar</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"add-schedule",
    data(){
        return {
            schedule:{
                nome:"",
                email:"",
                telefone:""
            }
        }
    },
    methods:{
        async create(){
            await this.axios.post('/api/schedule',this.schedule).then(response=>{
                this.$router.push({name:"scheduleList"})
            }).catch(error=>{
                console.log(error)
            })
        }
    }
}
</script>
