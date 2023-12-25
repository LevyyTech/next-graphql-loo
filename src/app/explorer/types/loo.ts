export type LooBase = {
  id: string;
  name: string;
  area: { name: string }[];
};

export interface Loo extends LooBase {
  accessible: boolean | null;
  automatic: boolean | null;
  allGender: boolean | null;
  babyChange: boolean | null;
  men: boolean | null;
  women: boolean | null;
  noPayment: boolean | null;
  urinalOnly: boolean | null;
  openingTimes: Array<[string, string]> | null;
}
