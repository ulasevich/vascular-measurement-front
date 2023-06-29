import React from "react";
import { 
    Route,
    Navigate,
    RouterProvider, 
    createBrowserRouter, 
    createRoutesFromElements
} from "react-router-dom";
import GuestLayout from "@layouts/GuestLayout";
import AdminLayout from "@layouts/AdminLayout";
import PageSignIn from "@pages/guest/PageSignIn";
import PageForgotPassword from "@pages/guest/PageForgotPassword";
import PagePatients from "@pages/admin/PagePatients";
import PageSettings from "@pages/admin/PageSettings";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route element={<GuestLayout />}>
                <Route path="/" element={<Navigate to="signin" />} />
                <Route path="signin" element={<PageSignIn />} />
                <Route path="forgot-password" element={<PageForgotPassword />} /> 
            </Route>
            <Route path="admin" element={<AdminLayout />}>
                <Route path="/admin" element={<Navigate to="patients" />} />
                <Route path="patients" element={<PagePatients />} />
                <Route path="settings" element={<PageSettings />} />
            </Route>
        </Route>
    )
);

const AppRoutes = () => {
    return (
        <RouterProvider router={router} />
    )
}

export default AppRoutes