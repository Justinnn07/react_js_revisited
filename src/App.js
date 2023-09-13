import React, { useState } from "react";
import { Container } from "@mui/material";
import "./App.css";
import { BackHand, Bookmark } from "@mui/icons-material";
const App = () => {
  const [count, setCount] = useState(0);

  return (
    <Container sx={{}}>
      <div className="app">
        <div className="app__top">
          <BackHand style={{ fill: "white" }} />
          <Bookmark style={{ fill: "white" }} />
        </div>
      </div>
    </Container>
  );
};

export default App;
