import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { PageMenu } from './components/PageMenu';
import { MainPage } from './Pages/MainPage';
import { CategoriesPage } from './Pages/CategoriesPage';
import { ProductsPage } from './Pages/ProductsPage';
import { CategoryPage } from './Pages/CategoryPage';

import {CategoryPageProvider} from './hooks/useCategoryPage';


import './App.scss';


function App() {
  return (
    <CategoryPageProvider>
      <BrowserRouter >
        <PageMenu />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/categorias" element={<CategoriesPage />} />
          <Route path="/produtos" element={<ProductsPage />} />
          <Route path="/categoria" element={<CategoryPage />} />
          <Route path='/comprar' component={() => { 
            window.location.href = 'https://www.instagram.com/tartaruguinhaarts/'; 
            return null;
        }}/>
        </Routes>

      </BrowserRouter>

    </CategoryPageProvider>
  );
}

export default App;
