import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Navigate,RouterProvider, createBrowserRouter } from 'react-router-dom';

//컴포넌트
import App from './App';
import NotFound from './pages/NotFound';
import MyCart from './pages/MyCart';
import ProductDetail from './pages/ProductDetail';
import UploadProduct from './components/UploadProduct';
import { useAuthContext } from './context/AuthContext';
import CategoryPage from './pages/CategoryPage';
import Search from './pages/Search';

const root = ReactDOM.createRoot(document.getElementById('root'));
//관리자 인증(조건에 하나라도 만족하지 못하면 페이지를 이동할 수 없게 하고 강제로 홈으로 이동)
const ProtectRouter = ({checkAdmin,children})=>{
  const {user} =useAuthContext();
  if(!user || (checkAdmin && !user.isAdmin)){
    return <Navigate to ='/' replace/>
  }
  return children
}
const routes = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    errorElement : <NotFound/>,

    children : [
      {path : '/cart',element:<MyCart/>},
      {path: '/products/detail/:id',element:<ProductDetail/>},
      {path : '/products/:category',element:<CategoryPage/>},
      {path : '/search', element:<Search/>},
      {
        path : 'product/upload',
        element:
        <ProtectRouter checkAdmin>
        <UploadProduct/>
        </ProtectRouter>
      }
    ]
  }
])
root.render(
  <React.StrictMode>
    <RouterProvider router={routes}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
