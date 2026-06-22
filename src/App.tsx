import React from "react";
import { Header, Footer } from "./components";
import { Route } from "react-router-dom";
import { Homepage, Partner, Contact, Impressum, Datenschutz } from "./pages";

export const App: React.FC = () => {
  return (
    <>
      <Header />
      <Route path='/' component={Homepage} exact />
      <Route path='/partner' component={Partner} />
      <Route path='/contact' component={Contact} />
      <Route path='/impressum' component={Impressum} />
      <Route path='/datenschutz' component={Datenschutz} />
      <Footer />
    </>
  );
};
