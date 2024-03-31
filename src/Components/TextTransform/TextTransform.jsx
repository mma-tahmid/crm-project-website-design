import React from 'react';
import "./testtransition.css"


const TextTransform = () => {
    return (
        <>

            <div>

                <div className="bg-[#ED6C6C] text-[#FFF] rounded">
                    <div className="text-center"> COMPLEX Bangladesh LTD </div>
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
                            <div className='w-[48%] md:w-[60%] lg:w-[57%] '>9384493833 </div>
                        </div>
                    </div>


                    <div className="">
                        <button className=" btn rounded-full text-[#FFF] p-1 px-3">Close</button>
                    </div>

                </div>
            </div>

        </>
    );
};


export default TextTransform;