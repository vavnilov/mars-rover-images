import { useState } from "react";

import { RoverInfoDisplay, RoverSelect } from "./sections";

export const Rovers = () => {
  const [rover, setRover] = useState<string>("Curiosity");

  return (
    <div style={{ margin: "20px" }}>
      <RoverSelect rover={rover} setRover={setRover} />
      <RoverInfoDisplay rover={rover} />
    </div>
  );
};
