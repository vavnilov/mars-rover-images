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
