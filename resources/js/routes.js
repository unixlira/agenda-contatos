const Welcome = () => import('./components/Welcome.vue')
const ScheduleList = () => import('./components/Schedule/List.vue')
const ScheduleCreate = () => import('./components/Schedule/Add.vue')
const ScheduleEdit = () => import('./components/Schedule/Edit.vue')

export const routes = [
    {
        name: 'home',
        path: '/',
        component: Welcome
    },
    {
        name: 'scheduleList',
        path: '/schedule',
        component: ScheduleList
    },
    {
        name: 'scheduleEdit',
        path: '/schedule/:id/edit',
        component: ScheduleEdit
    },
    {
        name: 'scheduleAdd',
        path: '/schedule/add',
        component: ScheduleCreate
    }
]
