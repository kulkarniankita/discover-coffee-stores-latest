export type CoffeeStoreType = {
  id: string;
  name: string;
  imgUrl: string;
  address: string;
  voting: number;
};

export type MapboxType = {
  id: string;
  properties: {
    address: string;
  };
  text: string;
};

export type AirtableRecordType = {
  id: string;
  recordId: string;
  fields: CoffeeStoreType;
};
