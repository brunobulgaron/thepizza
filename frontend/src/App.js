import { BrowserRouter as Router, Route } from "react-router-dom"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Home from "./pages/Home/Home"
import ProductPage from "./pages/ProductPage/ProductPage"
import CartPage from "./pages/CartPage/CartPage"
import LoginPage from "./pages/LoginPage/LoginPage"
import RegisterPage from "./pages/RegisterPage/RegisterPage"
import ProfilePage from "./pages/ProfilePage/ProfilePage"
import ShippingPage from "./pages/ShippingPage/ShippingPage"
import PaymentPage from "./pages/PaymentPage/PaymentPage"
import PlaceOrderPage from "./pages/PlaceOrderPage/PlaceOrderPage"
import OrderPage from "./pages/OrderPage/OrderPage"
import { Container } from "react-bootstrap"

function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route path="/" component={Home} exact />
          <Route path="/product/:id" component={ProductPage} />
          <Route path="/cart/:id?" component={CartPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/profile" component={ProfilePage} />
          <Route path="/shipping" component={ShippingPage} />
          <Route path="/payment" component={PaymentPage} />
          <Route path="/placeorder" component={PlaceOrderPage} />
          <Route path="/order/:id" component={OrderPage} />
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App
