import AllUsers from "../components/AllUsers"

const router = [
    {
        path: '/',
        component: AllUsers,
        exact: true,
        name: "all-users",
        auth: false
    }
]

export default router
