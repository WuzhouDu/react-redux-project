import './App.css';
import Header from './components/Header';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import ProductListing from './components/ProductListing';
import ProductDetail from './components/ProductDetail';
import ErrorPage from './components/ErrorPage';
import Cart from './components/Cart';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <ProductListing />,
        errorElement: <ErrorPage />        
      },

      {
        path: "/product/:productId",
        element: <ProductDetail />,
        errorElement: <ErrorPage />
      },
      {
        path: "/cart",
        element: <Cart />,
        errorElement: <ErrorPage />
      }
    ]
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;