
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import ServiceBill from './Components/ServiceBill/ServiceBill'
import BillSubmission from './Components/BillSubmission/BillSubmission'
import UpdatedBillSubmission from './Components/UpdatedBillSubmission/UpdatedBillSubmission'
import VUpdateBillSubmission from './VUpdateBillSubmission/VUpdateBillSubmission'
import SupplierInformationDetails from './Components/SupplierInformationDetails/SupplierInformationDetails'
import VendorMasters from './Components/VendorMasters/VendorMasters'

function App() {


  return (

    <>


      {/* <ServiceBill /> */}

      <BrowserRouter>


        <Routes>
          <Route path="/" element={<ServiceBill />} />
          <Route path="/bill-submission" element={<BillSubmission />} />
          {/* <Route path="/updated-bill-submission" element={<UpdatedBillSubmission />} /> */}
          <Route path="/v1-updated-bill-submission" element={<VUpdateBillSubmission />} />
          <Route path="/supplier-information-details" element={<SupplierInformationDetails />} />
          <Route path="/vendor-masters" element={<VendorMasters />} />


        </Routes>
      </BrowserRouter>



    </>
  )
}

export default App
