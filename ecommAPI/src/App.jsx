import './App.css';
import CustomerList from './Components/Customers';
import NavigationBar from './Components/NavBar';
import OrdersList from './Components/Orders';
import ProductList from './Components/Products';
import HomePage from './Components/Homepage';

function App() {

  return (
    <>
    < NavigationBar/>
      < HomePage />
      < CustomerList />
      < ProductList />
      < OrdersList />
    </>
  )
};

export default App;
