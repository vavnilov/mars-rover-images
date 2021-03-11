import { Photos, State } from "../../common/interfaces";

const API_URL = "https://api.nasa.gov/mars-photos/api/v1/rovers";

export const fetchImages = async (state: State): Promise<Photos> => {
  const { date, rover, camera } = state;
  const cameraString =
    camera?.toLowerCase() !== "all" ? `&camera=${camera}` : "";
  const API_KEY = process.env.REACT_APP_API_KEY || "DEMO_KEY";

  const result = await fetch(
    `${API_URL}/${rover}/photos?earth_date=${date}${cameraString}&API_KEY=${API_KEY}`
  );
  return await result.json();
};
