import {
  Routes,
  Route,
  Outlet,
  BrowserRouter as Router,
  Link,
} from "react-router-dom";
import { lazy, Suspense } from "react";
import wait from "./functions/slowLoading";
import "./App.css";

const Home = lazy(() => wait(500).then(() => import("./Components/Home")));
const Store = lazy(() => wait(500).then(() => import("./Components/Store")));
const About = lazy(() =>
  wait(500).then(() =>
    import("./Components/About").then((module) => {
      return { default: module.About };
    })
  )
); // need to do this for "About" b/c it is not a "default" export

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<NavWrapper />}>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </Router>
  );
}

function NavWrapper() {
  return (
    <div style={{ width: "100%" }}>
      <nav style={{ display: "flex", gap: "1rem" }}>
        <Link to="/">Home</Link>
        <Link to="/store">Store</Link>
        <Link to="/about">About</Link>
      </nav>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Outlet />
      </Suspense>
    </div>
  );
}

export default App;

// Outlet - downloads the child "Route" Componenets
// Suspense - lets "Outlet" know that any of the paths contained may be "lazy"
// Fallback - shows while "lazy" path is "loading"
