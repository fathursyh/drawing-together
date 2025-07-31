import { Route, Routes } from "react-router";
import Home from "./views/home";
import MainLayout from "./layouts/mainLayout";

export default function MyRoutes() {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route index element={<Home />} />
            </Route>
        </Routes>
    )
}