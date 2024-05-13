import css from './App.module.css';
import Content from './components/Content';
import Sidebar from './components/Sidebar';
import NavbarForm from './components/NavbarForm';
import ControlledForm from './components/ControlledForm';
import ControlledFormHooks from './components/ControlledFormHooks';
import UseStateWithArrays from './components/UseStateWithArrays';
import UseStatePrac from './components/UseStatePrac';
import UseStatePrac2 from './components/UseStatePrac2';
import UseStateWithObjects from './components/UseStateWithObjects';
import UseStateWithObs from './components/UseStateWithObs';

function App() {
  return (
    <div className={css.App}>
      {/* <Sidebar /> */}
      {/* <NavbarSimple /> */}
      {/* <NavbarForm /> */}
      {/* <NavigationParent /> */}
      {/* <Content /> */}
      {/* <ControlledForm /> */}
      {/* <ControlledFormHooks /> */}
      {/* <UseStateWithArrays /> */}
      {/* <UseStatePrac /> */}
      {/* <UseStatePrac2 /> */}
      {/* <UseStateWithObjects /> */}
      <UseStateWithObs />
      
    </div>
  );
}

export default App;