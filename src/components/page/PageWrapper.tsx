import React from "react";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { APP_NAME } from "@constants/appConstants";

type PageWrapperProps = {
    title: string;
    children: React.ReactNode;
}

const PageWrapper = (props: PageWrapperProps): React.ReactElement => {
    return (
        <HelmetProvider>
            <Helmet>
                <title>{props.title} | {APP_NAME}</title>
            </Helmet>
            {props.children}
        </HelmetProvider>
    )
}

export default PageWrapper