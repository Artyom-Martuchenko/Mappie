export type actionType = "delete" | "add";

export interface Element {
  name: string;
  img: string;
  id: number;
  active: boolean;
  kinds: string;
}
