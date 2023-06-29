import React, { FC } from "react";
import { Helmet, HelmetProvider } from 'react-helmet-async';

interface IPageWrapper {
    title: string;
    children: React.ReactNode;
}

const PageWrapper: FC<IPageWrapper> = (props) => {
    return (
        <HelmetProvider>
            <Helmet>
                <title>{props.title} | Система «Измерение сосудов»</title>
            </Helmet>
            {props.children}
        </HelmetProvider>
    )
}

export default PageWrapper