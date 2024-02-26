import React from "react";
import { createRoot } from "react-dom/client";
import HomePage from "./HomePage";
import RoomJoinPage from "./RoomJoinPage";
import CreateRoomPage from "./CreateRoomPage";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <div>
      <h1>Hello World, This is The Playlist Creator</h1>
      {/* <HomePage />
      <RoomJoinPage />
      <CreateRoomPage /> */}
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
