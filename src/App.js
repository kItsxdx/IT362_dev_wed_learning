import NavbarComponent from './component/NavbarComponent';
import {Routes,Route} from 'react-router-dom'

import User from './service/user/getuser/User';
import AddUser from './service/user/adduser/AddUser';
import UpdateItem from './service/user/updateitem/UpdetItem';
import UpdateUser from './service/user/updateuser/UpdateUser';
import FromComponane from './component/FromComponent';
import ExpenseComponent from './component/ExpenseComponent';
import UpdateItemEx from './service/user/updateitem/UpdetItemEx';





function App(){
    return(
        <div>
            <NavbarComponent/>
            <Routes>
            <Route path="/user" element={<User />}></Route>
            <Route path="/add" element={<AddUser/>}></Route>
            <Route path="/update/:id" element={<UpdateUser />}></Route>
            <Route path="/income" element={<FromComponane/>}></Route>
            <Route path="/updateitem/:id" element={<UpdateItem/>}></Route>
            <Route path="/expense" element={<ExpenseComponent/>}></Route>
            <Route path="/updateitemEx/:id" element={<UpdateItemEx/>}></Route>
            </Routes>
        </div>
    );
}

export default App;