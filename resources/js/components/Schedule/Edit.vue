<template>
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-header">
                    <h4>Atualizar Contato</h4>
                </div>
                <div class="card-body">
                    <form @submit.prevent="update">
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
                                <button type="submit" class="btn btn-primary">Atualizar</button>
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
    name:"update-schedule",
    data(){
        return {
            schedule:{
                nome:"",
                email:"",
                telefone:"",
                _method:"patch"
            }
        }
    },
    mounted(){
        this.showSchedule()
    },
    methods:{
        async showSchedule(){
            await this.axios.get(`/api/schedule/${this.$route.params.id}`).then(response=>{
                const { nome, email, telefone } = response.data
                this.schedule.nome = nome
                this.schedule.email = email
                this.schedule.telefone = telefone
            }).catch(error=>{
                console.log(error)
            })
        },
        async update(){
            await this.axios.post(`/api/schedule/${this.$route.params.id}`,this.schedule).then(response=>{
                this.$router.push({name:"scheduleList"})
            }).catch(error=>{
                console.log(error)
            })
        }
    }
}
</script>
