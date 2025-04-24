using { capmproject.db as capmproject } from '../db/datamodel';

@path: '/sap/opu/odata/sap/API_SALES_ORDER'
service myservice1 {
    entity OrderSet as projection on capmproject.orders;
    function getService1Data (to:String) returns String;
}

service myservice2 {
    function getService2Data (to:String) returns String;
}