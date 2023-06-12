import './App.css';
import Header from './components/Header';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import ProductListing from './components/ProductListing';
import ProductDetail from './components/ProductDetail';
import ErrorPage from './components/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProductListing />,
    errorElement: <ErrorPage />
  },
  {
    path: "/product/:productId",
    element: <ProductDetail />,
    errorElement: <ErrorPage />
  }
]);

function App() {
  return (
    <div className="App">
      <Header />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;