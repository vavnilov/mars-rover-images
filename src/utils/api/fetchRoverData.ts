import { RoverInfo } from "../../common/interfaces";

const API_URL = "https://api.nasa.gov/mars-photos/api/v1/manifests/";

export const fetchRoverData = async (rover: string): Promise<RoverInfo> => {
  const API_KEY = process.env.REACT_APP_API_KEY || "DEMO_KEY";

  const result = await fetch(`${API_URL}/${rover}/?API_KEY=${API_KEY}`);
  const { photo_manifest } = await result.json();
  return photo_manifest;
};
