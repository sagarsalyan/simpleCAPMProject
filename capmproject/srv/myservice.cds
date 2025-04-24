using { capmproject.db as capmproject } from '../db/datamodel';


@path: '/sap/opu/odata/sap/API_TEACHERS_DATA'
service teachersservice {
    entity TeacherSet as projection on capmproject.teachers;
    entity SubjectSet as projection on capmproject.subjects;
    entity BatchSet as projection on capmproject.batches;
    entity TeacherBatchSet as projection on capmproject.teacherbatches;
    entity TeacherSubjectSet as projection on capmproject.teachersubjects;
}

@path: '/sap/opu/odata/sap/API_SALES_ORDER'
service myservice1 {
    entity OrderSet as projection on capmproject.orders;
    function getService1Data (to:String) returns String;
}

service myservice2 {
    function getService2Data (to:String) returns String;
}