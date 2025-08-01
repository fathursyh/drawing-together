import { Icon } from "@iconify/react";
import { type PropsWithChildren, type RefObject } from "react";
import { createPortal } from "react-dom";

type ModalProps = {
    ref: RefObject<HTMLDialogElement | null>;
};
export default function CustomModal({ ref, children }: ModalProps & PropsWithChildren) {
    return createPortal(
        <>
            <dialog ref={ref} className="my-modal shadow-sm position-relative" style={{ minHeight: "10rem" }} onClick={() => ref.current!.close()}>
                <form method="dialog" className="position-absolute p-0" style={{ top: "0.8rem", right: "1rem" }}>
                    <div role="button" className="border-0 d-flex justify-content-center align-items-center" style={{ borderRadius: '100%', height: 32, width: 32, padding: 0}} autoFocus={false}>
                        <Icon icon={"mdi:close"} fontSize={24} className="text-danger" />
                    </div>
                </form>
                <div className="p-4 " style={{ minHeight: "10rem" }} onClick={(e) => e.stopPropagation()}>
                    {children}
                </div>
            </dialog>
        </>,
        document.body,
        "modal"
    );
}
