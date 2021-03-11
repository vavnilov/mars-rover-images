export interface State {
  date?: string | null;
  rover?: string | null;
  camera?: string | null;
  loading?: boolean;
}

export interface Action {
  type: string;
  payload?: string;
}

export interface Photos {
  photos: Photo[];
}

export interface Photo {
  img_src: string;
}

export interface Photo_Manifest {
  photo_manifest: RoverInfo;
}

export interface RoverInfo {
  name: string;
  landing_date: string;
  launch_date: string;
  status: string;
  max_date: string;
  total_photos: number;
}
