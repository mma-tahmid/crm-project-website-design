
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import ServiceBill from './Components/ServiceBill/ServiceBill'
import BillSubmission from './Components/BillSubmission/BillSubmission'
import UpdatedBillSubmission from './Components/UpdatedBillSubmission/UpdatedBillSubmission'
import VUpdateBillSubmission from './VUpdateBillSubmission/VUpdateBillSubmission'
import SupplierInformationDetails from './Components/SupplierInformationDetails/SupplierInformationDetails'
import VendorMasters from './Components/VendorMasters/VendorMasters'
import BankDetails from './Components/BankDetails/BankDetails'
import ActiveSupplier from './Components/ActiveSupplier/ActiveSupplier'
import DeActiveSupplier from './Components/DeActiveSupplier/DeActiveSupplier'
import PendingSuppliers from './Components/PendingSuppliers/PendingSuppliers'
import PendingSuppliersDetailsPopup from './Components/PendingSuppliersDetailsPopup/PendingSuppliersDetailsPopup'
import TestReactModal from './Components/TestReact Modal/TestReactModal'

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
          <Route path="/bank-details" element={<BankDetails />} />
          <Route path="/active-suppliers" element={<ActiveSupplier />} />
          <Route path="/deactive-suppliers" element={<DeActiveSupplier />} />
          <Route path="/pending-suppliers" element={<PendingSuppliers />} />
          <Route path="/pending-suppliers-details-popup" element={<PendingSuppliersDetailsPopup />} />
          <Route path="/test-react-modal" element={<TestReactModal />} />

        </Routes>
      </BrowserRouter>



    </>
  )
}

export default App
