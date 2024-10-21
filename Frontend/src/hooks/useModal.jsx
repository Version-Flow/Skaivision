// useModal.js
import { useEffect, useRef } from 'react';


const useModal = (shouldShow = false) => {
    const modalRef = useRef(null);

    useEffect(() => {
        const modalElement = modalRef.current;
        if (modalElement) {
            const modal = new bootstrap.Modal(modalElement);

            if (shouldShow) {
                modal.show();
            }

            const closeModalButton = modalElement.querySelector('.modal-close');
            if (closeModalButton) {
                closeModalButton.addEventListener('click', () => modal.hide());
            }

            const handleKeydown = (event) => {
                if (event.key === 'Enter') {
                    modal.hide();
                }
            };
            modalElement.addEventListener('keydown', handleKeydown);

            return () => {
                closeModalButton?.removeEventListener('click', () => modal.hide());
                modalElement.removeEventListener('keydown', handleKeydown);
            };
        }
    }, [shouldShow]);

    const showModal = () => {
        const modal = new bootstrap.Modal(modalRef.current);
        modal.show();
    };

    return { modalRef, showModal };
};

export default useModal;










// const modalRef = useRef(null);

//     useEffect(() => {
//         const modalElement = modalRef.current;
//         if (modalElement) {
//             const modal = new bootstrap.Modal(modalElement);
//             modal.show();

//             // Handle modal close on button click
//             const closeModalButton = document.querySelector('.modal-close');
//             if (closeModalButton) {
//                 closeModalButton.addEventListener('click', () => {
//                     modal.hide();
//                 });
//             }

//             // Handle modal close on Enter key press
//             modalElement.addEventListener('keydown', (event) => {
//                 if (event.key === 'Enter') {
//                     modal.hide();
//                 }
//             });
//         }
//     }, [modalRef]);