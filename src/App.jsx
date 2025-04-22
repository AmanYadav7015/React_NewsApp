import Login from "./components/loginPage"
import SignUp from "./components/signup"
import HomePage from "./components/homePage"
import News from "./components/News"
import ForgetPassword from "./components/forgetPassword"
import { BrowserRouter as Router,Route,Routes } from "react-router-dom"

function App() {
  

  return (
    <>
  <Router>
    <Routes>
      <Route path="/" element={<HomePage/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/signup" element={<SignUp/>}></Route>
      <Route path="/news" element={<News/>}></Route>
      <Route path="/forgetPassword" element={<ForgetPassword/>}></Route>
    </Routes>
  </Router>
  </>
  )
}

export default App