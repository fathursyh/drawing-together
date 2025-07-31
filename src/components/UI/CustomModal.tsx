// /* eslint-disable @typescript-eslint/no-explicit-any */
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
                <form method="dialog" className="position-absolute" style={{ top: "0.8rem", right: "1rem" }}>
                    <button type="submit" className="border-0" style={{ borderRadius: '100%', padding: 1, height: 32, width: 32, }}>
                        <Icon icon={"mdi:close"} fontSize={24} className="text-danger" />
                    </button>
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
