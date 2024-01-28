
import { LuEye } from "react-icons/lu";
import { Table } from 'antd';
import React, { useState } from 'react';
import { IoSearchSharp } from "react-icons/io5";
import Modal from 'react-modal';
import { Link } from "react-router-dom";
import "./pendingSuppliersDetailsPopup.css"


const PendingSuppliersDetailsPopup = () => {

    // Modal

    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };


    const [dataSources, setDataSource] = useState([
        {
            key: "1",
            name: "COMPTEX BANGLASH LTD",
            email: "text@gmail.com",
            phone: "01700023456",
            itemType: "AC",
            vendorType: "Local Vendor",
            requestedBy: "Mr. Rashedul",
            approvedBy: "Mr. Rashedul"
        },

        {
            key: "2",
            name: "Chishtia Sizing Mills",
            email: "chishtia@gmail.com",
            phone: "01820000003",
            itemType: "TV",
            vendorType: "Local Vendor",
            requestedBy: "Mr. RASEL",
            approvedBy: "Mr. Rasel"
        },

        {
            key: "3",
            name: "CHAITY COMPOSITE LTD",
            email: "chaitty@gmail.com",
            phone: "01600023456",
            itemType: "-AC",
            vendorType: "Local Vendor",
            requestedBy: "Mr. Rashedul",
            approvedBy: "Mr. Rashedul"
        },


    ])

    const columnss = [
        {
            key: "1",  // data index a je value dibo oi same value key hisabe hobe
            title: "Name",
            dataIndex: "name",
        },

        {
            key: "2",
            title: "Email",
            dataIndex: "email",
            responsive: ['md']
            // medium device thake start kore large device a ai content gulo show korbe na.medium device ar niche show kore na. 
        },

        {
            key: "3",
            title: "Phone",
            dataIndex: "phone",
            responsive: ['md'],
        },

        {
            key: "4",
            title: "item type",
            dataIndex: "itemType",
            responsive: ['md'],
        },

        {
            key: "5",
            title: "Vendor type",
            dataIndex: "vendorType",
            responsive: ['md'],
        },

        {
            key: "6",
            title: "Requested by",
            dataIndex: "requestedBy",
            responsive: ['lg'],
            // Requested by filed ta Medium Device a show korbe na
        },

        {
            key: "7",
            title: "Approved by",
            dataIndex: "approvedBy",
            responsive: ['lg'],
        },

        // Custom Row & Clumns 
        {
            key: "8",
            title: "Action",
            // dataIndex: "icon",
            render: (text, record) => (
                <Link> <LuEye onClick={openModal} /> </Link>
            ),
            responsive: ['md'],
        },

    ]

    const expandedRowRender = (record) => (
        // Design In THIS PART



        <div className="w-[100%] grid grid-cols-1 sm:grid-cols-2">

            <div className="flex">
                <div className="w-[50%]">Email:</div>
                <div className="w-[48%]">{record.email}</div>
                <div className=" w-[2%] sm:hidden"><LuEye /></div>
            </div>

            <div className="flex">
                <div className="w-[50%]">Phone:</div>
                <div className="w-[50%]">{record.phone}</div>
            </div>

            <div className="flex">
                <div className="w-[50%]">Item type</div>
                <div className="w-[50%]">{record.itemType}</div>
            </div>
            <div className="flex">
                <div className="w-[50%]"> Vendor type:</div>
                <div className="w-[50%]">{record.vendorType}</div>
            </div>

            <div className="flex">
                <div className="w-[50%]"> Requested by:</div>
                <div className="w-[50%]">{record.requestedBy}</div>
            </div>

            <div className="flex">
                <div className="w-[50%]"> Approved by:</div>
                <div className="w-[50%]">{record.approvedBy}</div>
            </div>

        </div>




    );


    return (
        <>
            <div className='container mx-auto customs-border'>






                <div className='custom-table-title px-6'>Pending Suppliers Pop Up </div>


                {/* Table PART */}

                <div className=' flex justify-between mt-7 px-6 list-text'>
                    <div> Pending Supplier  List </div>

                    <div className="relative">
                        <input className=" pl-3 pr-10 w-[177px]  h-[34px] rounded-[5px] bg-[#FFF] border-[1px] border-[#D9D9D9]  focus:outline-none focus:border-[#E74A3B] border-solid" placeholder="Search here" type="search" />
                        <div className="absolute top-[2px] left-[150px]  ">
                            <IoSearchSharp className="text-[#FFF]  bg-[#EB5757] rounded-[3px] w-[25px] h-[30px] " />
                        </div>
                    </div>

                </div>


                {/* MODAL CODE */}
                <Modal className=" bg-[#FFF] w-[90%] lg:w-[35%] md:w-[60%] border-2 mx-auto mt-[100px] transition-duration: 0.3s shadow-lg"

                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    contentLabel="Example Modal"
                >
                    <div>

                        <div className="bg-[#ED6C6C] text-[#FFF] rounded">
                            <div className="text-center"> COMPLEX Bangladesh LTD</div>
                        </div>

                        <div className='container text-[14px] pt-2'>

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


                            <div className="flex justify-center my-2">
                                <button onClick={closeModal} className="bg-red-400 rounded-full text-[#FFF] p-1 px-3">Close</button>
                            </div>

                        </div>
                    </div>
                </Modal>


                <div className='mt-4'>
                    <Table
                        columns={columnss}
                        dataSource={dataSources}

                        pagination={{ pageSize: 2 }}

                        expandable={{
                            expandedRowRender,
                            defaultExpandedRowKeys: ['0'],
                        }}
                    // pagination={false}
                    >
                    </Table >


                </div >





            </div >

        </>
    );
};

export default PendingSuppliersDetailsPopup;



