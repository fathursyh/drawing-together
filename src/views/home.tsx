import { useCallback, useContext, useRef } from "react";
import Hero from "../components/home/Hero";
import CustomModal from "../components/UI/CustomModal";
import RoomForm from "../components/forms/RoomForm";
import { AppContext } from "../stores/appContext";
import type { AppContextType } from "../contexts/AppContext";

export default function Home() {
    const {room} = useContext(AppContext) as AppContextType
    const modalRef = useRef<HTMLDialogElement>(null);
    const openModal = useCallback(() => {
        modalRef.current?.showModal();
    }, []);
    return (
        <>
            <CustomModal ref={modalRef}>
                <RoomForm />
            </CustomModal>
            {room.name}
            <Hero drawHandler={openModal} />
        </>
    )
}