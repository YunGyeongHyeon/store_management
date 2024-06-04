import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import MenuList from "../pages/MenuList"
import MenuTable from "../pages/menuTable";

const Routers = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MenuList />} />
                <Route path="/menu" element={<MenuTable />} />
                {/* <Route path="/product" element={<Product />} /> */}
                {/* <Route path="/sales" element={<Sales />} /> */}
            </Routes>
        </BrowserRouter>
    )
}

export default Routers