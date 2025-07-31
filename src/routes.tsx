import { Route, Routes } from "react-router";
import Home from "./views/home";
import MainLayout from "./layouts/mainLayout";
import AboutView from "./views/about";
import DrawView from "./views/draw";

export default function MyRoutes() {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route index element={<Home />} />
                <Route path="/about" element={<AboutView />} />
                <Route path="/draw/:id" element={<DrawView />} />
            </Route>
        </Routes>
    )
}