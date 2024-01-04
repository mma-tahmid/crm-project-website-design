import { Table } from "antd";
import "./updatedBillSubmission.css"


//import React from 'react';

const UpdatedBillSubmission = () => {


    return (
        // 
        <div className='mx-3 mt-3 custom-border '>

            <div className='table-title '> Bill Submission </div>

            <div>
                <table className="table-auto w-full ">
                    <thead>
                        <tr>
                            <th className="border-2"> TICKET ID </th>
                            <th className="border-2">DATE</th>
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

                    <tbody>
                        <tr>
                            <td className="p-4">204250 </td>
                            <td className="p-4">10 - 11 - 2023</td>
                            <td className="p-4">MD. Azizul Haque</td>
                            <td className="p-4"> AC servicing</td>
                            <td className="p-4"> 10-11-2023</td>
                            <td className="p-4"> value </td>
                            <td className="p-4"> value</td>
                            <td className="p-4"> value</td>


                        </tr>

                        <tr>
                            <td className="p-4">204250  </td>
                            <td className="p-4">10 - 11 - 2023</td>
                            <td className="p-4">MD. Azizul Haque</td>
                            <td className="p-4"> AC servicing</td>
                            <td className="p-4"> 10-11-2023</td>
                            <td className="p-4 w-5">
                                <div className="preference border-2  ">
                                    <label htmlFor="cheese">Bill SUbmit</label>
                                    <input className="border-1" type="text" name="dsdf" id="" />
                                </div>
                            </td>
                            <td className="p-4"> value</td>
                            <td className="p-4"> value</td>


                        </tr>




                    </tbody>
                </table>
            </div>


            <button className='custom-btn text-white'>Submit</button>



        </div>




    );
};

export default UpdatedBillSubmission;