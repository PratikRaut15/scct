const mysql = require("mysql");

module.exports.insertCheckPointMasterQuery = function(connection,req){
    if(connection){

        let sql = "INSERT INTO checkpointmaster(checkPointMasterId, checkPointName, checkPointCode, checkPointCategory, circularLatLong, polygonalLatLong, description, customerNo, createdBy, createdOn, updatedBy, updatedOn, isDeleted)VALUES (null,'"+req.body.checkPointName+"','"+req.body.checkPointCode+"','"+req.body.checkPointCategory+"','"+req.body.circularLatLong+"','"+req.body.polygonalLatLong+"','"+req.body.description+"','"+req.body.customerNo+"','"+req.body.createdBy+"','"+req.body.createdOn+"','"+req.body.updatedBy+"','"+req.body.updatedOn+"','"+req.body.isDeleted+"')";
        return sql;
    }
}

module.exports.updateCheckPointMasterQuery = function(connection,req){
    if(connection){

        let where = " Where 1 = 1 and checkPointMasterId = '"+req.body.checkPointMasterId+"' ";
        let sql = "update checkPointMaster set ";

        if(typeof req.body.checkPointName !="undefined" && req.body.checkPointName !=""){
            sql += "checkPointName = '"+req.body.checkPointName+"'";
            //where += " and checkPointName = '"+req.body.checkPointName+"'";
        }

        if(typeof req.body.checkPointCode !="undefined" && req.body.checkPointCode !=""){
            sql += ",checkPointCode = '"+req.body.checkPointCode+"'";
           // where += " and checkPointCode = '"+req.body.checkPointCode+"'";
        }

        if(typeof req.body.checkPointCategory !="undefined" && req.body.checkPointCategory !=""){
            sql += ",checkPointCategory = '"+req.body.checkPointCategory+"'";
          //  where += " and checkPointCategory = '"+req.body.checkPointCategory+"'";
        }

      

        if(typeof req.body.circularLatLong !="undefined" && req.body.circularLatLong !=""){
            sql += "circularLatLong = '"+req.body.circularLatLong+"'";
        }

        if(typeof req.body.polygonalLatLong !="undefined" && req.body.polygonalLatLong !=""){
            sql += ",polygonalLatLong = '"+req.body.polygonalLatLong+"'";
        }

        if(typeof req.body.description !="undefined" && req.body.description !=""){
            sql += ",description = '"+req.body.description+"'";
        }

        sql += where;
        
        return sql;
    }
}

module.exports.deleteCheckPointMasterQuery = function(connection,req){
    if(connection){
        let where = " Where 1 = 1 and checkPointMasterId = '"+req.body.checkPointMasterId+"' ";
        let sql = "delete from checkPointMaster  ";
        sql += where;
        return sql;
    }
}

module.exports.getCheckPointMasterQuery = function(connection,req){
    if(connection){
        let where = " Where 1 = 1 and checkPointMasterId = '"+req.body.checkPointMasterId+"' ";
        let sql = "SELECT * from checkPointMaster ";
        sql += where;
        return sql;
    }
}

module.exports.insertRouteMasterQuery = function(connection,req){
    if(connection){

        let sql = "INSERT INTO `routemaster` (`routeMasterId`, `routeCode`, `routeName`, `description`, `routeTat`, `customerNo`, `createdBy`, `createdOn`, `updatedBy`, `updatedOn`, `isDeleted`) VALUES (NULL, '"+req.body.routeCode+"', '"+req.body.routeName+"', '"+req.body.description+"', '"+req.body.routeTat+"', '"+req.body.customerNo+"', '"+req.body.createdBy+"', '"+req.body.createdOn+"', '"+req.body.updatedBy+"', '"+req.body.updatedOn+"', '"+req.body.isDeleted+"');"
        return sql;
    }
}

module.exports.updateRouteMasterQuery = function(connection,req){
    if(connection){

        let where = " Where 1 = 1 and routeMasterId = '"+req.body.routeMasterId+"' ";
        let sql = "update routemaster set ";

        if(typeof req.body.routeName !="undefined" && req.body.routeName !=""){
            sql += "routeName = '"+req.body.routeName+"'";
            //where += " and checkPointName = '"+req.body.checkPointName+"'";
        }

        if(typeof req.body.routeCode !="undefined" && req.body.routeCode !=""){
            sql += ",routeCode = '"+req.body.routeCode+"'";
           // where += " and checkPointCode = '"+req.body.checkPointCode+"'";
        }

        if(typeof req.body.routeTat !="undefined" && req.body.routeTat !=""){
            sql += ",routeTat = '"+req.body.routeTat+"'";
          //  where += " and checkPointCategory = '"+req.body.checkPointCategory+"'";
        }
        
        if(typeof req.body.customerNo !="undefined" && req.body.customerNo !=""){
            sql += ",customerNo = '"+req.body.customerNo+"'";
        }

        if(typeof req.body.createdBy !="undefined" && req.body.createdBy !=""){
            sql += ",createdBy = '"+req.body.createdBy+"'";
        }

        if(typeof req.body.createdOn !="undefined" && req.body.createdOn !=""){
            sql += ",createdOn = '"+req.body.createdOn+"'";
        }

        if(typeof req.body.updatedOn !="undefined" && req.body.updatedOn !=""){
            sql += ",updatedOn = '"+req.body.updatedOn+"'";
        }

        if(typeof req.body.updatedBy !="undefined" && req.body.updatedBy !=""){
            sql += ",updatedBy = '"+req.body.updatedBy+"'";
        }

        if(typeof req.body.isDeleted !="undefined" && req.body.isDeleted !=""){
            sql += ",isDeleted = '"+req.body.isDeleted+"'";
        }

        sql += where;
        
        return sql;
    }
}

module.exports.deleteRouteMasterQuery = function(connection,req){
    if(connection){
        let where = " Where 1 = 1 and routeMasterId = '"+req.body.routeMasterId+"' ";
        let sql = "delete from routemaster  ";
        sql += where;
        return sql;
    }
}

module.exports.getRouteMasterQuery = function(connection,req){
    if(connection){
        let where = " Where 1 = 1 and routeMasterId = '"+req.body.routeMasterId+"' ";
        let sql = "SELECT * from routemaster ";
        sql += where;
        return sql;
    }
}

module.exports.insertShipmentMasterQuery = function(connection,req){
    if(connection){

        let sql = "INSERT INTO `shipment` (`shipmentId`, `shipmentNo`, `customerNo`, `createdBy`, `createdOn`, `updatedBy`, `updatedOn`, `isDeleted`) VALUES (NULL, '"+req.body.shipmentNo+"', '"+req.body.customerNo+"', '"+req.body.createdBy+"', '"+req.body.createdOn+"', '"+req.body.updatedBy+"', '"+req.body.updatedOn+"', '"+req.body.isDeleted+"');";
        return sql;
    }
}

module.exports.updateShipmentMasterQuery = function(connection,req){
    if(connection){

        let where = " Where 1 = 1 and shipmentId = '"+req.body.shipmentId+"' ";
        let sql = "update shipment set ";

        if(typeof req.body.shipmentNo !="undefined" && req.body.shipmentNo !=""){
            sql += "shipmentNo = '"+req.body.shipmentNo+"'";
            //where += " and checkPointName = '"+req.body.checkPointName+"'";
        }
        
        if(typeof req.body.customerNo !="undefined" && req.body.customerNo !=""){
            sql += ",customerNo = '"+req.body.customerNo+"'";
        }

        if(typeof req.body.createdBy !="undefined" && req.body.createdBy !=""){
            sql += ",createdBy = '"+req.body.createdBy+"'";
        }

        if(typeof req.body.createdOn !="undefined" && req.body.createdOn !=""){
            sql += ",createdOn = '"+req.body.createdOn+"'";
        }

        if(typeof req.body.updatedOn !="undefined" && req.body.updatedOn !=""){
            sql += ",updatedOn = '"+req.body.updatedOn+"'";
        }

        if(typeof req.body.updatedBy !="undefined" && req.body.updatedBy !=""){
            sql += ",updatedBy = '"+req.body.updatedBy+"'";
        }

        if(typeof req.body.isDeleted !="undefined" && req.body.isDeleted !=""){
            sql += ",isDeleted = '"+req.body.isDeleted+"'";
        }

        sql += where;
        
        return sql;
    }
}

module.exports.deleteShipmentMasterQuery = function(connection,req){
    if(connection){
        let where = " Where 1 = 1 and shipmentId = '"+req.body.shipmentId+"' ";
        let sql = "delete from shipment  ";
        sql += where;
        return sql;
    }
}

module.exports.getShipmentMasterQuery = function(connection,req){
    if(connection){
        let where = " Where 1 = 1 and shipmentId = '"+req.body.shipmentId+"' ";
        let sql = "SELECT * from shipment ";
        sql += where;
        return sql;
    }
}

module.exports.insertDeliveryQuery = function(connection,req){
    if(connection){

        let sql = "INSERT INTO `delivery` (`deliveryId`, `deliveryNo`, `customerNo`, `createdBy`, `createdOn`, `updatedBy`, `updatedOn`, `isDeleted`) VALUES (NULL, '"+req.body.deliveryNo+"', '"+req.body.customerNo+"', '"+req.body.createdBy+"', '"+req.body.createdOn+"', '"+req.body.updatedBy+"', '"+req.body.updatedOn+"', '"+req.body.isDeleted+"');";
        return sql;
    }
}

module.exports.updateDeliveryQuery = function(connection,req){
    if(connection){

        let where = " Where 1 = 1 and deliveryId = '"+req.body.deliveryId+"' ";
        let sql = "update delivery set ";

        if(typeof req.body.deliveryNo !="undefined" && req.body.deliveryNo !=""){
            sql += "deliveryNo = '"+req.body.deliveryNo+"'";
            //where += " and checkPointName = '"+req.body.checkPointName+"'";
        }
        
        if(typeof req.body.customerNo !="undefined" && req.body.customerNo !=""){
            sql += ",customerNo = '"+req.body.customerNo+"'";
        }

        if(typeof req.body.createdBy !="undefined" && req.body.createdBy !=""){
            sql += ",createdBy = '"+req.body.createdBy+"'";
        }

        if(typeof req.body.createdOn !="undefined" && req.body.createdOn !=""){
            sql += ",createdOn = '"+req.body.createdOn+"'";
        }

        if(typeof req.body.updatedOn !="undefined" && req.body.updatedOn !=""){
            sql += ",updatedOn = '"+req.body.updatedOn+"'";
        }

        if(typeof req.body.updatedBy !="undefined" && req.body.updatedBy !=""){
            sql += ",updatedBy = '"+req.body.updatedBy+"'";
        }

        if(typeof req.body.isDeleted !="undefined" && req.body.isDeleted !=""){
            sql += ",isDeleted = '"+req.body.isDeleted+"'";
        }

        sql += where;
        
        return sql;
    }
}

module.exports.deleteDeliveryQuery = function(connection,req){
    if(connection){
        let where = " Where 1 = 1 and deliveryId = '"+req.body.deliveryId+"' ";
        let sql = "delete from delivery  ";
        sql += where;
        return sql;
    }
}

module.exports.getDeliveryQuery = function(connection,req){
    if(connection){
        let where = " Where 1 = 1 and deliveryId = '"+req.body.deliveryId+"' ";
        let sql = "SELECT * from delivery ";
        sql += where;
        return sql;
    }
}

module.exports.insertDriverMasterQuery = function(connection,req){
    if(connection){
        let sql = "INSERT INTO `drivermaster` (`driverMasterId`, `DriverName`, `DriverMobileNo`, `DriverLicenseNo`, `simCardProvider`, `customerNo`, `createdBy`, `createdOn`, `updatedBy`, `updatedOn`, `isDeleted`) VALUES (NULL, '"+req.body.DriverName+"', '"+req.body.DriverMobileNo+"', '"+req.body.DriverLicenseNo+"', '"+req.body.simCardProvider+"', '"+req.body.customerNo+"', '"+req.body.createdBy+"', '"+req.body.createdOn+"', '"+req.body.updatedBy+"', '"+req.body.updatedOn+"', '"+req.body.isDeleted+"');";
        return sql;
    }
}

module.exports.updateDriverMasterQuery = function(connection,req){
    if(connection){

        let where = " Where 1 = 1 and driverMasterId = '"+req.body.driverMasterId+"' ";
        let sql = "update drivermaster set ";

        if(typeof req.body.DriverName !="undefined" && req.body.DriverName !=""){
            sql += "DriverName = '"+req.body.DriverName+"'";
        }

        if(typeof req.body.DriverMobileNo !="undefined" && req.body.DriverMobileNo !=""){
            sql += ", DriverMobileNo = '"+req.body.DriverMobileNo+"'";
        }

        if(typeof req.body.DriverLicenseNo !="undefined" && req.body.DriverLicenseNo !=""){
            sql += ", DriverLicenseNo = '"+req.body.DriverLicenseNo+"'";
        }

        if(typeof req.body.simCardProvider !="undefined" && req.body.simCardProvider !=""){
            sql += ", simCardProvider = '"+req.body.simCardProvider+"'";
        }
        
        if(typeof req.body.customerNo !="undefined" && req.body.customerNo !=""){
            sql += ",customerNo = '"+req.body.customerNo+"'";
        }

        if(typeof req.body.createdBy !="undefined" && req.body.createdBy !=""){
            sql += ",createdBy = '"+req.body.createdBy+"'";
        }

        if(typeof req.body.createdOn !="undefined" && req.body.createdOn !=""){
            sql += ",createdOn = '"+req.body.createdOn+"'";
        }

        if(typeof req.body.updatedOn !="undefined" && req.body.updatedOn !=""){
            sql += ",updatedOn = '"+req.body.updatedOn+"'";
        }

        if(typeof req.body.updatedBy !="undefined" && req.body.updatedBy !=""){
            sql += ",updatedBy = '"+req.body.updatedBy+"'";
        }

        if(typeof req.body.isDeleted !="undefined" && req.body.isDeleted !=""){
            sql += ",isDeleted = '"+req.body.isDeleted+"'";
        }

        sql += where;
        
        return sql;
    }
}

module.exports.deleteDeliveryQuery = function(connection,req){
    if(connection){
        let where = " Where 1 = 1 and driverMasterId = '"+req.body.driverMasterId+"' ";
        let sql = "delete from drivermaster  ";
        sql += where;
        return sql;
    }
}

module.exports.getDriverMasterQuery = function(connection,req){
    if(connection){
        let where = " Where 1 = 1 and driverMasterId = '"+req.body.driverMasterId+"' ";
        let sql = "SELECT * from drivermaster ";
        sql += where;
        return sql;
    }
}

module.exports.insertShipmentDeliveryMappingQuery = function(connection,req){
    if(connection){
        let sql = "INSERT INTO `shipmentdeliverymapping` (`shipmentDeliveryMappingId`, `shipmentId`, `deliveryId`,  `customerNo`, `createdBy`, `createdOn`, `updatedBy`, `updatedOn`, `isDeleted`) VALUES (NULL, '"+req.body.shipmentId+"', '"+req.body.deliveryId+"', '"+req.body.customerNo+"', '"+req.body.createdBy+"', '"+req.body.createdOn+"', '"+req.body.updatedBy+"', '"+req.body.updatedOn+"', '"+req.body.isDeleted+"');";
        return sql;
    }
}

module.exports.updateShipmentDeliveryMappingQuery = function(connection,req){
    if(connection){

        let where = " Where 1 = 1 and shipmentDeliveryMappingId = '"+req.body.shipmentDeliveryMappingId+"' ";
        let sql = "update shipmentdeliverymapping set ";

        if(typeof req.body.shipmentId !="undefined" && req.body.shipmentId !=""){
            sql += "shipmentId = '"+req.body.shipmentId+"'";
        }

        if(typeof req.body.deliveryId !="undefined" && req.body.deliveryId !=""){
            sql += ", deliveryId = '"+req.body.deliveryId+"'";
        }
        
        if(typeof req.body.customerNo !="undefined" && req.body.customerNo !=""){
            sql += ",customerNo = '"+req.body.customerNo+"'";
        }

        if(typeof req.body.createdBy !="undefined" && req.body.createdBy !=""){
            sql += ",createdBy = '"+req.body.createdBy+"'";
        }

        if(typeof req.body.createdOn !="undefined" && req.body.createdOn !=""){
            sql += ",createdOn = '"+req.body.createdOn+"'";
        }

        if(typeof req.body.updatedOn !="undefined" && req.body.updatedOn !=""){
            sql += ",updatedOn = '"+req.body.updatedOn+"'";
        }

        if(typeof req.body.updatedBy !="undefined" && req.body.updatedBy !=""){
            sql += ",updatedBy = '"+req.body.updatedBy+"'";
        }

        if(typeof req.body.isDeleted !="undefined" && req.body.isDeleted !=""){
            sql += ",isDeleted = '"+req.body.isDeleted+"'";
        }

        sql += where;
        
        return sql;
    }
}

module.exports.deleteShipmentDeliveryMappingQuery = function(connection,req){
    if(connection){
        let where = " Where 1 = 1 and shipmentDeliveryMappingId = '"+req.body.shipmentDeliveryMappingId+"' ";
        let sql = "delete from shipmentdeliverymapping  ";
        sql += where;
        return sql;
    }
}

module.exports.getShipmentDeliveryMappingQuery = function(connection,req){
    if(connection){
        let where = " Where 1 = 1 and shipmentDeliveryMappingId = '"+req.body.shipmentDeliveryMappingId+"' ";
        let sql = "SELECT * from shipmentdeliverymapping ";
        sql += where;
        return sql;
    }
}


module.exports.insertTransporterMasterQuery = function(connection,req){
    if(connection){
        let sql = "INSERT INTO `transportermaster` (`transporterMasterId`, `transporterName`, `transporterCode`,  `customerNo`, `createdBy`, `createdOn`, `updatedBy`, `updatedOn`, `isDeleted`) VALUES (NULL, '"+req.body.transporterName+"', '"+req.body.transporterCode+"', '"+req.body.customerNo+"', '"+req.body.createdBy+"', '"+req.body.createdOn+"', '"+req.body.updatedBy+"', '"+req.body.updatedOn+"', '"+req.body.isDeleted+"');";
        return sql;
    }
}

module.exports.updateTransporterMasterQuery = function(connection,req){
    if(connection){

        let where = " Where 1 = 1 and transporterMasterId = '"+req.body.transporterMasterId+"' ";
        let sql = "update transportermaster set ";

        if(typeof req.body.transporterName !="undefined" && req.body.transporterName !=""){
            sql += "transporterName = '"+req.body.transporterName+"'";
        }

        if(typeof req.body.transporterCode !="undefined" && req.body.transporterCode !=""){
            sql += ", transporterCode = '"+req.body.transporterCode+"'";
        }
        
        if(typeof req.body.customerNo !="undefined" && req.body.customerNo !=""){
            sql += ",customerNo = '"+req.body.customerNo+"'";
        }

        if(typeof req.body.createdBy !="undefined" && req.body.createdBy !=""){
            sql += ",createdBy = '"+req.body.createdBy+"'";
        }

        if(typeof req.body.createdOn !="undefined" && req.body.createdOn !=""){
            sql += ",createdOn = '"+req.body.createdOn+"'";
        }

        if(typeof req.body.updatedOn !="undefined" && req.body.updatedOn !=""){
            sql += ",updatedOn = '"+req.body.updatedOn+"'";
        }

        if(typeof req.body.updatedBy !="undefined" && req.body.updatedBy !=""){
            sql += ",updatedBy = '"+req.body.updatedBy+"'";
        }

        if(typeof req.body.isDeleted !="undefined" && req.body.isDeleted !=""){
            sql += ",isDeleted = '"+req.body.isDeleted+"'";
        }

        sql += where;
        
        return sql;
    }
}

module.exports.deleteTransporterMasterQuery = function(connection,req){
    if(connection){
        let where = " Where 1 = 1 and transporterMasterId = '"+req.body.transporterMasterId+"' ";
        let sql = "delete from transportermaster  ";
        sql += where;
        return sql;
    }
}

module.exports.getTransporterMasterQuery = function(connection,req){
    if(connection){
        let where = " Where 1 = 1 and transporterMasterId = '"+req.body.transporterMasterId+"' ";
        let sql = "SELECT * from transportermaster ";
        sql += where;
        return sql;
    }
}

module.exports.insertRouteCheckpointMappingQuery = function(connection,req){
    if(connection){
        let sql = "INSERT INTO `routecheckpointmapping` (`routeCheckPointMappingId`, `routeMasterId`, `checkPointMasterId`, `eta`, `etd`, `customerNo`, `createdBy`, `createdOn`, `updatedBy`, `updatedOn`, `isDeleted`) VALUES (NULL, '"+req.body.routeMasterId+"', '"+req.body.checkPointMasterId+"', '"+req.body.eta+"','"+req.body.etd+"','"+req.body.customerNo+"', '"+req.body.createdBy+"', '"+req.body.createdOn+"', '"+req.body.updatedBy+"', '"+req.body.updatedOn+"', '"+req.body.isDeleted+"');";
        return sql;
    }
}

module.exports.updateRouteCheckpointMappingQuery = function(connection,req){
    if(connection){

        let where = " Where 1 = 1 and routeCheckPointMappingId = '"+req.body.routeCheckPointMappingId+"' ";
        let sql = "update routecheckpointmapping set ";

        if(typeof req.body.routeMasterId !="undefined" && req.body.routeMasterId !=""){
            sql += "routeMasterId = '"+req.body.routeMasterId+"'";
        }

        if(typeof req.body.checkPointMasterId !="undefined" && req.body.checkPointMasterId !=""){
            sql += ", checkPointMasterId = '"+req.body.checkPointMasterId+"'";
        }

        if(typeof req.body.eta !="undefined" && req.body.eta !=""){
            sql += ", eta = '"+req.body.eta+"'";
        }

        if(typeof req.body.etd !="undefined" && req.body.etd !=""){
            sql += ", etd = '"+req.body.etd+"'";
        }
        
        if(typeof req.body.customerNo !="undefined" && req.body.customerNo !=""){
            sql += ",customerNo = '"+req.body.customerNo+"'";
        }

        if(typeof req.body.createdBy !="undefined" && req.body.createdBy !=""){
            sql += ",createdBy = '"+req.body.createdBy+"'";
        }

        if(typeof req.body.createdOn !="undefined" && req.body.createdOn !=""){
            sql += ",createdOn = '"+req.body.createdOn+"'";
        }

        if(typeof req.body.updatedOn !="undefined" && req.body.updatedOn !=""){
            sql += ",updatedOn = '"+req.body.updatedOn+"'";
        }

        if(typeof req.body.updatedBy !="undefined" && req.body.updatedBy !=""){
            sql += ",updatedBy = '"+req.body.updatedBy+"'";
        }

        if(typeof req.body.isDeleted !="undefined" && req.body.isDeleted !=""){
            sql += ",isDeleted = '"+req.body.isDeleted+"'";
        }

        sql += where;
        
        return sql;
    }
}

module.exports.deleteRouteCheckpointMappingQuery = function(connection,req){
    if(connection){
        let where = " Where 1 = 1 and routeCheckPointMappingId = '"+req.body.routeCheckPointMappingId+"' ";
        let sql = "delete from routecheckpointmapping  ";
        sql += where;
        return sql;
    }
}

module.exports.getRouteCheckpointMappingQuery = function(connection,req){
    if(connection){
        let where = " Where 1 = 1 and routeCheckPointMappingId = '"+req.body.routeCheckPointMappingId+"' ";
        let sql = "SELECT * from routecheckpointmapping ";
        sql += where;
        return sql;
    }
}



















