import Header from "./components/header";
import Main from "./components/main/main";
import Footer from "./components/footer";
import { BrowserRouter } from "react-router-dom";
function App() {
  

  return (
    <BrowserRouter>
    <div className="bg-image h-full flex flex-col gap-2 w-full">
      <Header/>
      <Main/>
      <Footer/>
    </div>
    </BrowserRouter>
  )
}

export default App
