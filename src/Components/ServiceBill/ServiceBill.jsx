import React from 'react';
import "./serviceBill.css"
import { PiRectangleThin } from "react-icons/pi";


const ServiceBill = () => {
    return (
        <>

            {/* 1st Row */}


            <div className="lg:flex container lg:mx-auto px-5 mt-5">

                {/* First Column  */}

                <div className='first-col lg:w-2/12 sm:w-[100%]'>
                    <h2>Ticket ID </h2>
                    <h5> 234252</h5>
                </div>


                {/* 2nd Column  */}

                <div className='second-col lg:w-10/12 sm:w-[100%] px-2 py-2 '>
                    <div className='flex'>
                        <span> <PiRectangleThin /> </span>
                        <h5 className='ms-2'>    Item Details </h5>
                    </div>




                    <div className='grid lg:grid-cols-3 sm:grid-cols-1 gap-x-16 pt-4 px-4 mt-2 customer-information'>

                        <div>
                            <div className="flex">
                                <div className="w-[48%]">
                                    Customer name
                                </div>
                                <div className="w-[2%]">
                                    -
                                </div>
                                <div className="w-[50%] text-end">
                                    Belal Ahmed
                                </div>
                            </div>

                            <div className="flex">
                                <div className="w-[48%]">
                                    Customer Address
                                </div>
                                <div className="w-[2%]">
                                    -
                                </div>
                                <div className="w-[50%] text-end">
                                    Tejgaun,Dhaka
                                </div>
                            </div>

                            <div className="flex">
                                <div className="w-[48%]">
                                    Service Address

                                </div>
                                <div className="w-[2%]">
                                    -
                                </div>
                                <div className="w-[50%] text-end">
                                    Tejgaun,Dhaka

                                </div>
                            </div>

                            <div className="flex">
                                <div className="w-[48%]">
                                    Service Category
                                </div>
                                <div className="w-[2%]">
                                    -
                                </div>
                                <div className="w-[50%] text-end">
                                    SCBCC
                                </div>
                            </div>
                        </div>


                        <div>
                            <div className="flex">
                                <div className="w-[48%] text-start">
                                    Invoice
                                </div>
                                <div className="w-[2%]">
                                    -
                                </div>
                                <div className="w-[50%] text-end">
                                    01314
                                </div>
                            </div>

                            <div className="flex">
                                <div className="w-[48%] text-start">
                                    Dealer Name
                                </div>
                                <div className="w-[2%]">
                                    -
                                </div>
                                <div className="w-[50%] text-end">
                                    Mr Rahim
                                </div>

                            </div>

                            <div className="flex">
                                <div className="w-[48%] text-start">
                                    SCBCC Brand
                                </div>
                                <div className="w-[2%]">
                                    -
                                </div>
                                <div className="w-[50%] text-end">
                                    Esquire
                                </div>

                            </div>

                            <div className="flex">
                                <div className="w-[48%] text-start">
                                    Company
                                </div>
                                <div className="w-[2%]">
                                    -
                                </div>
                                <div className="w-[50%] text-end">
                                    Esquire
                                </div>

                            </div>

                        </div>



                        <div>
                            <div className="flex">
                                <div className="w-[48%] text-start">
                                    Model Name
                                </div>
                                <div className="w-[2%]">
                                    -
                                </div>
                                <div className="w-[50%] text-end">
                                    Esquire
                                </div>

                            </div>

                            <div className="flex">
                                <div className="w-[48%] text-start">
                                    Showroom
                                </div>
                                <div className="w-[2%]">
                                    -
                                </div>
                                <div className="w-[50%] text-end">
                                    Dhaka
                                </div>

                            </div>

                        </div>


                    </div>

                </div>
            </div >


            {/*####### 2nd Row ######## */}


            <div className="lg:flex container lg: mx-auto px-5 mt-5">

                {/* First Column  */}

                <div className='first-col lg:w-2/12 sm:w-[100%]'>
                    <h2>Ticket ID </h2>
                    <h5> 234252</h5>

                </div>


                {/* 2nd Column  */}

                <div className='second-col lg:w-10/12 sm:w-[100%] px-2 py-2 '>
                    <div className='flex'>
                        <span> <PiRectangleThin /> </span>
                        <h5 className='ms-2'>    Item Details </h5>
                    </div>




                    <div className='grid lg:grid-cols-3 gap-x-16 pt-4 px-4 mt-2 customer-information'>

                        <div>
                            <div className="flex">
                                <div className="w-[48%]">
                                    Customer name
                                </div>
                                <div className="w-[2%]">
                                    -
                                </div>
                                <div className="w-[50%] text-end">
                                    Belal Ahmed
                                </div>
                            </div>

                            <div className="flex">
                                <div className="w-[48%]">
                                    Customer Address
                                </div>
                                <div className="w-[2%]">
                                    -
                                </div>
                                <div className="w-[50%] text-end">
                                    Tejgaun,Dhaka
                                </div>
                            </div>

                            <div className="flex">
                                <div className="w-[48%]">
                                    Service Address

                                </div>
                                <div className="w-[2%]">
                                    -
                                </div>
                                <div className="w-[50%] text-end">
                                    Tejgaun,Dhaka

                                </div>
                            </div>

                            <div className="flex">
                                <div className="w-[48%]">
                                    Service Category
                                </div>
                                <div className="w-[2%]">
                                    -
                                </div>
                                <div className="w-[50%] text-end">
                                    SCBCC
                                </div>
                            </div>
                        </div>


                        <div>
                            <div className="flex">
                                <div className="w-[48%] text-start">
                                    Invoice
                                </div>
                                <div className="w-[2%]">
                                    -
                                </div>
                                <div className="w-[50%] text-end">
                                    01314
                                </div>
                            </div>

                            <div className="flex">
                                <div className="w-[48%] text-start">
                                    Dealer Name
                                </div>
                                <div className="w-[2%]">
                                    -
                                </div>
                                <div className="w-[50%] text-end">
                                    Mr Rahim
                                </div>

                            </div>

                            <div className="flex">
                                <div className="w-[48%] text-start">
                                    SCBCC Brand
                                </div>
                                <div className="w-[2%]">
                                    -
                                </div>
                                <div className="w-[50%] text-end">
                                    Esquire
                                </div>

                            </div>

                            <div className="flex">
                                <div className="w-[48%] text-start">
                                    Company
                                </div>
                                <div className="w-[2%]">
                                    -
                                </div>
                                <div className="w-[50%] text-end">
                                    Esquire
                                </div>

                            </div>

                        </div>



                        <div>
                            <div className="flex">
                                <div className="w-[48%] text-start">
                                    Model Name
                                </div>
                                <div className="w-[2%]">
                                    -
                                </div>
                                <div className="w-[50%] text-end">
                                    Esquire
                                </div>

                            </div>

                            <div className="flex">
                                <div className="w-[48%] text-start">
                                    Showroom
                                </div>
                                <div className="w-[2%]">
                                    -
                                </div>
                                <div className="w-[50%] text-end">
                                    Dhaka
                                </div>

                            </div>

                        </div>



                    </div>

                </div>
            </div >


            {/* ###### 3rd ROW ###### */}

            <div className="lg:flex container lg:mx-auto px-5 mt-5">

                {/* First Column  */}

                <div className='first-col lg:w-2/12 sm:w-[100%]'>
                    <h2>Ticket ID </h2>
                    <h5> 234252</h5>

                </div>


                {/* 2nd Column  */}

                <div className='second-col lg:w-10/12 sm:w-[100%] px-2 py-2 '>
                    <div className='flex'>
                        <span> <PiRectangleThin /> </span>
                        <h5 className='ms-2'>    Item Details </h5>
                    </div>




                    <div className='grid lg:grid-cols-3 gap-x-16 pt-4 px-4 mt-2 customer-information'>

                        <div>
                            <div className="flex">
                                <div className="w-[48%]">
                                    Customer name
                                </div>
                                <div className="w-[2%]">
                                    -
                                </div>
                                <div className="w-[50%] text-end">
                                    Belal Ahmed
                                </div>
                            </div>

                            <div className="flex">
                                <div className="w-[48%]">
                                    Customer Address
                                </div>
                                <div className="w-[2%]">
                                    -
                                </div>
                                <div className="w-[50%] text-end">
                                    Tejgaun,Dhaka
                                </div>
                            </div>

                            <div className="flex">
                                <div className="w-[48%]">
                                    Service Address

                                </div>
                                <div className="w-[2%]">
                                    -
                                </div>
                                <div className="w-[50%] text-end">
                                    Tejgaun,Dhaka

                                </div>
                            </div>

                            <div className="flex">
                                <div className="w-[48%]">
                                    Service Category
                                </div>
                                <div className="w-[2%]">
                                    -
                                </div>
                                <div className="w-[50%] text-end">
                                    SCBCC
                                </div>
                            </div>
                        </div>


                        <div>
                            <div className="flex">
                                <div className="w-[48%] text-start">
                                    Invoice
                                </div>
                                <div className="w-[2%]">
                                    -
                                </div>
                                <div className="w-[50%] text-end">
                                    01314
                                </div>
                            </div>

                            <div className="flex">
                                <div className="w-[48%] text-start">
                                    Dealer Name
                                </div>
                                <div className="w-[2%]">
                                    -
                                </div>
                                <div className="w-[50%] text-end">
                                    Mr Rahim
                                </div>

                            </div>

                            <div className="flex">
                                <div className="w-[48%] text-start">
                                    SCBCC Brand
                                </div>
                                <div className="w-[2%]">
                                    -
                                </div>
                                <div className="w-[50%] text-end">
                                    Esquire
                                </div>

                            </div>

                            <div className="flex">
                                <div className="w-[48%] text-start">
                                    Company
                                </div>
                                <div className="w-[2%]">
                                    -
                                </div>
                                <div className="w-[50%] text-end">
                                    Esquire
                                </div>

                            </div>

                        </div>



                        <div>
                            <div className="flex">
                                <div className="w-[48%] text-start">
                                    Model Name
                                </div>
                                <div className="w-[2%]">
                                    -
                                </div>
                                <div className="w-[50%] text-end">
                                    Esquire
                                </div>

                            </div>

                            <div className="flex">
                                <div className="w-[48%] text-start">
                                    Showroom
                                </div>
                                <div className="w-[2%]">
                                    -
                                </div>
                                <div className="w-[50%] text-end">
                                    Dhaka
                                </div>

                            </div>

                        </div>



                    </div>

                </div>
            </div >



        </>
    );
};

export default ServiceBill;