
import { LuEye } from "react-icons/lu";
import { Table } from 'antd';
import React, { useState } from 'react';
import "./supplierInformationDetails.css"

// NO NEED



const SupplierInformationDetails = () => {


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
                <LuEye />
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




                <div className='custom-table-title px-6'>Deactive Suppliers</div>

                {/* Table PART */}

                <div className='mt-7 px-6 list-text'>
                    Deactive Supplier  List
                </div>



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

export default SupplierInformationDetails;



