import React, { useState } from 'react';
import Modal from 'react-modal';

const TestReactModal = () => {

    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };
    return (
        <div>
            <div>
                <button onClick={openModal}>Open Modal</button>
                <Modal className="lg:w-[20%] border-2 mx-auto mt-[100px]"
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    contentLabel="Example Modal"
                >
                    <div>
                        <div className='container'>

                            <div>
                                <div className='flex'>
                                    <div className='lg:w-[48%]'>Name</div>
                                    <div className='lg:w-[5%]'>-</div>
                                    <div className='lg:w-[47%]'>MD AZIZUL ISL ssdscs sdsdc dsd </div>
                                </div>
                            </div>
                            <h2>Modal Title</h2>
                            <p>Modal Content</p>
                            <button onClick={closeModal}>Close Modal</button>
                        </div>
                    </div>
                </Modal>
            </div>

        </div>
    );
};

export default TestReactModal;