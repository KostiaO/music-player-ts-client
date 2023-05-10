import React from "react"

interface Props {
    submitFn: () => void,
    children: React.ReactNode
}

export const FormGroup: React.FC<Props> = ({ submitFn, children }) => {
    return (
        <form
            onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
                e.preventDefault();
                submitFn();
            }}
        >
            {children}
        </form>
    )
}