import Layout from "./Layouts/Layout";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import NotFoundPage from "./pages/404/NotFoundPage";
import ContactView from "./pages/ContactView/ContactView";
import ContactDetails from "./components/ContactDetails/ContactDetails";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="contacts" element={<ContactView />} />
          <Route path="/contacts/:id" element={<ContactDetails />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
