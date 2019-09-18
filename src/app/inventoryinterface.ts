export interface Iinventory {
  productname: string;
  category: string;
  availableunits: number;
  unitprice: number;
  tags: string;
  lastupated: string;
  location: [{area: string; zone: string; shelf: string; }
];
  description: string;
  id: string;
}
