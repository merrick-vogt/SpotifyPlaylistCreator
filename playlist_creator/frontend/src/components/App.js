import React from "react";
import { createRoot } from "react-dom/client";
import HomePage from "./HomePage";
import RoomJoinPage from "./RoomJoinPage";
import CreateRoomPage from "./CreateRoomPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <h1>Hello Me, This is The Playlist Creator</h1>
      <Routes>
        <Route exact path="/" element={<p>This is the home page.</p>} />
        <Route path="/join" element={<RoomJoinPage />} />
        <Route path="/create" element={<CreateRoomPage />} />
      </Routes>
    </div>
  );
};

export default App;

const appDiv = document.getElementById("app");
const root = createRoot(appDiv);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
