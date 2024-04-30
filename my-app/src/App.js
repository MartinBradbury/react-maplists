import css from './App.module.css';
import Content from './components/Content';
import Cont from './components/Cont';
import Sidebar from './components/Sidebar';
import NavbarForm from './components/NavbarForm';

function App() {
  return (
    <div className={css.App}>
      <Sidebar />
      {/* <NavbarSimple /> */}
      <NavbarForm />
      {/* <NavigationParent /> */}
      <Content />
      
    </div>
  );
}

export default App;