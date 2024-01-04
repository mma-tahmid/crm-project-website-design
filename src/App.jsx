
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import ServiceBill from './Components/ServiceBill/ServiceBill'
import BillSubmission from './Components/BillSubmission/BillSubmission'
import UpdatedBillSubmission from './Components/UpdatedBillSubmission/UpdatedBillSubmission'

function App() {


  return (

    <>


      {/* <ServiceBill /> */}

      <BrowserRouter>



        <Routes>
          <Route path="/" element={<ServiceBill />} />
          <Route path="/bill-submission" element={<BillSubmission />} />
          <Route path="/updated-bill-submission" element={<UpdatedBillSubmission />} />


        </Routes>
      </BrowserRouter>



    </>
  )
}

export default App
