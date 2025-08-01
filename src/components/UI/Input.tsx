import type { DetailedHTMLProps, InputHTMLAttributes, PropsWithChildren } from "react";

type InputProps = {
    inputId: string,
    label?: string,
};
type Props = InputProps & PropsWithChildren<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>>

export default function Input({ inputId, label, ...Attr }: Props) {
    return (
        <div className="mb-3">
            <label htmlFor={inputId} className="form-label">{label}</label>
            <input type="text" className="form-control" id={inputId} {...Attr} />
        </div>
    )
}