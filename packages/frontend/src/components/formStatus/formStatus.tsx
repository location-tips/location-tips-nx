import { ReactNode } from "react";
import { useFormStatus } from "react-dom";

type TFormStatusProps = {
    loadingText?: ReactNode;
}

const FormStatus = ({ loadingText = "Loading ..." }: TFormStatusProps) => {
    const { pending } = useFormStatus();

    return <>
        {pending  && <p>{loadingText}</p>}
    </>
}

export default FormStatus;