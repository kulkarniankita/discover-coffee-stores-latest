export type CoffeeStoreType = {
  id: string;
  name: string;
  imgUrl: string;
  address: string;
};

export type MapboxType = {
  id: string;
  properties: {
    address: string;
  };
  text: string;
};
