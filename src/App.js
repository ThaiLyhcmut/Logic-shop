import { BrowserRouter, Route,Routes } from 'react-router-dom';
import './App.css';
import { LayoutDefault } from './pages/layouts/LayoutDefault';
import { HomePage } from './pages/Home/Home';
import { ProductDetailPage } from './pages/Product/ProductDetail';
import { CartPage } from './pages/Cart/Cart';
import { Provider } from 'react-redux'
import { store } from './store'

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route element={<LayoutDefault/>}>
              <Route path='/' element={<HomePage/>}/>
              <Route path='/products'>
                <Route path=':productId' element={<ProductDetailPage/>}/>
              </Route>

              <Route path='/cart' element={<CartPage/>}/>
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
      
    </>
  );
}

export default App;
