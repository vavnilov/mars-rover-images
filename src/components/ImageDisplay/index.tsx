import { Image, Pagination, Spin } from "antd";
import { useEffect, useState } from "react";

import { Photo } from "../../common/interfaces";

const itemsPerPage: number = 20;

interface Props {
  photos: Photo[];
  loading: boolean;
}

export const ImageDisplay = ({ photos, loading }: Props) => {
  const [photosToDisplay, setPhotosToDisplay] = useState<Photo[]>([]);

  useEffect(() => {
    if (photos.length) {
      setPhotosToDisplay(photos.slice(0, itemsPerPage));
    } else {
      setPhotosToDisplay([]);
    }
  }, [photos]);

  const handlePageChange = (page: number) => {
    const startingIndex = (page - 1) * itemsPerPage;
    const lastIndex = page * itemsPerPage;
    let photosToShow = [];
    for (let i = startingIndex; i < lastIndex; i++) {
      photos[i] && photosToShow.push(photos[i]);
    }
    setPhotosToDisplay(photosToShow);
  };

  const photoDisplay = photosToDisplay.length ? (
    <>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
          marginTop: 40,
        }}
      >
        {photosToDisplay.map((photo) => (
          <Image
            style={{ marginBottom: 30 }}
            key={photo.img_src}
            width={300}
            src={photo.img_src}
            alt="Mars Image"
          />
        ))}
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", marginBottom: 20 }}
      >
        <Pagination
          defaultCurrent={1}
          total={photos.length}
          defaultPageSize={itemsPerPage}
          onChange={handlePageChange}
          showSizeChanger={false}
        />
      </div>
    </>
  ) : (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "50vh",
      }}
    >
      <div>
        There are no images to display with the current filters. Please update
        the filters and try again.
      </div>
    </div>
  );

  const display = loading ? (
    <div
      style={{
        height: "80vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Spin size="large" tip="Looking for images" />
    </div>
  ) : (
    photoDisplay
  );

  return display;
};
