import React from 'react';
import "./vUpdateBillSubmission.css"


const VUpdateBillSubmission = () => {
    return (
        <>
            {/* md:hidden lg:flex */}
            <div className="hidden lg:flex">

                <div className='container mx-auto border border-red-300 '>

                    <div className='heading bg-[#FDECEC] py-[18px] px-[21px]'>BILL SUBMISSION</div>


                    <div className='grid lg:grid-cols-8 md:grid-cols-4 text-center mt-1'>

                        <div className=''>
                            <div className='table-heading py-3 bg-[#F7F9FD]'>Ticket ID</div>
                            <div className="mt-2 bg-white"> 204250 </div>
                        </div>

                        <div>
                            <div className='table-heading py-3 bg-[#F7F9FD]'> DATE</div>
                            <div className=' mt-2 bg-white'> 10-11-2023 </div>
                        </div>

                        <div>
                            <div className='table-heading py-3 bg-[#F7F9FD]'>VENDOR NAME</div>
                            <div className='mt-2'>MD Azizul hauqe  </div>
                        </div>

                        <div>
                            <div className='table-heading py-3 bg-[#F7F9FD]'>SHORT SERVICE DESCRIPTION</div>
                            <div className='mt-2'>  AC Servicing</div>
                        </div>

                        <div>
                            <div className='table-heading py-3 bg-[#F7F9FD]'>DELIVERY DATE</div>
                            <div className='mt-2'>  10-11-2023</div>
                        </div>

                        <div >
                            <div className='table-heading py-3 bg-[#F7F9FD]'>BILLED AMOUNT</div>

                            <div className='mt-2  border-2 bg-[#F7F9FD]'>
                                <label className='' htmlFor="cheese"> Bill Submit </label>
                                <input placeholder="Enter the value" className="border-1" type="text" name="dsdf" id="" />

                            </div>

                        </div>

                        <div>
                            <div className='table-heading py-3 bg-[#F7F9FD]'>APPROVED AMOUNT</div>

                            <div className='mt-2  border-2 bg-[#F7F9FD]'>
                                <label className='' htmlFor="cheese"> Pay/Allownce</label>
                                <input placeholder="Enter the value" className="border-1" type="text" name="dsdf" id="" />

                            </div>
                        </div>

                        <div>
                            <div className='table-heading py-3 bg-[#F7F9FD]'>REMARKS</div>

                            <div className='mt-2  border-2 bg-[#F7F9FD]'>
                                <label className='' htmlFor="cheese">REMARKS</label>
                                <input placeholder="Enter the value" className="border-1" type="text" name="dsdf" id="" />

                            </div>
                        </div>

                    </div>



                    <div className='grid lg:grid-cols-8 text-center mt-1'>

                        <div>

                            <div className="mt-2 bg-white"> 204250 </div>
                        </div>

                        <div>

                            <div className=' mt-2 bg-white'> 10-11-2023 </div>
                        </div>

                        <div>
                            <div className='mt-2'>MD Azizul hauqe  </div>
                        </div>

                        <div>

                            <div className='mt-2'>  AC Servicing</div>
                        </div>

                        <div>

                            <div className='mt-2'>  10-11-2023</div>
                        </div>

                        <div >


                            <div className='mt-2  border-2 bg-[#F7F9FD]'>
                                <label className='' htmlFor="cheese"> Bill Submit </label>
                                <input placeholder="Enter the value" className="border-1" type="text" name="dsdf" id="" />

                            </div>

                        </div>

                        <div>


                            <div className='mt-2  border-2 bg-[#F7F9FD]'>
                                <label className='' htmlFor="cheese"> Pay/Allownce</label>
                                <input placeholder="Enter the value" className="border-1" type="text" name="dsdf" id="" />

                            </div>
                        </div>

                        <div>

                            <div className='mt-2  border-2 bg-[#F7F9FD]'>
                                <label className='' htmlFor="cheese">REMARKS</label>
                                <input placeholder="Enter the value" className="border-1" type="text" name="dsdf" id="" />

                            </div>
                        </div>

                    </div>

                    <div className='flex justify-center'>
                        <button className='custom-btn text-white'>Submit</button>
                    </div>


                </div >

            </div>


            {/* for Medium Device */}
            <div className="lg:hidden hidden md:flex">

                <div className='container md:mx-auto border border-red-300 '>

                    <div className='heading bg-[#FDECEC] py-[18px] px-[21px]'>BILL SUBMISSION</div>


                    <div className='grid md:grid-cols-2 md:mt-2'>

                        {/* 1st Column */}

                        <div className='leading-loose'>

                            <div>
                                <div className='md:flex'>
                                    <div className='w-2/4 table-heading '>Ticket ID</div>
                                    <div className='w-2/4 table-content-text'>204250</div>
                                </div>
                            </div>

                            <div className='pt-2'>
                                <div className='md:flex'>
                                    <div className='w-2/4 table-heading '> DATE </div>
                                    <div className='w-2/4 table-content-text '> 10-11-2023 </div>
                                </div>
                            </div>

                            <div className='pt-2'>
                                <div className='md:flex'>
                                    <div className='w-2/4 table-heading'> VENDOR NAME </div>
                                    <div className='w-2/4 table-content-text'> MD Azizul hauqe </div>
                                </div>
                            </div>

                            <div className='pt-2'>
                                <div className='md:flex'>
                                    <div className='w-2/4 table-heading'>SHORT SERVICE DESCRIPTION </div>
                                    <div className='w-2/4 table-content-text'>AC Servicing </div>
                                </div>
                            </div>

                        </div>


                        {/* 2nd Column  */}
                        <div className='leading-loose'>

                            <div>
                                <div className='md:flex'>
                                    <div className='w-2/4 table-heading'>DELIVERY DATE</div>
                                    <div className='w-2/4 table-content-text'>10-11-2023</div>
                                </div>
                            </div>

                            <div className='pt-2'>
                                <div className='md:flex'>
                                    <div className='w-2/4 table-heading'>BILLED AMOUNT</div>

                                    <div className='w-2/4 border-1 bg-[#F7F9FD] table-content-text '>

                                        <label className='' htmlFor="cheese"> Bill Submit </label>
                                        <input placeholder="Enter the value" className="border-1" type="text" name="dsdf" id="" />
                                    </div>

                                </div>
                            </div>

                            <div className='pt-2'>
                                <div className='md:flex'>
                                    <div className='w-2/4 table-heading'>APPROVED AMOUNT </div>
                                    <div className='w-2/4 border-1 bg-[#F7F9FD] table-content-text'>
                                        <label className='' htmlFor="cheese"> Pay/Allownce</label>
                                        <input placeholder="Enter the value" className="border-1" type="text" name="dsdf" id="" />
                                    </div>
                                </div>
                            </div>


                            <div className='pt-2'>
                                <div className='md:flex'>
                                    <div className='w-2/4 table-heading'>REMARKS </div>
                                    <div className='w-2/4 border-1 bg-[#F7F9FD] table-content-text'>
                                        <label className='' htmlFor="cheese"> Remarks</label>
                                        <input placeholder="Enter the value" className="border-1" type="text" name="dsdf" id="" />
                                    </div>
                                </div>
                            </div>


                        </div>

                    </div>




                    {/* ============== 2nd ROW ============ */}

                    <div className='grid md:grid-cols-2 md:mt-5'>

                        {/* 1st Column */}

                        <div className='leading-loose'>

                            <div>
                                <div className='md:flex'>
                                    <div className='w-2/4 table-heading '>Ticket ID</div>
                                    <div className='w-2/4 table-content-text'>204250</div>
                                </div>
                            </div>

                            <div className='pt-2'>
                                <div className='md:flex'>
                                    <div className='w-2/4 table-heading '> DATE </div>
                                    <div className='w-2/4 table-content-text '> 10-11-2023 </div>
                                </div>
                            </div>

                            <div className='pt-2'>
                                <div className='md:flex'>
                                    <div className='w-2/4 table-heading'> VENDOR NAME </div>
                                    <div className='w-2/4 table-content-text'> MD Azizul hauqe </div>
                                </div>
                            </div>

                            <div className='pt-2'>
                                <div className='md:flex'>
                                    <div className='w-2/4 table-heading'>SHORT SERVICE DESCRIPTION </div>
                                    <div className='w-2/4 table-content-text'>AC Servicing </div>
                                </div>
                            </div>

                        </div>


                        {/* 2nd Column  */}
                        <div className='leading-loose'>

                            <div>
                                <div className='md:flex'>
                                    <div className='w-2/4 table-heading'>DELIVERY DATE</div>
                                    <div className='w-2/4 table-content-text'>10-11-2023</div>
                                </div>
                            </div>

                            <div className='pt-2'>
                                <div className='md:flex'>
                                    <div className='w-2/4 table-heading'>BILLED AMOUNT</div>

                                    <div className='w-2/4 border-1 bg-[#F7F9FD] table-content-text '>

                                        <label className='' htmlFor="cheese"> Bill Submit </label>
                                        <input placeholder="Enter the value" className="border-1" type="text" name="dsdf" id="" />
                                    </div>

                                </div>
                            </div>

                            <div className='pt-2'>
                                <div className='md:flex'>
                                    <div className='w-2/4 table-heading'>APPROVED AMOUNT </div>
                                    <div className='w-2/4 border-1 bg-[#F7F9FD] table-content-text'>
                                        <label className='' htmlFor="cheese"> Pay/Allownce</label>
                                        <input placeholder="Enter the value" className="border-1" type="text" name="dsdf" id="" />
                                    </div>
                                </div>
                            </div>


                            <div className='pt-2'>
                                <div className='md:flex'>
                                    <div className='w-2/4 table-heading'>REMARKS </div>
                                    <div className='w-2/4 border-1 bg-[#F7F9FD] table-content-text'>
                                        <label className='' htmlFor="cheese"> Remarks</label>
                                        <input placeholder="Enter the value" className="border-1" type="text" name="dsdf" id="" />
                                    </div>
                                </div>
                            </div>


                        </div>

                    </div>







                    {/* ====== Button ===== */}
                    <div className='md: flex md: justify-center'>
                        <div>
                            <button className='custom-btn text-white'>Submit</button>
                        </div>
                    </div>
                </div >

            </div>



            {/* ======== Small Device ======= */}

            {/* No need This part  */}
            <div className="hidden">

                <div className='container mx-auto border border-red-300 '>

                    <div className='heading bg-[#FDECEC] py-[18px] px-[21px]'>BILL SUBMISSION</div>


                    <div className='grid sm:grid-cols-2 sm:mt-2'>

                        {/* 1st Column */}

                        <div className='leading-loose'>

                            <div>
                                <div className='sm:flex'>
                                    <div className='w-2/4 table-heading '>Ticket ID</div>
                                    <div className='w-2/4 table-content-text'>204250</div>
                                </div>
                            </div>

                            <div className='pt-2'>
                                <div className='sm:flex'>
                                    <div className='w-2/4 table-heading '> DATE </div>
                                    <div className='w-2/4 table-content-text '> 10-11-2023 </div>
                                </div>
                            </div>

                            <div className='pt-2'>
                                <div className='sm:flex'>
                                    <div className='w-2/4 table-heading'> VENDOR NAME </div>
                                    <div className='w-2/4 table-content-text'> MD Azizul hauqe </div>
                                </div>
                            </div>

                            <div className='pt-2'>
                                <div className='sm:flex'>
                                    <div className='w-2/4 table-heading'>SHORT SERVICE DESCRIPTION </div>
                                    <div className='w-2/4 table-content-text'>AC Servicing </div>
                                </div>
                            </div>

                        </div>


                        {/* 2nd Column  */}
                        <div className='leading-loose'>

                            <div>
                                <div className='sm:flex'>
                                    <div className='w-2/4 table-heading'>DELIVERY DATE</div>
                                    <div className='w-2/4 table-content-text'>10-11-2023</div>
                                </div>
                            </div>

                            <div className='pt-2'>
                                <div className='sm:flex'>
                                    <div className='w-2/4 table-heading'>BILLED AMOUNT</div>

                                    <div className='w-2/4 border-1 bg-[#F7F9FD] table-content-text '>

                                        <label className='' htmlFor="cheese"> Bill Submit </label>
                                        <input placeholder="Enter the value" className="border-1" type="text" name="dsdf" id="" />
                                    </div>

                                </div>
                            </div>

                            <div className='pt-2'>
                                <div className='sm:flex'>
                                    <div className='w-2/4 table-heading'>APPROVED AMOUNT </div>
                                    <div className='w-2/4 border-1 bg-[#F7F9FD] table-content-text'>
                                        <label className='' htmlFor="cheese"> Pay/Allownce</label>
                                        <input placeholder="Enter the value" className="border-1" type="text" name="dsdf" id="" />
                                    </div>
                                </div>
                            </div>


                            <div className='pt-2'>
                                <div className='sm:flex'>
                                    <div className='w-2/4 table-heading'>REMARKS </div>
                                    <div className='w-2/4 border-1 bg-[#F7F9FD] table-content-text'>
                                        <label className='' htmlFor="cheese"> Remarks</label>
                                        <input placeholder="Enter the value" className="border-1" type="text" name="dsdf" id="" />
                                    </div>
                                </div>
                            </div>


                        </div>

                    </div>




                    {/* ============== 2nd ROW ============ */}

                    <div className='grid sm:grid-cols-2 sm:mt-5'>

                        {/* 1st Column */}

                        <div className='leading-loose'>

                            <div>
                                <div className='sm:flex'>
                                    <div className='w-2/4 table-heading '>Ticket ID</div>
                                    <div className='w-2/4 table-content-text'>204250</div>
                                </div>
                            </div>

                            <div className='pt-2'>
                                <div className='sm:flex'>
                                    <div className='w-2/4 table-heading '> DATE </div>
                                    <div className='w-2/4 table-content-text '> 10-11-2023 </div>
                                </div>
                            </div>

                            <div className='pt-2'>
                                <div className='sm:flex'>
                                    <div className='w-2/4 table-heading'> VENDOR NAME </div>
                                    <div className='w-2/4 table-content-text'> MD Azizul hauqe </div>
                                </div>
                            </div>

                            <div className='pt-2'>
                                <div className='sm:flex'>
                                    <div className='w-2/4 table-heading'>SHORT SERVICE DESCRIPTION </div>
                                    <div className='w-2/4 table-content-text'>AC Servicing </div>
                                </div>
                            </div>

                        </div>


                        {/* 2nd Column  */}
                        <div className='leading-loose'>

                            <div>
                                <div className='sm:flex'>
                                    <div className='w-2/4 table-heading'>DELIVERY DATE</div>
                                    <div className='w-2/4 table-content-text'>10-11-2023</div>
                                </div>
                            </div>

                            <div className='pt-2'>
                                <div className='sm:flex'>
                                    <div className='w-2/4 table-heading'>BILLED AMOUNT</div>

                                    <div className='w-2/4 border-1 bg-[#F7F9FD] table-content-text '>

                                        <label className='' htmlFor="cheese"> Bill Submit </label>
                                        <input placeholder="Enter the value" className="border-1" type="text" name="dsdf" id="" />
                                    </div>

                                </div>
                            </div>

                            <div className='pt-2'>
                                <div className='sm:flex'>
                                    <div className='w-2/4 table-heading'>APPROVED AMOUNT </div>
                                    <div className='w-2/4 border-1 bg-[#F7F9FD] table-content-text'>
                                        <label className='' htmlFor="cheese"> Pay/Allownce</label>
                                        <input placeholder="Enter the value" className="border-1" type="text" name="dsdf" id="" />
                                    </div>
                                </div>
                            </div>


                            <div className='pt-2'>
                                <div className='sm:flex'>
                                    <div className='w-2/4 table-heading'>REMARKS </div>
                                    <div className='w-2/4 border-1 bg-[#F7F9FD] table-content-text'>
                                        <label className='' htmlFor="cheese"> Remarks</label>
                                        <input placeholder="Enter the value" className="border-1" type="text" name="dsdf" id="" />
                                    </div>
                                </div>
                            </div>


                        </div>

                    </div>







                    {/* ====== Button ===== */}
                    <div className='flex justify-center'>
                        <div>
                            <button className='custom-btn text-white'>Submit</button>
                        </div>
                    </div>
                </div >

            </div>



            {/* ============== Under the Medium Device  ================  */}
            <div className="md:hidden">

                <div className='container mx-auto border border-red-300 '>

                    <div className='heading bg-[#FDECEC] py-[18px] px-[21px]'>BILL SUBMISSION</div>


                    <div className='grid grid-cols-2 mt-2'>

                        {/* 1st Column */}

                        <div className='leading-loose'>

                            <div>
                                <div className='flex'>
                                    <div className='w-2/4 table-heading '>Ticket ID</div>
                                    <div className='w-2/4 table-content-text'>204250</div>
                                </div>
                            </div>

                            <div className='pt-2'>
                                <div className='flex'>
                                    <div className='w-2/4 table-heading '> DATE </div>
                                    <div className='w-2/4 table-content-text '> 10-11-2023 </div>
                                </div>
                            </div>

                            <div className='pt-2'>
                                <div className='flex'>
                                    <div className='w-2/4 table-heading'> VENDOR NAME </div>
                                    <div className='w-2/4 table-content-text'> MD Azizul hauqe </div>
                                </div>
                            </div>

                            <div className='pt-2'>
                                <div className='flex'>
                                    <div className='w-2/4 table-heading'>SHORT SERVICE DESCRIPTION </div>
                                    <div className='w-2/4 table-content-text'>AC Servicing </div>
                                </div>
                            </div>

                        </div>


                        {/* 2nd Column  */}
                        <div className='leading-loose'>

                            <div>
                                <div className='flex'>
                                    <div className='w-2/4 table-heading'>DELIVERY DATE</div>
                                    <div className='w-2/4 table-content-text'>10-11-2023</div>
                                </div>
                            </div>

                            <div className='pt-2'>
                                <div className='flex'>
                                    <div className='w-2/4 table-heading'>BILLED AMOUNT</div>

                                    <div className='w-2/4 border-1 bg-[#F7F9FD] table-content-text '>

                                        <label className='' htmlFor="cheese"> Bill Submit </label>
                                        <input placeholder="Enter the value" className="border-1" type="text" name="dsdf" id="" />
                                    </div>

                                </div>
                            </div>

                            <div className='pt-2'>
                                <div className='flex'>
                                    <div className='w-2/4 table-heading'>APPROVED AMOUNT </div>
                                    <div className='w-2/4 border-1 bg-[#F7F9FD] table-content-text'>
                                        <label className='' htmlFor="cheese"> Pay/Allownce</label>
                                        <input placeholder="Enter the value" className="border-1" type="text" name="dsdf" id="" />
                                    </div>
                                </div>
                            </div>


                            <div className='pt-2'>
                                <div className='flex'>
                                    <div className='w-2/4 table-heading'>REMARKS </div>
                                    <div className='w-2/4 border-1 bg-[#F7F9FD] table-content-text'>
                                        <label className='' htmlFor="cheese"> Remarks</label>
                                        <input placeholder="Enter the value" className="border-1" type="text" name="dsdf" id="" />
                                    </div>
                                </div>
                            </div>


                        </div>

                    </div>




                    {/* ============== 2nd ROW ============ */}

                    <div className='grid grid-cols-2 mt-5'>

                        {/* 1st Column */}

                        <div className='leading-loose'>

                            <div>
                                <div className='flex'>
                                    <div className='w-2/4 table-heading '>Ticket ID</div>
                                    <div className='w-2/4 table-content-text'>204250</div>
                                </div>
                            </div>

                            <div className='pt-2'>
                                <div className='flex'>
                                    <div className='w-2/4 table-heading '> DATE </div>
                                    <div className='w-2/4 table-content-text '> 10-11-2023 </div>
                                </div>
                            </div>

                            <div className='pt-2'>
                                <div className='flex'>
                                    <div className='w-2/4 table-heading'> VENDOR NAME </div>
                                    <div className='w-2/4 table-content-text'> MD Azizul hauqe </div>
                                </div>
                            </div>

                            <div className='pt-2'>
                                <div className='flex'>
                                    <div className='w-2/4 table-heading'>SHORT SERVICE DESCRIPTION </div>
                                    <div className='w-2/4 table-content-text'>AC Servicing </div>
                                </div>
                            </div>

                        </div>


                        {/* 2nd Column  */}
                        <div className='leading-loose'>

                            <div>
                                <div className='flex'>
                                    <div className='w-2/4 table-heading'>DELIVERY DATE</div>
                                    <div className='w-2/4 table-content-text'>10-11-2023</div>
                                </div>
                            </div>

                            <div className='pt-2'>
                                <div className='flex'>
                                    <div className='w-2/4 table-heading'>BILLED AMOUNT</div>

                                    <div className='w-2/4 border-1 bg-[#F7F9FD] table-content-text '>

                                        <label className='' htmlFor="cheese"> Bill Submit </label>
                                        <input placeholder="Enter the value" className="border-1" type="text" name="dsdf" id="" />
                                    </div>

                                </div>
                            </div>

                            <div className='pt-2'>
                                <div className='flex'>
                                    <div className='w-2/4 table-heading'>APPROVED AMOUNT </div>
                                    <div className='w-2/4 border-1 bg-[#F7F9FD] table-content-text'>
                                        <label className='' htmlFor="cheese"> Pay/Allownce</label>
                                        <input placeholder="Enter the value" className="border-1" type="text" name="dsdf" id="" />
                                    </div>
                                </div>
                            </div>


                            <div className='pt-2'>
                                <div className='flex'>
                                    <div className='w-2/4 table-heading'>REMARKS </div>
                                    <div className='w-2/4 border-1 bg-[#F7F9FD] table-content-text'>
                                        <label className='' htmlFor="cheese"> Remarks</label>
                                        <input placeholder="Enter the value" className="border-1" type="text" name="dsdf" id="" />
                                    </div>
                                </div>
                            </div>


                        </div>

                    </div>







                    {/* ====== Button ===== */}
                    <div className='flex justify-center'>
                        <div>
                            <button className='custom-btn text-white'>Submit</button>
                        </div>
                    </div>
                </div >

            </div>



        </>
    );
};

export default VUpdateBillSubmission;