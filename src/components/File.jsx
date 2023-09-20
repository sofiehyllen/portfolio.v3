import { useState } from "react";
import Modal from "./Modal";

export default function File(props) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const combinedFileclass = `files ${props.className}`;

    return (
        <div className={combinedFileclass}>
            <img onClick={openModal} className="img-max pointer-cursor" src={props.src} alt={props.alt} />
            <Modal isOpen={isModalOpen} onClose={closeModal} content={props.modalContent}>
            </Modal>
            <h3>{props.text}</h3>
        </div>
    )
}