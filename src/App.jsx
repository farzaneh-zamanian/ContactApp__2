import Layout from "./Layouts/Layout";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import NotFoundPage from "./pages/404/NotFoundPage";
import ContactView from "./pages/ContactView/ContactView";
import ContactDetails from "./components/ContactDetails/ContactDetails";
import ContactsProvider from "./context/ContactsProvider";


function App() {
  return (
    <ContactsProvider>
      <Layout>
        {/* Register Routers */}
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="contacts" element={<ContactView />} />
          <Route path="/contacts/:id" element={<ContactDetails />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </ContactsProvider>
  );

  // return (
  //   <div>
  //     <h1>Contacts App</h1>
  //     <ContactList />
  //     <AddContactForm />
  //     <UpdateContactForm />
  //   </div>
  // );
}

export default App;
