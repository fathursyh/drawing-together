import { useRef } from "react";
import CustomModal from "../components/UI/CustomModal";

export default function AboutView() {
    const modalRef = useRef<HTMLDialogElement>(null);
    return (
        <>
            <div>about</div>
            <button onClick={() => modalRef.current?.showModal()}>open modal</button>
            <CustomModal ref={modalRef}>
                <p>ini custom coy</p>
            </CustomModal>
        </>
    );
}
