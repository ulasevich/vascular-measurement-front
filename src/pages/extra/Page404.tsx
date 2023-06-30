import React from "react";
import PageWrapper from "@components/page/PageWrapper";

const Page404 = () => {
    return (
        <PageWrapper title="Страница не найдена">
            <div style={{color: 'red'}}>
                <h1>Страница не найдена</h1>
                <p>Страница не найдена</p>
            </div>
        </PageWrapper>
    )
}

export default Page404