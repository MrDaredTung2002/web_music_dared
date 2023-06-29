import Discover from "src/pages/Discover";
import Explorer from "~/pages/Explorer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DefaultLayout from "~/compoments/layouts/DefaultLayout";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <DefaultLayout>
                <Discover />
              </DefaultLayout>
            }
          />
          <Route
            path="/explorer"
            element={
              <DefaultLayout>
                <Explorer />
              </DefaultLayout>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
