import React from "react";
import { NavLink } from "react-router-dom";
import PageWrapper from "@components/page/PageWrapper";

const Page404 = () => {
    return (
        <PageWrapper title="Страница не найдена">
            <div style={{color: 'red', textAlign: 'center'}}>
                <h1>404</h1>
                <h2>Страница не найдена</h2>
                <p><NavLink to="/">На главную</NavLink></p>
            </div>
        </PageWrapper>
    )
}

export default Page404