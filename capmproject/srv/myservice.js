//module.exports is an instruction to Node.js to export first function
//below to be exported so that other files can access the first function defined

module.exports = {
    myservice1: (myservice1) => {
        myservice1.on('getService1Data', req => 'Service 1 Called');
    },
    myservice2: (myservice2) => {
        myservice2.on('getService2Data', req => 'Service 2 Called');
    }
};
    

