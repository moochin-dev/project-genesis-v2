export type TEST_HISTORY = {
  id?: number;
  date?: string;
  source?: SOURCE;
};

export type SOURCE = {
  name: string;
  id?: number;
  address?: string;
  tests?: TEST_HISTORY[];
};

export type BRAND = {
  id: number;
  name: string;
  image_url: string;
  purchase_link?: string;
  company: string;
  released_date?: string;
  price: number;
  sources: SOURCE[];
  passed: boolean;
};
