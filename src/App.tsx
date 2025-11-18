import { BrowserRouter, Routes, Route } from "react-router";
import { PageComponents } from "./pages/PageComponents";
import { LayoutMain } from "./pages/LayoutMain";
import { PageHome } from "./pages/PageHome";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LayoutMain />}>
          <Route index element={<PageHome />} />
          <Route path="/componentes" element={<PageComponents />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
