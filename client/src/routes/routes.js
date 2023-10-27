import AllUsers from "../components/AllUsers"
import AllUsersData from "../components/AllUsersData"
import UpdateUser from "../components/UpdateUser"

const router = [
    {
        path: '/',
        component: AllUsers,
        exact: true,
        name: "create-user",
        auth: false
    },
    {
        path: '/users',
        component: AllUsersData,
        exact: true,
        name: "all-users",
        auth: false
    },
    {
        path: '/update',
        component: UpdateUser,
        exact: true,
        name: "update-users",
        auth: false
    },
]

export default router
