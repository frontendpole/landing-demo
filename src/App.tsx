import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Footer, Header } from "./components/organisms";
import { Newsletter } from "./components/organisms/newsletter";
import { Layout, Overview } from "./components/templates";

function App() {
  return (
    <Router>
      <Layout>
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Overview />} />
            <Route path="/about" />
            <Route path="/resources" />
            <Route path="/network" />
            <Route path="/cloud" />
            <Route path="/download" />
            <Route path="/contact" />
          </Routes>
        </main>
        <Newsletter />
        <Footer />
      </Layout>
    </Router>
  );
}

export default App;
