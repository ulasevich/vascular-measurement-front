import React, { FC } from "react"

interface IFormPaper {
    children: React.ReactNode;
}

const FormPaper: FC<IFormPaper> = (props) => {
    return (
        <div className="app-form-paper">
            <div className="app-form-paper__content">
                {props.children}
            </div>
        </div>
    )
}

export default FormPaper