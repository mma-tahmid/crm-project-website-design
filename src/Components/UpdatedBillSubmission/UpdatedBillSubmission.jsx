import { Table } from "antd";
import "./updatedBillSubmission.css"


//import React from 'react';

const UpdatedBillSubmission = () => {

    // lg:w-full md:w-auto sm:w-auto
    // lg:w-full md:w-full md:w-auto sm:w-auto
    return (
        // 
        <div className='mx-3 mt-3 custom-border'>

            <div className='table-title '> Bill Submission </div>

            <div className="">
                <table className="table-auto lg:w-full md:w-full sm:w-full table-responsive-lg table-responsive-md">
                    <thead>
                        <tr  style={{ backgroundColor: "#F7F9FD" }}>

                            <th className=""> TICKET ID </th>
                            <th className="">DATE</th>
                            <th> VENDOR NAME </th>
                            <th> SHORT SERVICE DESCRIPTION </th>
                            <th>Delivery Date</th>
                            <th>BILLED AMOUNT</th>
                            <th>APPROVED AMOUNT</th>
                            <th>Remarks</th>











                            {/* <th>Year</th>
                            <th className="border-2">Song</th>
                            <th className="border-2">Artist</th>
                            <th>Year</th>
                            <th className="border-4">Song</th>
                            <th>Artist</th>
                            <th>Year</th>
                            <th>Year</th>
                            <th>Year</th>
                            <th>Year</th> */}

                        </tr>
                    </thead>

                    <tbody style={{ marginTop: "5000px" }}>

                        <tr >

                            <td className="p-4">204250 </td>
                            <td className="p-4">10 - 11 - 2023</td>
                            <td className="p-4">MD. Azizul Haque</td>
                            <td className="p-4"> AC servicing</td>
                            <td className="p-4"> 10-11-2023</td>

                            <td className="p-4 w-5 shadow " style={{ backgroundColor: "#F7F9FD" }}>

                                <div className="preference" >
                                    <label htmlFor="cheese">Bill SUbmit</label>
                                    <input placeholder="Enter the value" className="border-1" type="text" name="dsdf" id="" />
                                </div>

                            </td>

                            <td className="p-4 w-5 shadow " style={{ backgroundColor: "#F7F9FD" }}>
                                <div className="preference  ">
                                    <label htmlFor="cheese">Pay/Allownce</label>
                                    <input placeholder="Enter the value" className="border-1" type="text" name="dsdf" id="" />
                                </div>

                            </td>

                            <td className="p-4 w-5 shadow" style={{ backgroundColor: "#F7F9FD" }}>
                                <div className="preference  ">
                                    <label htmlFor="cheese">Remarks</label>
                                    <input placeholder="Enter the value" className="border-1" type="text" name="dsdf" id="" />
                                </div>
                            </td>


                        </tr>

                        <tr>
                            <td className="p-4">204250  </td>
                            <td className="p-4">10 - 11 - 2023</td>
                            <td className="p-4">MD. Azizul Haque</td>
                            <td className="p-4"> AC servicing</td>
                            <td className="p-4"> 10-11-2023</td>
                            <td className="p-4 w-5 shadow border-b-4 " style={{ backgroundColor: "#F7F9FD" }}>

                                <div className="preference " >
                                    <label htmlFor="cheese"> Bill SUbmit </label>
                                    <input placeholder="Enter the value" type="text" name="dsdf" id="" />
                                </div>
                            </td>

                            <td className="p-4 w-5 shadow border-b-4" style={{ backgroundColor: "#F7F9FD" }}>
                                <div className="preference  ">
                                    <label htmlFor="cheese">Pay/Allownce</label>
                                    <input placeholder="Enter the value" type="text" name="dsdf" id="" />
                                </div>
                            </td>

                            <td className="p-4 w-5 shadow border-b-4" style={{ backgroundColor: "#F7F9FD" }}>
                                <div className="preference  ">
                                    <label htmlFor="cheese">Remarks</label>
                                    <input placeholder="Enter the value" type="text" name="dsdf" id="" />
                                </div>
                            </td>
                            {/* <td className="p-4"> value</td>
                            <td className="p-4"> value</td> */}


                        </tr>




                    </tbody>
                </table>
            </div>


            <button className='custom-btn text-white'>Submit</button>



        </div>




    );
};

export default UpdatedBillSubmission;