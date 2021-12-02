<template>
    <div class="row">
        <div class="col-12 mb-2">
            <router-link :to='{name:"scheduleAdd"}' class="btn btn-primary">Adicionar Contato</router-link>
        </div>
        <div class="col-12">
            <div class="card">
                <div class="card-header">
                    <h4>Contatos</h4>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-bordered">
                            <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nome</th>
                                <th>Email</th>
                                <th>Telefone</th>
                                <th>Ações</th>
                            </tr>
                            </thead>
                            <tbody v-if="schedules.length > 0">
                            <tr v-for="(schedule,key) in schedules" :key="key">
                                <td>{{ schedule.id }}</td>
                                <td>{{ schedule.nome }}</td>
                                <td>{{ schedule.email }}</td>
                                <td>{{ schedule.telefone }}</td>
                                <td>
                                    <router-link :to='{name:"scheduleEdit",params:{id:schedule.id}}' class="btn btn-success">Editar</router-link>
                                    <button type="button" @click="deleteSchedule(schedule.id)" class="btn btn-danger">Apagar</button>
                                </td>
                            </tr>
                            </tbody>
                            <tbody v-else>
                            <tr>
                                <td colspan="4" align="center">Nenhuma Agenda Encontrada.</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"schedules",
    data(){
        return {
            schedules:[]
        }
    },
    mounted(){
        this.getSchedules()
    },
    methods:{
        async getSchedules(){
            await this.axios.get('/api/schedule').then(response=>{
                this.schedules = response.data
            }).catch(error=>{
                console.log(error)
                this.schedules = []
            })
        },
        deleteSchedule(id){
            if(confirm("Tem certeza que deseja excluir ?")){
                this.axios.delete(`/api/schedule/${id}`).then(response=>{
                    this.getSchedules()
                }).catch(error=>{
                    console.log(error)
                })
            }
        }
    }
}
</script>
