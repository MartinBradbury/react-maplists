import css from './App.module.css';
import Content from './components/Content';
import Sidebar from './components/Sidebar';
import NavbarForm from './components/NavbarForm';
import ControlledForm from './components/ControlledForm';

function App() {
  return (
    <div className={css.App}>
      <Sidebar />
      {/* <NavbarSimple /> */}
      <NavbarForm />
      {/* <NavigationParent /> */}
      {/* <Content /> */}
      <ControlledForm />
      
    </div>
  );
}

export default App;