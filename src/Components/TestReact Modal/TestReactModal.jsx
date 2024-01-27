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
                <Modal className="w-[90%] lg:w-[35%] md:w-[60%] border-2 mx-auto mt-[100px]"
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    contentLabel="Example Modal"
                >
                    <div>
                        <div className='container text-[14px]'>

                            <div>
                                <div className='flex'>
                                    <div className=' w-[40%] md:w-[40%] lg:w-[35%]  pl-3'>Name</div>
                                    <div className=' w-[7%] md:w-[13%] lg:w-[8%]  '>-</div>
                                    <div className=' w-[48%] md:w-[60%] lg:w-[57%]  text-[#EB5757]'>MD AZIZUL ISLAM</div>
                                </div>
                            </div>

                            <div>
                                <div className='flex'>
                                    <div className=' w-[40%] md:w-[40%] lg:w-[35%] pl-3'>Phone no</div>
                                    <div className='w-[7%] md:w-[13%] lg:w-[8%]'>-</div>
                                    <div className=' w-[48%] md:w-[60%] lg:w-[57%]'>Local</div>
                                </div>
                            </div>

                            <div>
                                <div className='flex'>
                                    <div className=' w-[40%] md:w-[40%] lg:w-[35%] pl-3'>Address</div>
                                    <div className='w-[7%] md:w-[13%] lg:w-[8%]'>-</div>
                                    <div className=' w-[48%] md:w-[60%] lg:w-[57%]'>Moghbazar,Dhaka</div>
                                </div>
                            </div>

                            <div>
                                <div className='flex'>
                                    <div className=' w-[40%] md:w-[40%] lg:w-[35%] pl-3'>Email</div>
                                    <div className=' w-[7%] md:w-[13%] lg:w-[8%]'>-</div>
                                    <div className='w-[48%] md:w-[60%] lg:w-[57%]'>   azizulislam@gmail.com</div>
                                </div>
                            </div>

                            <div>
                                <div className='flex'>
                                    <div className=' w-[40%] md:w-[40%] lg:w-[35%] pl-3'>Contact no </div>
                                    <div className=' w-[7%] md:w-[13%] lg:w-[8%]'>-</div>
                                    <div className='w-[48%] md:w-[60%] lg:w-[57%]'>  9384493833 </div>
                                </div>
                            </div>

                            <div>
                                <div className='flex'>
                                    <div className=' w-[40%] md:w-[40%] lg:w-[35%] pl-3'>VAT/Reg no  </div>
                                    <div className='w-[7%] md:w-[13%] lg:w-[8%]'>-</div>
                                    <div className='w-[48%] md:w-[60%] lg:w-[57%] '>9384493833  </div>
                                </div>
                            </div>

                            <div>
                                <div className='flex'>
                                    <div className='w-[40%] md:w-[40%] lg:w-[35%] pl-3'>License no   </div>
                                    <div className=' w-[7%] md:w-[13%] lg:w-[8%]'>-</div>
                                    <div className='w-[48%] md:w-[60%] lg:w-[57%]'>9384493833 </div>
                                </div>
                            </div>

                            {/* <h2>Modal Title</h2>
                            <p>Modal Content</p> */}
                            <button onClick={closeModal}>Close Modal</button>
                        </div>
                    </div>
                </Modal>
            </div>

        </div>
    );
};

export default TestReactModal;