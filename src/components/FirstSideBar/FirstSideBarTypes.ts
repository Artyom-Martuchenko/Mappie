interface Mode {
  saved: boolean;
  search: boolean;
}

export interface Prop {
  savedHandler: (arg: string) => void;
  mode: Mode;
}

