import NavbarComponent from './component/NavbarComponent';
import {Routes,Route} from 'react-router-dom'
import User from './component/User';
import AddUser from './adduser/AddUser';
function App(){
    return(
        <div>
            <NavbarComponent/>
            <Routes>
                <Route path='/user' element={<User/>}></Route>
                <Route path='/add' element={<AddUser/>}></Route>
            </Routes>
        </div>
    );
}

export default App;