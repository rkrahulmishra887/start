const path = require("path");

//const util = require("util");
const { log } = require("util");

//const v8 = require("v8");
const { getHeapStatistics } = require("v8");

//util.log(path.basename(__filename));

//util.log(" ^ The name of the current file \n\n");


//util.log(v8.getHeapStatistics());
//It will give same output as previous
log(getHeapStatistics());
