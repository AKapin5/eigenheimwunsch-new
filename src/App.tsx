import React from "react";
import { Header, Footer } from "./components";
import { Route } from "react-router-dom";
import { Page, Homepage, Partner, Contact, Impressum, Datenschutz } from "./pages";

export const App: React.FC = () => {
  return (
    <>
      <Header />
      <Route path='/' component={Page} exact />
      <Route path='/homepage' component={Homepage} />
      <Route path='/partner' component={Partner} />
      <Route path='/contact' component={Contact} />
      <Route path='/impressum' component={Impressum} />
      <Route path='/datenschutz' component={Datenschutz} />
      <Footer />
    </>
  );
};
