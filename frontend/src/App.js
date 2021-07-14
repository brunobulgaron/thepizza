import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import { Container } from "react-bootstrap"

function App() {
  return (
    <>
      <Header />
      <Container>
        <main className="py-3">
          <h1>Welcome to ThePizza!</h1>
        </main>
      </Container>
      <Footer />
    </>
  )
}

export default App
