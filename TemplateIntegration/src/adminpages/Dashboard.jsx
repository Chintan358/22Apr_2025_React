import { Outlet } from "react-router-dom"
import { AdminFooter } from "./AdminFooter"
import { AdminHeader } from "./AdminHeader"
import { Sidebar } from "./Sidebar"

export const Dashboard = () => {
    return <>


        {/* <div class="overlay"></div> */}

        <Sidebar />
        <main class="main-wrapper">

            <AdminHeader />

            <Outlet></Outlet>

            <AdminFooter />



        </main></>
}

