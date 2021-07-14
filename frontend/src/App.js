import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Home from "./pages/Home/Home"
import { Container } from "react-bootstrap"

function App() {
  return (
    <>
      <Header />
      <Container>
        <main className="py-3">
          <Home />
        </main>
      </Container>
      <Footer />
    </>
  )
}

export default App
