import { Route, Switch } from 'react-router-dom';
import './App.css';
import * as React from 'react';
import Createuser from './dashboard/Createuser';
import { Dashboard } from './dashboard/Dashboard.js';
import UserList from './dashboard/UserList';
import { data } from './data/Data';
import EditUser from './dashboard/EditUser';
import UserProfile from './dashboard/UserProfile';
import AuthPage from './dashboard/AuthPage';


function App() {
  const [user , setUserdata]=React.useState(data);
  return (
    <div className="App">
    <Switch>

      <Route exact path="/">
        <Dashboard/>
      </Route>
    
      <Route path="/userlist">
        <UserList
          user={user}
          setUserdata = {setUserdata}
        />
      </Route>
      
      <Route path ="/createUser" >
        <Createuser
          user={user}
          setUserdata = {setUserdata}
        />
      </Route>

      <Route path= "/register">
        <AuthPage/>
      </Route>

      <Route path ="/edit/:id" >
        <EditUser
          user={user}
          setUserdata = {setUserdata}
        />
      </Route>
      <Route path ="/Profile/:id">
      <UserProfile
       user={user}
          setUserdata = {setUserdata}
      />
      </Route>
    </Switch>
    
    </div>
  );
}
export default App;