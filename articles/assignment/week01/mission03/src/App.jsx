import { useState, useEffect } from 'react';
import Header from './components/Header';
// import Content from './components/Content';
import Footer from './components/Footer';
import Home from './pages/Home';
import Category from './pages/CategoryPage';
import Price from './pages/PricePage';
import Sort from './pages/SortPage';
import Admin from './pages/Admin';

function App() {
  const [page, setPage] = useState("home");
  useEffect(() => {
    console.log(`현재 페이지: ${page}`);
  }, [page]);
  return (
    <div className="min-h-screen flex flex-col">
      <Header setPage={setPage} page={page}/>
      {page === "home" && <Home />}
      <main className="flex-grow">
        {page === "category" && <Category />}
        {page === "price" && <Price/>}
        {page === "sort" && <Sort/>}
        {page === "admin" && <Admin />}
      </main> 
      <Footer />
    </div>
  );
}

export default App;