import {Route,BrowserRouter, Routes} from "react-router-dom";
import {StockOverviewPage} from "./pages/StockOverviewPage";
import {StockDetailPage} from "./pages/StockDetailPage";
import './App.css';

function App() {
  return (
   
    <main className="container">
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<StockOverviewPage/>}></Route>'
        <Route path="/detail/:symbol" element={<StockDetailPage/>}></Route>
    </Routes>
    </BrowserRouter>
</main>
  );
}

export default App;
