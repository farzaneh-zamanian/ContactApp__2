import Layout from "./Layouts/Layout";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import NotFoundPage from "./pages/404/NotFoundPage";
import ContactView from "./pages/ContactView/ContactView";
import ContactDetails from "./components/ContactDetails/ContactDetails";
import FavoriteContactsList from "./pages/FavoriteContactsList/FavoriteContactsList";
import ContactsProvider from "./context/ContactsProvider";

function App() {
  return (
    <ContactsProvider>
      <Layout>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="contacts" element={<ContactView />} />
          <Route path="/contacts/:id" element={<ContactDetails />} />
          <Route path="/favoriteContacts" element={<FavoriteContactsList />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </ContactsProvider>
  );
}

export default App;
