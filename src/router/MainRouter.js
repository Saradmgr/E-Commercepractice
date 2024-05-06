import React from "react";
import { Route, createBrowserRouter, createRoutesFromChildren } from "react-router-dom";
import Apps from "../component/user/Apps";
import Details from "../component/user/Details";
import Login from "../component/user/Login";
import Signup from "../component/user/Signup";
import AuthLayout from "../component/layout/AuthLayout";
import PagenotFound from "../component/PagenotFound";
import Profile from "../component/user/Profile";
import UserProfile from "../component/user/UserProfile/UserProfile";
import Filter from "../component/user/Filter.js/Filter";
import Settings from "../component/user/UserProfile/Settings";
import ContactInfo from "../component/user/Aboutus";
import Aboutus from "../component/user/Aboutus";
import Contactus from "../component/user/Contactus";
const Userlayout = React.lazy(() => import("../component/layout/Userlayout"))
const Dashboard = React.lazy(() => import("../component/user/dashboard/Dashboard"))
const Adminlayout = React.lazy(() => import("../component/layout/Adminlayout"))
const AdminDashboard = React.lazy(() => import("../component/admin/AdminDashboard"))
export const MainRouter = createBrowserRouter(
    createRoutesFromChildren(
        <Route>
            <Route path="/" element={<Userlayout />}>
                <Route index element={<Apps />} />
                <Route path="/details/:label" element={<Details/>}/>
                <Route path="/profile" element={<UserProfile/>}/>
                <Route path="/settings" element={<Settings/>}/>
                <Route path="/aboutus" element={<Aboutus />} />
                <Route path="/contact" element={<Contactus />} />

            </Route>
            <Route path="/admin" element={<Adminlayout />}>
                <Route path="dashboard" element={<AdminDashboard />} />
            </Route>
            <Route path="/auth" element={<AuthLayout />}>
                <Route path="signup" element={<Signup />} />
                <Route path="login" element={<Login />} />
            </Route>
            <Route path="*" element={<PagenotFound />} />
            <Route path="/filter" element={<Filter />} />
        </Route>
    )
)
