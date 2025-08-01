import { useCallback, useRef } from "react";
import Hero from "../components/home/Hero";
import CustomModal from "../components/UI/CustomModal";
import RoomForm from "../components/forms/RoomForm";

export default function Home() {
    const modalRef = useRef<HTMLDialogElement>(null);
    const openModal = useCallback(() => {
        modalRef.current?.showModal();
    }, []);
    return (
        <>
            <CustomModal ref={modalRef}>
                <RoomForm />
            </CustomModal>
            <Hero drawHandler={openModal} />
        </>
    )
}