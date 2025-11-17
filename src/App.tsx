import { BrowserRouter, Routes, Route } from "react-router";
import { PageComponents } from "./pages/PagesComponents";
import { LayoutMain } from "./pages/LayoutMain";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LayoutMain />}>
          <Route path="/componentes" element={<PageComponents />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
