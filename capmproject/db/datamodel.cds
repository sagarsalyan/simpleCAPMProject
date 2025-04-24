namespace capmproject.db;
using { managed } from '@sap/cds/common';

type Integer16 : Integer @edm.Type : 'Int16';

entity teachers: managed {
    key teacherid: Integer16;
    teachername : String(120);
    dob : Date;
    address: String(200);
    toteachersubjects: Association to many teachersubjects on toteachersubjects.teacherid = $self.teacherid;
    toteacherbatches: Association to many teacherbatches on toteacherbatches.teacherid = $self.teacherid;
}


entity subjects: managed {
    key subjectid: Integer16;
    subjectname: String(50);
    subjectgroup: String(50);
}

entity batches: managed {
    key batchid: Integer16;
    batchname: String(50);
    batchtype: String(50);
}

entity teachersubjects: managed {
    key teachersubjectid: Integer16;
    teacherid: Integer16;
    subjectid: Integer16;
}

entity teacherbatches: managed {
    key teacherbatchid: Integer16;
    teacherid: Integer16;
    batchid: Integer16;
}



entity orders : managed {
    key orderid : Integer16;
    customername : String(120);
    contactperson : String(180) not null;
    grossamount : Decimal(10, 2);
    currency : String(4) not null;
}