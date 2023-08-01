import classNames from "classnames";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { MainMenu } from "./pages/MainMenu";
import { Rules } from "./pages/Rules";
import { Game } from "./pages/Game";

export const App: React.FC = () => {
  return (
    <Router>
      <main
        className={classNames(
          "bg-purple",
          "h-screen",
          "flex",
          "justify-center",
          "items-center",
        )}
      >
        <Routes>
          <Route path="/" element={<MainMenu />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/game" element={<Game />} />
        </Routes>
      </main>
    </Router>
  );
};
