
import { LuEye } from "react-icons/lu";
import { Table } from 'antd';
import React, { useState } from 'react';
import "./supplierInformationDetails.css"




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
            approvedBy: "Mr. Rashedul",
            icon: <LuEye />
        },

        {
            key: "2",
            name: "COMPTEX BANGLASH LTD",
            email: "text@gmail.com",
            phone: "01700023456",
            itemType: "AC",
            vendorType: "Local Vendor",
            requestedBy: "Mr. Rashedul",
            approvedBy: "Mr. Rashedul",
            icon: <LuEye />
        },

        {
            key: "3",
            name: "COMPTEX BANGLASH LTD",
            email: "text@gmail.com",
            phone: "01700023456",
            itemType: "AC",
            vendorType: "Local Vendor",
            requestedBy: "Mr. Rashedul",
            approvedBy: "Mr. Rashedul",
            icon: <LuEye />
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
            responsive: ['md'],
        },

        {
            key: "7",
            title: "Approved by",
            dataIndex: "approvedBy",
            responsive: ['md'],
        },

        {
            key: "8",
            title: "",
            dataIndex: "icon",
            responsive: ['md'],
        },

    ]

    const expandedRowRender = (record) => (
        // Design In THIS PART
        <p>{record.name} details</p>,
        <p>Email: {record.email}</p>
    );


    return (
        <>
            <div className='container mx-auto custom-border'>




                <div className='custom-table-title px-6'>Deactive Suppliers</div>

                {/* Table PART */}

                <div className='mt-7 px-6 list-text'>
                    Deactive Supplier  List
                </div>



                <div className='lg:mt-4'>
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
                    </Table>
                </div>





            </div>

        </>
    );
};

export default SupplierInformationDetails;



