
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Dashboard from './pages/Dashboard'
import OrderRequest from './pages/orders/OrderRequest'
import StockManagement from './pages/StockManagement'
import Category from './pages/Category'
import Products from './pages/Products'
import Orders from './pages/orders/Orders'
import DeliveryBoy from './pages/DeliveryBoy'
import Reports from './pages/Reports'
import Add from './pages/delivery boy/Add'
import Request from './pages/delivery boy/Request'
import Manage from './pages/delivery boy/Manage'
import Cash from './pages/delivery boy/Cash'
import AddEmployee from './pages/employee/AddEmployee'
import EmployeeList from './pages/employee/EmployeeList'
import Policies from './pages/delivery boy/Policies'

function App() {

  return (    
    <Routes>
      <Route path='/'element={<HomePage/>}>
      <Route index element={<Dashboard />} />
      <Route path='order-request' element={<OrderRequest/>}></Route>
      <Route path='stock-management' element={<StockManagement/>}></Route>
      <Route path='category' element={<Category/>}></Route>
      <Route path='products' element={<Products/>}></Route>
      <Route path='orders' element={<Orders/>}></Route>
      <Route path='delivery-boy' element={<DeliveryBoy/>}></Route>
      <Route path='delivery-boy-policy' element={<Policies/>}></Route>
      <Route path='delivery-boy-add' element={<Add/>}></Route>
      <Route path='delivery-boy-request' element={<Request/>}></Route>
      <Route path='delivery-boy-managed' element={<Manage/>}></Route>
      <Route path='delivery-boy-cash' element={<Cash/>}></Route>
      <Route path='add-employee' element={<AddEmployee/>}></Route>
      <Route path='employee-list' element={<EmployeeList/>} />
      <Route path='reports' element={<Reports/>}></Route>
    </Route>
    </Routes>
  
  )
}

export default App
