import React from "react"

type FormPaperProps = {
    children: React.ReactNode;
}

const FormPaper = (props: FormPaperProps): React.ReactElement => {
    return (
        <div className="app-form-paper">
            <div className="app-form-paper__content">
                {props.children}
            </div>
        </div>
    )
}

export default FormPaper