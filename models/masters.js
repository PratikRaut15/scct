const mysql = require("mysql");

module.exports.insertCheckPointMasterQuery = function(connection,req){
    if(connection){

        let sql = "INSERT INTO checkpointmaster(checkPointMasterId, checkPointName, checkPointCode, checkPointCategory, circularLatLong, polygonalLatLong, description, customerNo, createdBy, createdOn, updatedBy, updatedOn, isDeleted)VALUES (null,'"+req.body.checkPointName+"','"+req.body.checkPointCode+"','"+req.body.checkPointCategory+"','"+req.body.circularLatLong+"','"+req.body.polygonalLatLong+"','"+req.body.description+"','"+req.body.customerNo+"','"+req.body.createdBy+"','"+req.body.createdOn+"','"+req.body.updatedBy+"','"+req.body.updatedOn+"','"+req.body.isDeleted+"')";
        return sql;
    }
}