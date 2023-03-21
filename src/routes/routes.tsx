import { BrowserRouter, Route, Routes as Router } from "react-router-dom";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { Products } from "../components/Products";

export function Routes() {
  return (
    <BrowserRouter>
      <Router>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Hero />
            </>
          }
        />
        <Route
          path="/produtos"
          element={
            <>
              <Header />
              <Products />
            </>
          }
        />
      </Router>
    </BrowserRouter>
  );
}
