import { Routes, Route } from "react-router";

export default function App() {
    return (
        <Routes>
            <Route path="/">
                <Route index element={<p>Home</p>} />
            </Route>
        </Routes>
    );
}