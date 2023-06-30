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
import PageAdministration from "@pages/admin/PageAdministration";
import PageSettings from "@pages/admin/PageSettings";
import Page404 from "@pages/extra/Page404";


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route element={<GuestLayout />}>
                <Route path="/" element={<Navigate to="sign-in" />} />
                <Route path="sign-in" element={<PageSignIn />} />
                <Route path="forgot-password" element={<PageForgotPassword />} /> 
                <Route path="*" element={<Page404 />} />
            </Route>
            <Route path="admin" element={<AdminLayout />}>
                <Route path="/admin" element={<Navigate to="patients" />} />
                <Route path="patients" element={<PagePatients />} />
                <Route path="administration" element={<PageAdministration />} />
                <Route path="settings" element={<PageSettings />} />
                <Route path="*" element={<Page404 />} />
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