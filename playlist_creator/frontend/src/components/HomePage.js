import React from "react";
import RoomJoinPage from "./RoomJoinPage";
import CreateRoomPage from "./CreateRoomPage";
import { BrowserRouter as Router, Route } from "react-router-dom";

const HomePage = () => {
    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path="/" element={<p>This is the home page.</p>} />
                    <Route path="/join" element={RoomJoinPage} />
                    <Route path="/create" element={CreateRoomPage} />
                </Switch>
            </Router>
            <h1>This is the Home Page</h1>
        </div>
    );
}

export default HomePage;