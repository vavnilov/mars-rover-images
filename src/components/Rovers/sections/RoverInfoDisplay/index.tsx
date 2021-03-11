import { Spin } from "antd";
import { useEffect, useState } from "react";

import { RoverInfo } from "../../../../common/interfaces";
import { fetchRoverData } from "../../../../utils/api/fetchRoverData";

interface Props {
  rover: string | null;
}

export const RoverInfoDisplay = ({ rover }: Props) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [roverData, setRoverData] = useState<RoverInfo | null>(null);
  useEffect(() => {
    const getRoverInfo = async () => {
      if (rover) {
        try {
          setLoading(true);
          const roverData = await fetchRoverData(rover);
          setRoverData(roverData);
        } catch (e) {
          throw new Error(`Something went wrong: ${e}`);
          // Todo: add ErrorBoundary to give user feedback and prompt them to try again
        } finally {
          setLoading(false);
        }
      }
    };
    getRoverInfo();
  }, [rover]);

  if (loading)
    return (
      <div
        style={{
          height: "80vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Spin size="large" tip="Loading Rover Data..." />
      </div>
    );
  return roverData ? (
    <div style={{ fontSize: "2rem", marginTop: "20px" }}>
      <div>
        <strong>Rover Name: </strong>
        {roverData.name}
      </div>
      <div>
        <strong>Status: </strong>
        {roverData.status}
      </div>
      <div>
        <strong>Launch Date: </strong>
        {roverData.launch_date}
      </div>
      <div>
        <strong>Landing Date: </strong>
        {roverData.landing_date}
      </div>
      <div>
        <strong>Last Photo Taken: </strong>
        {roverData.max_date}
      </div>
      <div>
        <strong>Total Photos Taken: </strong>
        {roverData.total_photos}
      </div>
    </div>
  ) : (
    <div></div>
  );
};
