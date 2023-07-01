import React from "react";
import { Helmet, HelmetProvider } from 'react-helmet-async';

type PageWrapperProps = {
    title: string;
    children: React.ReactNode;
}

const PageWrapper = (props: PageWrapperProps): React.ReactElement => {
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