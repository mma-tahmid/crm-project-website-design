import React from 'react';
import "./vendorMasters.css"
import { MdOutlineUploadFile } from "react-icons/md";
const VendorMasters = () => {
    return (
        <>
            <div className='container mx-auto px-10 py-5'>
                <div className='grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-y-3 sm:gap-x-3 md:grid-cols-2 md:gap-y-4 lg:grid-cols-3 '>



                    {/* 1st input field */}

                    <div className='relative'>
                        <input className='border rounded w-[273px] h-[39.53px], border-[#323232] focus:border-[#E74A3B] focus:outline-none py-3 px-8' placeholder='Name' type="text" />

                        {/* <input className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#E74A3B]' placeholder='Enter the Name' type="text" /> */}

                        <div className='absolute kl bg-[#fff] px-2 text-[#E74A3B]'>Name</div>

                    </div>

                    <div className='relative'>
                        <input className='border rounded w-[273px] h-[39.53px], border-[#323232] focus:border-[#E74A3B] focus:outline-none py-3 px-8' placeholder='Email' type="text" />

                        {/* <input className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#E74A3B]' placeholder='Enter the Name' type="text" /> */}

                        <div className='absolute kl bg-[#fff] px-2 text-[#E74A3B]'>Email</div>

                    </div>

                    <div className='relative'>
                        <input className='border rounded w-[273px] h-[39.53px], border-[#323232] focus:border-[#E74A3B] focus:outline-none py-3 px-8' placeholder='Phone' type="text" />

                        {/* <input className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#E74A3B]' placeholder='Enter the Name' type="text" /> */}

                        <div className='absolute kl bg-[#fff] px-2 text-[#E74A3B]'>Phone</div>

                    </div>

                    <div className='relative'>
                        <input className='border rounded w-[273px] h-[39.53px], border-[#323232] focus:border-[#E74A3B] focus:outline-none py-3 px-8' placeholder='Address' type="text" />

                        {/* <input className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#E74A3B]' placeholder='Enter the Name' type="text" /> */}

                        <div className='absolute kl bg-[#fff] px-2 text-[#E74A3B]'>Address</div>

                    </div>

                    <div className='relative'>
                        <input className='border rounded w-[273px] h-[39.53px], border-[#323232] focus:border-[#E74A3B] focus:outline-none py-3 px-8' placeholder='Division' type="text" />

                        {/* <input className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#E74A3B]' placeholder='Enter the Name' type="text" /> */}

                        <div className='absolute kl bg-[#fff] px-2 text-[#E74A3B]'>Division</div>

                    </div>

                    <div className='realtive'>
                        <input className='border rounded w-[273px] h-[39.53px], border-[#323232] focus:border-[#E74A3B] focus:outline-none py-3 px-8' placeholder='District' type="text" />

                        {/* <input className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#E74A3B]' placeholder='Enter the Name' type="text" /> */}

                        <div className='absolute kl bg-[#fff] px-2 text-[#E74A3B]'>District</div>

                    </div>

                    <div className='relative'>
                        <input className='border rounded w-[273px] h-[39.53px], border-[#323232] focus:border-[#E74A3B] focus:outline-none py-3 px-8' placeholder='Police Station' type="text" />

                        {/* <input className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#E74A3B]' placeholder='Enter the Name' type="text" /> */}

                        <div className='absolute kl bg-[#fff] px-2 text-[#E74A3B]'>Police Station</div>

                    </div>

                    <div className='relative'>
                        <input className='border rounded w-[273px] h-[39.53px], border-[#323232] focus:border-[#E74A3B] focus:outline-none py-3 px-8' placeholder='Post Office' type="text" />

                        {/* <input className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#E74A3B]' placeholder='Enter the Name' type="text" /> */}

                        <div className='absolute kl bg-[#fff] px-2 text-[#E74A3B]'>Post Office</div>

                    </div>

                    <div className='relative'>
                        <input className='border rounded w-[273px] h-[39.53px], border-[#323232] focus:border-[#E74A3B] focus:outline-none py-3 px-8' placeholder='Country' type="text" />

                        {/* <input className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#E74A3B]' placeholder='Enter the Name' type="text" /> */}

                        <div className='absolute kl bg-[#fff] px-2 text-[#E74A3B]'>Country</div>

                    </div>

                    <div className='relative'>
                        <input className='border rounded w-[273px] h-[39.53px], border-[#323232] focus:border-[#E74A3B] focus:outline-none py-3 px-8' placeholder='Vat Reg' type="text" />

                        {/* <input className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#E74A3B]' placeholder='Enter the Name' type="text" /> */}

                        <div className='absolute kl bg-[#fff] px-2 text-[#E74A3B]'>Vat Reg</div>

                    </div>

                    <div className='relative'>
                        <input className='border rounded w-[273px] h-[39.53px], border-[#323232] focus:border-[#E74A3B] focus:outline-none py-3 px-8' placeholder='License No' type="text" />

                        {/* <input className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#E74A3B]' placeholder='Enter the Name' type="text" /> */}

                        <div className='absolute kl bg-[#fff] px-2 text-[#E74A3B]'>License No</div>

                    </div>

                    <div className='relative'>
                        <input className='border rounded w-[273px] h-[39.53px], border-[#323232] focus:border-[#E74A3B] focus:outline-none py-3 px-8' placeholder='Item Type' type="text" />

                        {/* <input className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#E74A3B]' placeholder='Enter the Name' type="text" /> */}

                        <div className='absolute kl bg-[#fff] px-2 text-[#E74A3B]'>Item Type</div>

                    </div>

                    <div className='relative'>
                        <input className='border rounded w-[273px] h-[39.53px], border-[#323232] focus:border-[#E74A3B] focus:outline-none py-3 px-8' placeholder='Vendor Type' type="text" />

                        {/* <input className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#E74A3B]' placeholder='Enter the Name' type="text" /> */}

                        <div className='absolute kl bg-[#fff] px-2 text-[#E74A3B]'>Vendor Type</div>

                    </div>

                    <div className='relative'>
                        <input className='border rounded w-[273px] h-[39.53px], border-[#323232] focus:border-[#E74A3B] focus:outline-none py-3 px-8' placeholder='Contact Person' type="text" />

                        {/* <input className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#E74A3B]' placeholder='Enter the Name' type="text" /> */}

                        <div className='absolute kl bg-[#fff] px-2 text-[#E74A3B]'>Contact Person</div>

                    </div>

                    <div className='relative'>
                        <input className='border rounded w-[273px] h-[39.53px], border-[#323232] focus:border-[#E74A3B] focus:outline-none py-3 px-8' placeholder='Contact Person Phone' type="text" />

                        {/* <input className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#E74A3B]' placeholder='Enter the Name' type="text" /> */}

                        <div className='absolute kl bg-[#fff] px-2 text-[#E74A3B]'>Contact Person Phone</div>

                    </div>

                    <div className='relative'>
                        <input className='border rounded w-[273px] h-[39.53px], border-[#323232] focus:border-[#E74A3B] focus:outline-none py-3 px-8' placeholder='Tax Identification Number' type="text" />

                        {/* <input className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#E74A3B]' placeholder='Enter the Name' type="text" /> */}

                        <div className='absolute  kl bg-[#fff] px-2 text-[#E74A3B]'>Tax Identification Number</div>



                    </div>











                    <div className='relative lg:col-span-2 '>
                        <input className='border rounded w-[273px] sm:w-[273px] lg:w-[765px] h-[39.53px], border-[#323232] focus:border-[#E74A3B] focus:outline-none py-3 px-8' placeholder='Trade Liscence Upload' type="text" />

                        {/* <input className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#E74A3B]' placeholder='Enter the Name' type="text" /> */}

                        <div className='absolute kl bg-[#fff] px-2 text-[#E74A3B]'>Trade Liscence Upload</div>

                        <div className='absolute file-icon top-[15px] left-[233px]  lg:left-[744px] lg:top-[15px] md:top-[15px] md:left-[253px]'> <MdOutlineUploadFile /> </div>
                    </div>

                    {/* profile Update */}

                    <div className='relative lg:col-span-2'>
                        <input className='border rounded w-[273px] sm:w-[273px] lg:w-[705px] h-[39.53px], border-[#323232] focus:border-[#E74A3B] focus:outline-none py-3 px-8' placeholder='Profile Update' type="text" />

                        {/* <input className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#E74A3B]' placeholder='Enter the Name' type="text" /> */}

                        <div className='absolute kl bg-[#fff] px-2 text-[#E74A3B]'>Profile Update</div>

                        <div className='absolute file-icon top-[15px] left-[233px]  lg:left-[680px] lg:top-[15px] md:top-[15px] md:left-[253px]'> <MdOutlineUploadFile /> </div>
                    </div>

                    <div className=''>
                        <button className='border w-[194px] h-[50px] bg-[#FA6669] rounded-[4px]' >Submit</button>
                    </div>



                </div>

            </div>

            {/* 2nd Part */}
            <div className='container mx-auto px-10 py-5'>

                <div className='flex border border-[#EB5757]'>
                    <div className='w-[20%] bg-[#EB5757D1]'>
                        <div className='w-[85px] ml-[98px] mt-[98px] '>
                            BANK NO  01
                        </div>
                    </div>

                    <div className='w-[80%] '>
                        <div className='grid grid-cols-3 px-6 gap-6 '>

                            <div className="mt-2">

                                <div className=' border bg-[#E9E9ED]'>

                                    <label className='text-[#656575]' htmlFor="">Account Name</label>

                                    <select
                                        id="country"
                                        name="country"
                                        autoComplete="country-name"
                                        className="block w-full rounded-md border-0 py-1.5  "
                                        placeholder="Account Name"
                                    >

                                        <option>United States</option>
                                        <option>Canada</option>
                                        <option>Mexico</option>
                                    </select>
                                </div>
                            </div>



                            <div className="mt-2">

                                <div className=' border bg-[#E9E9ED]'>

                                    <label className='text-[#656575]' htmlFor="">Account Type</label>

                                    <select
                                        id="country"
                                        name="country"
                                        autoComplete="country-name"
                                        className="block w-full rounded-md border-0 py-1.5  "
                                        placeholder="Account Name"
                                    >

                                        <option>United States</option>
                                        <option>Canada</option>
                                        <option>Mexico</option>
                                    </select>
                                </div>
                            </div>


                            <div className="mt-2">

                                <div className=' border bg-[#E9E9ED]'>

                                    <label className='text-[#656575]' htmlFor="">Account Number</label>

                                    <select
                                        id="country"
                                        name="country"
                                        autoComplete="country-name"
                                        className="block w-full rounded-md border-0 py-1.5  "
                                        placeholder="Account Name"
                                    >

                                        <option>123234</option>
                                        <option>123234</option>
                                        <option>123234</option>
                                    </select>
                                </div>
                            </div>


                            <div className="mt-2">

                                <div className=' border bg-[#E9E9ED]'>

                                    <label className='text-[#656575]' htmlFor="">Bank Name</label>

                                    <select
                                        id="country"
                                        name="country"
                                        autoComplete="country-name"
                                        className="block w-full rounded-md border-0 py-1.5  "
                                        placeholder="Account Name"
                                    >

                                        <option>AB Bank Ltd</option>
                                        <option>AB Bank Ltd</option>
                                        <option>AB Bank Ltd</option>
                                    </select>
                                </div>
                            </div>

                            <div className="mt-2">

                                <div className=' border bg-[#E9E9ED]'>

                                    <label className='text-[#656575]' htmlFor="">Bank Branch</label>

                                    <select
                                        id="country"
                                        name="country"
                                        autoComplete="country-name"
                                        className="block w-full rounded-md border-0 py-1.5  "
                                        placeholder="Account Name"
                                    >

                                        <option>AB Bank Ltd</option>
                                        <option>AB Bank Ltd</option>
                                        <option>AB Bank Ltd</option>
                                    </select>
                                </div>
                            </div>

                            <div className="mt-2">

                                <div className=' border bg-[#E9E9ED]'>

                                    <label className='text-[#656575]' htmlFor="">Routing Number</label>

                                    <select
                                        id="country"
                                        name="country"
                                        autoComplete="country-name"
                                        className="block w-full rounded-md border-0 py-1.5  "
                                        placeholder="Account Name"
                                    >

                                        <option>123234</option>
                                        <option>123234</option>
                                        <option>123234</option>
                                    </select>
                                </div>
                            </div>

                            <div className="mt-2">

                                <div className='border bg-[#E9E9ED]'>

                                    <label className='text-[#656575]' htmlFor="">SWIFT Code</label>

                                    <select
                                        id="country"
                                        name="country"
                                        autoComplete="country-name"
                                        className="block w-full rounded-md border-0 py-1.5  "
                                        placeholder="Account Name"
                                    >

                                        <option>123234</option>
                                        <option>123234</option>
                                        <option>123234</option>
                                    </select>
                                </div>
                            </div>

                            <div className="mt-2">

                                <div className='border bg-[#E9E9ED]'>

                                    <label className='text-[#656575]' htmlFor="">Copy of Cheque leaf</label>

                                    <select
                                        id="country"
                                        name="country"
                                        autoComplete="country-name"
                                        className="block w-full rounded-md border-0 py-1.5  "
                                        placeholder="Account Name"
                                    >

                                        <option>123234</option>
                                        <option>123234</option>
                                        <option>123234</option>
                                    </select>
                                </div>
                            </div>


                        </div>
                    </div>


                </div>
            </div>

        </>
    );
};

export default VendorMasters;