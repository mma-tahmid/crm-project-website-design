
import { Table } from 'antd';
import React, { useState } from 'react';
import "./billSubmission.css"

const BillSubmission = () => {

    const [dataSources, setDataSource] = useState([
        {
            ticketId: 204250,
            date: "10 - 11 - 2023",
            vendorName: "MD. Azizul Haque",
            shortServiceDescription: "AC servicing",
            deliveryDate: "10-11-2023",
            address: "Dhaka",
            billedAmount: "value",
            approvedAmount: "value",
            remarks: "value"

        },
        {
            ticketId: 204250,
            date: "10 - 11 - 2023",
            vendorName: "MD. Azizul Haque",
            shortServiceDescription: "AC servicing",
            deliveryDate: "10-11-2023",
            address: "Dhaka",
            billedAmount: "value",
            approvedAmount: "value",
            remarks: "value"

        },

        {
            ticketId: 204250,
            date: "10 - 11 - 2023",
            vendorName: "MD. Azizul Haque",
            shortServiceDescription: "AC servicing",
            deliveryDate: "10-11-2023",
            address: "Dhaka",
            billedAmount: "value",
            approvedAmount: "value",
            remarks: "value"

        },

        {
            ticketId: 204250,
            date: "10 - 11 - 2023",
            vendorName: "MD. Azizul Haque",
            shortServiceDescription: "AC servicing",
            deliveryDate: "10-11-2023",
            address: "Dhaka",
            billedAmount: "value",
            approvedAmount: "value",
            remarks: "value"

        },

    ])

    const columnss = [
        {
            key: "1",
            title: "TICKET ID",
            dataIndex: "ticketId"
        },

        {
            key: "2",
            title: "DATE",
            dataIndex: "date"
        },

        {
            key: "3",
            title: "VENDOR NAME",
            dataIndex: "vendorName"
        },

        {
            key: "4",
            title: "SHORT SERVICE DESCRIPTION",
            dataIndex: "shortServiceDescription"
        },

        {
            key: "5",
            title: "Delivery Date",
            dataIndex: "deliveryDate"
        },

        {
            key: "6",
            title: "BILLED AMOUNT",
            dataIndex: "billedAmount"
        },

        {
            key: "7",
            title: "APPROVED AMOUNT",
            dataIndex: "approvedAmount"
        },

        {
            key: "8",
            title: "Remarks",
            dataIndex: "remarks"
        },

    ]


    return (


        <div className='container mx-auto custom-border'>

            <div className='table-title'> Bill Submission </div>
            <Table
                columns={columnss}
                dataSource={dataSources}
            >
            </Table>

            <button className='custom-btn text-white'>Submit</button>



        </div>
    );
};

export default BillSubmission;