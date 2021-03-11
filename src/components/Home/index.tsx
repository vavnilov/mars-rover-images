import React, { useEffect, useReducer, useState } from "react";

import { Photo, State } from "../../common/interfaces";
import { Filter, ImageDisplay } from "../../components";
import { fetchImages } from "../../utils/api/fetchImages";
import { filterReducer } from "../../utils/reducers/filterReducer";

const initialState: State = {
  date: "2021-03-06",
  rover: "Curiosity",
  camera: "all",
};

export const Home = () => {
  const [state, dispatch] = useReducer(filterReducer, initialState);
  const [loading, setLoading] = useState<boolean>(false);
  const [photos, setPhotos] = useState<Photo[]>([]);

  useEffect(() => {
    const getPhotos = async () => {
      const { date, rover, camera } = state;
      if (date && rover && camera) {
        try {
          setLoading(true);
          const { photos } = await fetchImages(state);
          setPhotos(photos);
        } catch (e) {
          throw new Error(`Something went wrong: ${e}`);
          // Todo: add ErrorBoundary to give user feedback and prompt them to try again
        } finally {
          setLoading(false);
        }
      }
    };
    getPhotos();
  }, [state]);

  return (
    <>
      <Filter dispatch={dispatch} />
      <ImageDisplay loading={loading} photos={photos} />
    </>
  );
};
