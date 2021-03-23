import "./App.css";
import {BrowserRouter as Router,Switch,Link,Route} from 'react-router-dom';
import Tasks from './Tasks';
import Quries from './Quries';
import Calendar from './Calender';
import Dashboard from './Dashboard';
import {UserData} from './UserData';
import Adduser from './Adduser';
import Edituser from './Edituser';

function App() {
  return (
    <>
    <div>
      <Router>
        <UserData>
        <div className="sidebar">
        <Link to="/" className="d-block pt-2"><i className="fas fa-bookmark p-2"></i>Dashboard</Link>
        <Link to="/Calendar" className="d-block pt-2"><i className="fas fa-calendar-alt p-2"></i>Calendar</Link>
        <Link to="/Tasks" className="d-block pt-2"><i className="fas fa-tasks p-2"></i>Tasks</Link>
        <Link to="/Quires" className="d-block pt-2"><i className="fas fa-ticket-alt p-2"></i>Queires</Link>
        </div>
      <div className="content">
        <Switch>
          <>
          <div className="container-fluid">
          <Route exact path="/" component={Dashboard}/>
          <Route exact path="/Tasks" component={Tasks}/>
          <Route exact path="/Quires" component={Quries}/>
          <Route exact path="/Calendar" component={Calendar}/>
          <Route exact path="/AddUser" component={Adduser}/>
          <Route exact path="/Edituser/:id" component={Edituser}/>
          </div>
          </>
        </Switch>
        </div>
        </UserData>
      </Router>
      </div>
    </>
  );
}

export default App;