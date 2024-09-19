import StyledDiv from "./components/StyledDiv";
import Layout from "./Layouts/Layout";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import NotFoundPage from "./pages/404/NotFoundPage";
import ContactForm from "./pages/ContactForm/ContactForm";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="contacts" element={<ContactForm />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
