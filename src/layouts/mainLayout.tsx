import WebNavbar from "../components/navigations/WebNavbar";
import { Outlet } from "react-router";

export default function MainLayout() {
    return (
        <main>
            <WebNavbar />
            <Outlet />
        </main>
    )
}