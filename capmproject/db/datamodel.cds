namespace capmproject.db;
using { managed } from '@sap/cds/common';

type Integer16 : Integer @edm.Type : 'Int16';

entity orders : managed {
    key orderid : Integer16;
    customername : String(120);
    contactperson : String(180) not null;
    grossamount : Decimal(10, 2);
    currency : String(4) not null;
}