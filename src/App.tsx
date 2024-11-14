import { Footer } from "./components/Footer";
import { Form } from "./components/Form";
import { Header } from "./components/Header";

export function App() {
  return (
    <div style={{ 
      height: "100vh", 
      background: "#1AC0C6",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }}>
      <main style={{ 
          background: "#FFFFFF", 
          width: "394px",
          borderRadius: "12px",
          padding: "36px",
          gap: "48px",
          display: "flex",
          flexDirection: "column",
          opacity: "75%"
        }}>
        <Header />
        <Form />
        <Footer />
      </main>
    </div>
  )
}