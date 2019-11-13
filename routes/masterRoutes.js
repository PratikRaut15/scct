const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const jwt = require('jsonwebtoken');
const auth = require('../middleware/auth');
const db = require('../config/db'); 
const mastersModel = require('../models/masters');

router.post('/',(req, res) => {
    res.json({"msg" : "Welcome to API"});
});

// Checkpoint Master Starts from here 
router.post('/createCheckPointMaster',function(req, res,next) {
    db.connection.connect(function(err){
        if(!err){
            const checkPointName = req.body.checkPointName;
            const checkPointCode = req.body.checkPointCode;
            const checkPointCategory = req.body.checkPointCategory;
            const circularLatLong = req.body.circularLatLong;
            const polygonalLatLong = req.body.polygonalLatLong;
            const description = req.body.description;
            const customerNo = req.body.customerNo;
            const createdBy = req.body.createdBy;
            const createdOn = req.body.createdOn;
            const updatedBy = req.body.updatedBy;
            const updatedOn = req.body.updatedOn;
            const isDeleted = req.body.isDeleted;
            var err = {};
            var validation = []; 

            if(typeof checkPointName == 'undefined' || checkPointName ==""){
                
                res.json({
                    "code": 204,
                    "message": "checkPointName is missing"
                });
                
            } 

            if(typeof checkPointCode == 'undefined' || checkPointCode ==""){
                res.json({
                    "code": 204,
                    "message": "checkPointCode is missing"
                });
            } 
            if(typeof checkPointCategory == 'undefined' || checkPointCategory ==""){
                res.json({
                    "code": 204,
                    "message": "checkPointCategory is missing"
                });
            } 

            if(typeof circularLatLong == 'undefined' || circularLatLong ==""){
                res.json({
                    "code": 204,
                    "message": "circularLatLong is missing"
                });
            } 
            if(typeof polygonalLatLong == 'undefined' || polygonalLatLong ==""){
                res.json({
                    "code": 204,
                    "message": "polygonalLatLong is missing"
                });
            }
            if(typeof description == 'undefined' || description ==""){
                res.json({  
                    "code": 204,
                    "message": "description is missing"
                });
            } 
            if(typeof customerNo == 'undefined' || customerNo ==""){
                res.json({ 
                    "code": 204,
                    "message": "customerNo is missing"
                });
            }
            if(typeof createdBy == 'undefined' || createdBy ==""){
                res.json({
                    "code": 204,
                    "message": "createdBy is missing"
                });
            } 
            if(typeof createdOn == 'undefined' || createdOn ==""){
                res.json({
                    "code": 204,
                    "message": "createdOn is missing"
                });
            }
            if(typeof updatedBy == 'undefined' || updatedBy ==""){
                res.json({  
                    "code": 204,
                    "message": "updatedBy is missing"
                });
            } 
            if(typeof isDeleted == 'undefined' || isDeleted ==""){
                res.json({
                    "code": 204,
                    "message": "isDeleted is missing"
                });
            }

            

            if(Object.keys(err).length > 0){
                console.log(err);
            }else{
                // Inserting into MysqlDb
                const sql = mastersModel.insertCheckPointMasterQuery(db.connection,req);

                db.connection.query(sql,function(err, rows, fields){
                    if (err) throw err;
                    res.json({
                        "code":200,
                        "success":"Inserted",
                        "result" : rows

                    });
                });
            }
        } else {
            console.log("Something went wrong");
            res.json({"msg" : "0"});
        }
    });
});

router.post('/updateCheckPointMaster',function(req,res){
    const checkPointMasterId = req.body.checkPointMasterId;
    const checkPointName = req.body.checkPointName;
    var err = {};
    var validation = []; 
    console.log(req.body);
    

    if(typeof checkPointMasterId == 'undefined' || checkPointMasterId ==""){
        res.json({  
            "code": 204,
            "message": "checkPointMasterId is missing"
        });
    } 
    if(typeof checkPointName == 'undefined' || checkPointName ==""){
        res.json({  
            "code": 204,
            "message": "checkPointName is missing"
        });
    }
    const result = mastersModel.updateCheckPointMasterQuery(db.connection,req);
    
    db.connection.query(result,function(err, rows, fields){
        if (err) {
            res.json({
                "code":404,
                "success":"Not Found",
                "result" : err
            });
        }
        if(typeof rows.affectedRows !="undefined" && rows.affectedRows > 0 ){
            res.json({
                "code":200,
                "success":"updated succesfully",
                "result" : rows.affectedRows + " record has been updated Successfully"
            });
        }

       else if(typeof rows.affectedRows !=="undefined" && rows.affectedRows === 0 ){
           res.json({
                "code":404,
                "success":false,
                "result" : rows.affectedRows + " record not found"
            });
       }

    });
});

router.post('/deleteCheckPointMaster',function(req,res){
    const checkPointMasterId = req.body.checkPointMasterId;
    var err = {};
    var validation = [];
    if(typeof req.body.checkPointMasterId == 'undefined' || req.body.checkPointMasterId ==""){
        res.json({  
            "code": 204,
            "message": "checkPointMasterId is missing"
        });
    } 
  
    const result = mastersModel.deleteCheckPointMasterQuery(db.connection,req);
    db.connection.query(result,function(err, rows, fields){
        if (err) {
            res.json({
                "code":404,
                "success":"Not Found",
                "result" : err
            });
        }
        
        if(typeof rows.affectedRows !="undefined" && rows.affectedRows > 0 ){
            res.json({
                "code":200,
                "success":"Record has been Deleted",
                "result" : rows
            });
        }

       else if(typeof rows.affectedRows !=="undefined" && rows.affectedRows === 0 ){
           res.json({
                "code":404,
                "success":"Records Not Found",
                "result" : rows
            });
       }

    });
});


router.post('/getCheckPointMaster',function(req,res){
    const checkPointMasterId = req.body.checkPointMasterId;
    var err = {};
    var validation = [];
    if(typeof req.body.checkPointMasterId == 'undefined' || req.body.checkPointMasterId ==""){
        res.json({  
            "code": 204,
            "message": "checkPointMasterId is missing"
        });
    } 
  
    const result = mastersModel.getCheckPointMasterQuery(db.connection,req);
    db.connection.query(result,function(err, rows, fields){
        if (err) {
            res.json({
                "code":404,
                "success":"Not Found",
                "result" : err
            });
        }
        console.log(rows.length);
        if(typeof rows!="undefined" && rows.length > 0){
            res.json({
                "code":200,
                "success":true,
                "result" : rows
            });
        }

       else if(typeof rows !="undefined" && rows.length === 0 ){
           res.json({
                "code":404,
                "success":false,
                "result" : "Records Not Found"
            });
       }

    });
});   

// Checkpoint Master Ends Here 

// Route Master Starts from here 

router.post('/createRouteMaster',function(req, res,next) {
    const routeCode = req.body.routeCode;
    const routeName = req.body.routeName;
    const description = req.body.description;
    const routeTat = req.body.routeTat;
    const customerNo = req.body.customerNo;
    const createdBy = req.body.createdBy;
    const createdOn = req.body.createdOn;
    const updatedBy = req.body.updatedBy;
    const updatedOn = req.body.updatedOn;
    const isDeleted = req.body.isDeleted;
    var err = {};
    var validation = []; 

    if(typeof routeCode == 'undefined' || routeCode ==""){
        res.json({ 
            "code": 204,
            "message": "routeCode is missing"
        });
    }

    if(typeof routeName == 'undefined' || routeName ==""){
        res.json({ 
            "code": 204,
            "message": "routeName is missing"
        });
    }

    if(typeof description == 'undefined' || description ==""){
        res.json({ 
            "code": 204,
            "message": "description is missing"
        });
    }

    if(typeof routeTat == 'undefined' || routeTat ==""){
        res.json({ 
            "code": 204,
            "message": "routeTat is missing"
        });
    }

    if(typeof customerNo == 'undefined' || customerNo ==""){
        res.json({ 
            "code": 204,
            "message": "customerNo is missing"
        });
    }
    if(typeof createdBy == 'undefined' || createdBy ==""){
        res.json({
            "code": 204,
            "message": "createdBy is missing"
        });
    } 
    if(typeof createdOn == 'undefined' || createdOn ==""){
        res.json({
            "code": 204,
            "message": "createdOn is missing"
        });
    }
    if(typeof updatedBy == 'undefined' || updatedBy ==""){
        res.json({  
            "code": 204,
            "message": "updatedBy is missing"
        });
    } 
    if(typeof isDeleted == 'undefined' || isDeleted ==""){
        res.json({
            "code": 204,
            "message": "isDeleted is missing"
        });
    }

    db.connection.connect(function(err){
        if(err){
            res.json({
                "code": 204,
                "message": "Something went wrong with Database"
            });
        }else{
            const sql = mastersModel.insertRouteMasterQuery(db.connection,req);
            console.log(sql);
            db.connection.query(sql,function(err, rows, fields){
                if (err) throw err;
                res.json({
                    "code":200,
                    "success":"Inserted",
                    "result" : rows
                });
            });
        }
       
    });   
});

router.post('/updateRouteMaster',function(req, res,next) {
    const routeMasterId = req.body.routeMasterId;
    const routeName = req.body.routeName;
    var err = {};
    var validation = []; 
    console.log(req.body);
    

    if(typeof routeMasterId == 'undefined' || routeMasterId ==""){
        res.json({  
            "code": 204,
            "message": "routeMasterId is missing"
        });
    } 
    if(typeof routeName == 'undefined' || routeName ==""){
        res.json({  
            "code": 204,
            "message": "routeName is missing"
        });
    }
    const result = mastersModel.updateRouteMasterQuery(db.connection,req);
    db.connection.query(result,function(err, rows, fields){
        if (err) {
            res.json({
                "code":404,
                "success":"Not Found",
                "result" : err
            });
        }
        if(typeof rows.affectedRows !="undefined" && rows.affectedRows > 0 ){
            res.json({
                "code":200,
                "success":"updated succesfully",
                "result" : rows.affectedRows + " record has been updated Successfully"
            });
        }

       else if(typeof rows.affectedRows !=="undefined" && rows.affectedRows === 0 ){
           res.json({
                "code":404,
                "success": false,
                "result" : " No record found"
            });
       }

    });
});    

router.post('/deleteRouteMaster',function(req,res){
    const routeMasterId = req.body.routeMasterId;
    var err = {};
    var validation = [];
    if(typeof req.body.routeMasterId == 'undefined' || req.body.routeMasterId ==""){
        res.json({  
            "code": 204,
            "message": "routeMasterId is missing"
        });
    } 
  
    const result = mastersModel.deleteRouteMasterQuery(db.connection,req);
    db.connection.query(result,function(err, rows, fields){
        if (err) {
            res.json({
                "code":404,
                "success":"Not Found",
                "result" : err
            });
        }
        
        if(typeof rows.affectedRows !="undefined" && rows.affectedRows > 0 ){
            res.json({
                "code":200,
                "success":"Record has been Deleted",
                "result" : rows
            });
        }

       else if(typeof rows.affectedRows !=="undefined" && rows.affectedRows === 0 ){
           res.json({
                "code":404,
                "success":"Records Not Found",
                "result" : rows
            });
       }

    });
});

router.post('/getRouteMaster',function(req,res){
    const routeMasterId = req.body.routeMasterId;
    var err = {};
    var validation = [];
    if(typeof req.body.routeMasterId == 'undefined' || req.body.routeMasterId ==""){
        res.json({  
            "code": 204,
            "message": "routeMasterId is missing"
        });
    } 
  
    const result = mastersModel.getRouteMasterQuery(db.connection,req);
    db.connection.query(result,function(err, rows, fields){
        if (err) {
            res.json({
                "code":404,
                "success":"Not Found",
                "result" : err
            });
        }
        console.log(rows.length);
        if(typeof rows!="undefined" && rows.length > 0){
            res.json({
                "code":200,
                "success":true,
                "result" : rows
            });
        }

       else if(typeof rows !="undefined" && rows.length === 0 ){
           res.json({
                "code":404,
                "success":false,
                "result" : "Records Not Found"
            });
       }

    });
}); 

// Route Master Ends Here 

// Shipment Master Starts from here 

router.post('/createShipmentMaster',function(req, res,next) {
    const shipmentNo = req.body.shipmentNo;
    const customerNo = req.body.customerNo;
    const createdBy = req.body.createdBy;
    const createdOn = req.body.createdOn;
    const updatedBy = req.body.updatedBy;
    const updatedOn = req.body.updatedOn;
    const isDeleted = req.body.isDeleted;
    var err = {};
    var validation = []; 

    if(typeof shipmentNo == 'undefined' || shipmentNo ==""){
        res.json({ 
            "code": 204,
            "message": "shipmentNo is missing"
        });
    }
    
    if(typeof customerNo == 'undefined' || customerNo ==""){
        res.json({ 
            "code": 204,
            "message": "customerNo is missing"
        });
    }
    if(typeof createdBy == 'undefined' || createdBy ==""){
        res.json({
            "code": 204,
            "message": "createdBy is missing"
        });
    } 
    if(typeof createdOn == 'undefined' || createdOn ==""){
        res.json({
            "code": 204,
            "message": "createdOn is missing"
        });
    }
    if(typeof updatedBy == 'undefined' || updatedBy ==""){
        res.json({  
            "code": 204,
            "message": "updatedBy is missing"
        });
    } 
    if(typeof isDeleted == 'undefined' || isDeleted ==""){
        res.json({
            "code": 204,
            "message": "isDeleted is missing"
        });
    }

    db.connection.connect(function(err){
        if(err){
            res.json({
                "code": 204,
                "message": "Something went wrong with Database"
            });
        }else{
            const sql = mastersModel.insertShipmentMasterQuery(db.connection,req);
            db.connection.query(sql,function(err, rows, fields){
                if (err) throw err;
                res.json({
                    "code":200,
                    "success":"Inserted",
                    "result" : rows
                });
            });
        }
       
    });   
});

router.post('/updateShipmentMaster',function(req, res,next) {
    const shipmentId = req.body.shipmentId;
    const shipmentNo = req.body.shipmentNo;
    var err = {};
    var validation = [];
    if(typeof shipmentId == 'undefined' || shipmentId ==""){
        res.json({  
            "code": 204,
            "message": "shipmentId is missing"
        });
    } 
    if(typeof shipmentNo == 'undefined' || shipmentNo ==""){
        res.json({  
            "code": 204,
            "message": "shipmentNo is missing"
        });
    }
    const result = mastersModel.updateShipmentMasterQuery(db.connection,req);
    db.connection.query(result,function(err, rows, fields){
        if (err) {
            res.json({
                "code":404,
                "success":"Not Found",
                "result" : err
            });
        }
        if(typeof rows.affectedRows !="undefined" && rows.affectedRows > 0 ){
            res.json({
                "code":200,
                "success":"updated succesfully",
                "result" : rows.affectedRows + " record has been updated Successfully"
            });
        }

       else if(typeof rows.affectedRows !=="undefined" && rows.affectedRows === 0 ){
           res.json({
                "code":404,
                "success": false,
                "result" : " No record found"
            });
       }

    });
}); 

router.post('/deleteShipmentMaster',function(req,res){
    const shipmentId = req.body.shipmentId;
    var err = {};
    var validation = [];
    if(typeof req.body.shipmentId == 'undefined' || req.body.shipmentId ==""){
        res.json({  
            "code": 204,
            "message": "shipmentId is missing"
        });
    } 
  
    const result = mastersModel.deleteShipmentMasterQuery(db.connection,req);
    db.connection.query(result,function(err, rows, fields){
        if (err) {
            res.json({
                "code":404,
                "success":"Not Found",
                "result" : err
            });
        }
        
        if(typeof rows.affectedRows !="undefined" && rows.affectedRows > 0 ){
            res.json({
                "code":200,
                "success":"Record has been Deleted",
                "result" : rows
            });
        }

       else if(typeof rows.affectedRows !=="undefined" && rows.affectedRows === 0 ){
           res.json({
                "code":404,
                "success":"Records Not Found",
                "result" : rows
            });
       }

    });
});

router.post('/getShipmentMaster',function(req,res){
    const shipmentId = req.body.shipmentId;
    var err = {};
    var validation = [];
    if(typeof req.body.shipmentId == 'undefined' || req.body.shipmentId ==""){
        res.json({  
            "code": 204,
            "message": "shipmentId is missing"
        });
    } 
  
    const result = mastersModel.getShipmentMasterQuery(db.connection,req);
    db.connection.query(result,function(err, rows, fields){
        if (err) {
            res.json({
                "code":404,
                "success":"Not Found",
                "result" : err
            });
        }
        console.log(rows.length);
        if(typeof rows!="undefined" && rows.length > 0){
            res.json({
                "code":200,
                "success":true,
                "result" : rows
            });
        }

       else if(typeof rows !="undefined" && rows.length === 0 ){
           res.json({
                "code":404,
                "success":false,
                "result" : "Records Not Found"
            });
       }

    });
});

// Shipment Master Ends here 




// Delivery starts from here 
router.post('/createDelivery',function(req, res,next) {
    const deliveryNo = req.body.deliveryNo;
    const customerNo = req.body.customerNo;
    const createdBy = req.body.createdBy;
    const createdOn = req.body.createdOn;
    const updatedBy = req.body.updatedBy;
    const updatedOn = req.body.updatedOn;
    const isDeleted = req.body.isDeleted;
    var err = {};
    var validation = []; 

    if(typeof deliveryNo == 'undefined' || deliveryNo ==""){
        res.json({ 
            "code": 204,
            "message": "deliveryNo is missing"
        });
    }
    
    if(typeof customerNo == 'undefined' || customerNo ==""){
        res.json({ 
            "code": 204,
            "message": "customerNo is missing"
        });
    }
    if(typeof createdBy == 'undefined' || createdBy ==""){
        res.json({
            "code": 204,
            "message": "createdBy is missing"
        });
    } 
    if(typeof createdOn == 'undefined' || createdOn ==""){
        res.json({
            "code": 204,
            "message": "createdOn is missing"
        });
    }
    if(typeof updatedBy == 'undefined' || updatedBy ==""){
        res.json({  
            "code": 204,
            "message": "updatedBy is missing"
        });
    } 
    if(typeof isDeleted == 'undefined' || isDeleted ==""){
        res.json({
            "code": 204,
            "message": "isDeleted is missing"
        });
    }

    db.connection.connect(function(err){
        if(err){
            res.json({
                "code": 204,
                "message": "Something went wrong with Database"
            });
        }else{
            const sql = mastersModel.insertDeliveryQuery(db.connection,req);
            db.connection.query(sql,function(err, rows, fields){
                if (err) throw err;
                res.json({
                    "code":200,
                    "success":"Inserted",
                    "result" : rows
                });
            });
        }
       
    });   
});

router.post('/updateDelivery',function(req, res,next) {
    const deliveryId = req.body.deliveryId;
    const deliveryNo = req.body.deliveryNo;
    var err = {};
    var validation = [];
    if(typeof deliveryId == 'undefined' || deliveryId ==""){
        res.json({  
            "code": 204,
            "message": "deliveryId is missing"
        });
    } 
    if(typeof deliveryNo == 'undefined' || deliveryNo ==""){
        res.json({  
            "code": 204,
            "message": "deliveryNo is missing"
        });
    }
    const result = mastersModel.updateDeliveryQuery(db.connection,req);
    db.connection.query(result,function(err, rows, fields){
        if (err) {
            res.json({
                "code":404,
                "success":"Not Found",
                "result" : err
            });
        }
        if(typeof rows.affectedRows !="undefined" && rows.affectedRows > 0 ){
            res.json({
                "code":200,
                "success":"updated succesfully",
                "result" : rows.affectedRows + " record has been updated Successfully"
            });
        }

       else if(typeof rows.affectedRows !=="undefined" && rows.affectedRows === 0 ){
           res.json({
                "code":404,
                "success": false,
                "result" : " No record found"
            });
       }

    });
}); 

router.post('/deleteDelivery',function(req,res){
    const deliveryId = req.body.deliveryId;
    var err = {};
    var validation = [];
    if(typeof req.body.deliveryId == 'undefined' || req.body.deliveryId ==""){
        res.json({  
            "code": 204,
            "message": "deliveryId is missing"
        });
    } 
  
    const result = mastersModel.deleteDeliveryQuery(db.connection,req);
    db.connection.query(result,function(err, rows, fields){
        if (err) {
            res.json({
                "code":404,
                "success":"Not Found",
                "result" : err
            });
        }
        
        if(typeof rows.affectedRows !="undefined" && rows.affectedRows > 0 ){
            res.json({
                "code":200,
                "success":"Record has been Deleted",
                "result" : rows
            });
        }

       else if(typeof rows.affectedRows !=="undefined" && rows.affectedRows === 0 ){
           res.json({
                "code":404,
                "success":"Records Not Found",
                "result" : rows
            });
       }

    });
});

router.post('/getDelivery',function(req,res){
    const deliveryId = req.body.deliveryId;
    var err = {};
    var validation = [];
    if(typeof req.body.deliveryId == 'undefined' || req.body.deliveryId ==""){
        res.json({  
            "code": 204,
            "message": "deliveryId is missing"
        });
    } 
  
    const result = mastersModel.getDeliveryQuery(db.connection,req);
    db.connection.query(result,function(err, rows, fields){
        if (err) {
            res.json({
                "code":404,
                "success":"Not Found",
                "result" : err
            });
        }
        console.log(rows.length);
        if(typeof rows!="undefined" && rows.length > 0){
            res.json({
                "code":200,
                "success":true,
                "result" : rows
            });
        }

       else if(typeof rows !="undefined" && rows.length === 0 ){
           res.json({
                "code":404,
                "success":false,
                "result" : "Records Not Found"
            });
       }

    });
});

// Delivery starts from here 

// DriverMaster starts from here 
router.post('/createDriverMaster',function(req, res,next) {
    const DriverName = req.body.DriverName;
    const DriverMobileNo = req.body.DriverMobileNo;
    const DriverLicenseNo = req.body.DriverLicenseNo;
    const simCardProvider = req.body.simCardProvider;
    const customerNo = req.body.customerNo;
    const createdBy = req.body.createdBy;
    const createdOn = req.body.createdOn;
    const updatedBy = req.body.updatedBy;
    const updatedOn = req.body.updatedOn;
    const isDeleted = req.body.isDeleted;
    var err = {};
    var validation = []; 

    if(typeof DriverName == 'undefined' || DriverName ==""){
        res.json({ 
            "code": 204,
            "message": "DriverName is missing"
        });
    }

    if(typeof DriverMobileNo == 'undefined' || DriverMobileNo ==""){
        res.json({ 
            "code": 204,
            "message": "DriverMobileNo is missing"
        });
    }

    if(typeof DriverName == 'undefined' || DriverName ==""){
        res.json({ 
            "code": 204,
            "message": "DriverName is missing"
        });
    }

    if(typeof DriverLicenseNo == 'undefined' || DriverLicenseNo ==""){
        res.json({ 
            "code": 204,
            "message": "DriverLicenseNo is missing"
        });
    }
    
    if(typeof simCardProvider == 'undefined' || simCardProvider ==""){
        res.json({ 
            "code": 204,
            "message": "simCardProvider is missing"
        });
    }
    
    if(typeof customerNo == 'undefined' || customerNo ==""){
        res.json({ 
            "code": 204,
            "message": "customerNo is missing"
        });
    }
    if(typeof createdBy == 'undefined' || createdBy ==""){
        res.json({
            "code": 204,
            "message": "createdBy is missing"
        });
    } 
    if(typeof createdOn == 'undefined' || createdOn ==""){
        res.json({
            "code": 204,
            "message": "createdOn is missing"
        });
    }
    if(typeof updatedBy == 'undefined' || updatedBy ==""){
        res.json({  
            "code": 204,
            "message": "updatedBy is missing"
        });
    } 
    if(typeof isDeleted == 'undefined' || isDeleted ==""){
        res.json({
            "code": 204,
            "message": "isDeleted is missing"
        });
    }

    db.connection.connect(function(err){
        if(err){
            res.json({
                "code": 204,
                "message": "Something went wrong with Database"
            });
        }else{
            const sql = mastersModel.insertDriverMasterQuery(db.connection,req);
            db.connection.query(sql,function(err, rows, fields){
                if (err) throw err;
                res.json({
                    "code":200,
                    "success":"Inserted",
                    "result" : rows
                });
            });
        }
       
    });   
});

router.post('/updateDriverMaster',function(req, res,next) {
    const driverMasterId = req.body.driverMasterId;
    const DriverName = req.body.DriverName;
    var err = {};
    var validation = [];
    if(typeof driverMasterId == 'undefined' || driverMasterId ==""){
        res.json({  
            "code": 204,
            "message": "driverMasterId is missing"
        });
    } 
    if(typeof DriverName == 'undefined' || DriverName ==""){
        res.json({  
            "code": 204,
            "message": "DriverName is missing"
        });
    }
    const result = mastersModel.updateDriverMasterQuery(db.connection,req);
    
    db.connection.query(result,function(err, rows, fields){
        if (err) {
            res.json({
                "code":404,
                "success":"Not Found",
                "result" : err
            });
        }
        if(typeof rows.affectedRows !="undefined" && rows.affectedRows > 0 ){
            res.json({
                "code":200,
                "success":"updated succesfully",
                "result" : rows.affectedRows + " record has been updated Successfully"
            });
        }

       else if(typeof rows.affectedRows !=="undefined" && rows.affectedRows === 0 ){
           res.json({
                "code":404,
                "success": false,
                "result" : " No record found"
            });
       }

    });
}); 

router.post('/deleteDriverMaster',function(req,res){
    const driverMasterId = req.body.driverMasterId;
    var err = {};
    var validation = [];
    if(typeof req.body.driverMasterId == 'undefined' || req.body.driverMasterId ==""){
        res.json({  
            "code": 204,
            "message": "driverMasterId is missing"
        });
    } 
  
    const result = mastersModel.deleteDeliveryQuery(db.connection,req);
    db.connection.query(result,function(err, rows, fields){
        if (err) {
            res.json({
                "code":404,
                "success":"Not Found",
                "result" : err
            });
        }
        
        if(typeof rows.affectedRows !="undefined" && rows.affectedRows > 0 ){
            res.json({
                "code":200,
                "success":"Record has been Deleted",
                "result" : rows
            });
        }

       else if(typeof rows.affectedRows !=="undefined" && rows.affectedRows === 0 ){
           res.json({
                "code":404,
                "success":"Records Not Found",
                "result" : rows
            });
       }

    });
});

router.post('/getDriverMaster',function(req,res){
    const driverMasterId = req.body.driverMasterId;
    var err = {};
    var validation = [];
    if(typeof req.body.driverMasterId == 'undefined' || req.body.driverMasterId ==""){
        res.json({  
            "code": 204,
            "message": "driverMasterId is missing"
        });
    } 
  
    const result = mastersModel.getDriverMasterQuery(db.connection,req);
    db.connection.query(result,function(err, rows, fields){
        if (err) {
            res.json({
                "code":404,
                "success":"Not Found",
                "result" : err
            });
        }
        console.log(rows.length);
        if(typeof rows!="undefined" && rows.length > 0){
            res.json({
                "code":200,
                "success":true,
                "result" : rows
            });
        }

       else if(typeof rows !="undefined" && rows.length === 0 ){
           res.json({
                "code":404,
                "success":false,
                "result" : "Records Not Found"
            });
       }

    });
});

// DriverMaster ends  here 

// shipmentDeliveryMapping starts from here 

router.post('/createShipmentDeliveryMapping',function(req, res,next) {
    const shipmentId = req.body.shipmentId;
    const deliveryId  = req.body.deliveryId;
    const customerNo = req.body.customerNo;
    const createdBy = req.body.createdBy;
    const createdOn = req.body.createdOn;
    const updatedBy = req.body.updatedBy;
    const updatedOn = req.body.updatedOn;
    const isDeleted = req.body.isDeleted;
    var err = {};
    var validation = []; 

    if(typeof shipmentId == 'undefined' || shipmentId ==""){
        res.json({ 
            "code": 204,
            "message": "shipmentId is missing"
        });
    }

    if(typeof deliveryId == 'undefined' || deliveryId ==""){
        res.json({ 
            "code": 204,
            "message": "deliveryId is missing"
        });
    }
    
    if(typeof customerNo == 'undefined' || customerNo ==""){
        res.json({ 
            "code": 204,
            "message": "customerNo is missing"
        });
    }
    if(typeof createdBy == 'undefined' || createdBy ==""){
        res.json({
            "code": 204,
            "message": "createdBy is missing"
        });
    } 
    if(typeof createdOn == 'undefined' || createdOn ==""){
        res.json({
            "code": 204,
            "message": "createdOn is missing"
        });
    }
    if(typeof updatedBy == 'undefined' || updatedBy ==""){
        res.json({  
            "code": 204,
            "message": "updatedBy is missing"
        });
    } 
    if(typeof isDeleted == 'undefined' || isDeleted ==""){
        res.json({
            "code": 204,
            "message": "isDeleted is missing"
        });
    }

    db.connection.connect(function(err){
        if(err){
            res.json({
                "code": 204,
                "message": "Something went wrong with Database"
            });
        }else{
            const sql = mastersModel.insertShipmentDeliveryMappingQuery(db.connection,req);
            db.connection.query(sql,function(err, rows, fields){
                if (err) throw err;
                res.json({
                    "code":200,
                    "success":"Inserted",
                    "result" : rows
                });
            });
        }
       
    });   
});

router.post('/updateShipmentDeliveryMapping',function(req, res,next) {
    const shipmentDeliveryMappingId = req.body.shipmentDeliveryMappingId;
    const shipmentId = req.body.shipmentId;
    var err = {};
    var validation = [];
    if(typeof shipmentDeliveryMappingId == 'undefined' || shipmentDeliveryMappingId ==""){
        res.json({  
            "code": 204,
            "message": "shipmentDeliveryMappingId is missing"
        });
    } 
    if(typeof shipmentId == 'undefined' || shipmentId ==""){
        res.json({  
            "code": 204,
            "message": "shipmentId is missing"
        });
    }
    const result = mastersModel.updateShipmentDeliveryMappingQuery(db.connection,req);
    
    db.connection.query(result,function(err, rows, fields){
        if (err) {
            res.json({
                "code":404,
                "success":"Not Found",
                "result" : err
            });
        }
        if(typeof rows.affectedRows !="undefined" && rows.affectedRows > 0 ){
            res.json({
                "code":200,
                "success":"updated succesfully",
                "result" : rows.affectedRows + " record has been updated Successfully"
            });
        }

       else if(typeof rows.affectedRows !=="undefined" && rows.affectedRows === 0 ){
           res.json({
                "code":404,
                "success": false,
                "result" : " No record found"
            });
       }

    });
}); 

router.post('/deleteShipmentDeliveryMapping',function(req,res){
    const shipmentDeliveryMappingId = req.body.shipmentDeliveryMappingId;
    var err = {};
    var validation = [];
    if(typeof req.body.shipmentDeliveryMappingId == 'undefined' || req.body.shipmentDeliveryMappingId ==""){
        res.json({  
            "code": 204,
            "message": "shipmentDeliveryMappingId is missing"
        });
    } 
  
    const result = mastersModel.deleteShipmentDeliveryMappingQuery(db.connection,req);
    db.connection.query(result,function(err, rows, fields){
        if (err) {
            res.json({
                "code":404,
                "success":"Not Found",
                "result" : err
            });
        }
        
        if(typeof rows.affectedRows !="undefined" && rows.affectedRows > 0 ){
            res.json({
                "code":200,
                "success":"Record has been Deleted",
                "result" : rows
            });
        }

       else if(typeof rows.affectedRows !=="undefined" && rows.affectedRows === 0 ){
           res.json({
                "code":404,
                "success":"Records Not Found",
                "result" : rows
            });
       }

    });
});

router.post('/getshipmentDeliveryMapping',function(req,res){
    const shipmentDeliveryMappingId = req.body.shipmentDeliveryMappingId;
    var err = {};
    var validation = [];
    if(typeof req.body.shipmentDeliveryMappingId == 'undefined' || req.body.shipmentDeliveryMappingId ==""){
        res.json({  
            "code": 204,
            "message": "shipmentDeliveryMappingId is missing"
        });
    } 
  
    const result = mastersModel.getShipmentDeliveryMappingQuery(db.connection,req);
    db.connection.query(result,function(err, rows, fields){
        if (err) {
            res.json({
                "code":404,
                "success":"Not Found",
                "result" : err
            });
        }
        
        if(typeof rows!="undefined" && rows.length > 0){
            res.json({
                "code":200,
                "success":true,
                "result" : rows
            });
        }

       else if(typeof rows !="undefined" && rows.length === 0 ){
           res.json({
                "code":404,
                "success":false,
                "result" : "Records Not Found"
            });
       }

    });
});
// shipmentDeliveryMapping ends here 

// transporterMaster starts from here 

router.post('/createTransporterMaster',function(req, res,next) {
    const transporterName = req.body.transporterName;
    const transporterCode  = req.body.transporterCode;
    const customerNo = req.body.customerNo;
    const createdBy = req.body.createdBy;
    const createdOn = req.body.createdOn;
    const updatedBy = req.body.updatedBy;
    const updatedOn = req.body.updatedOn;
    const isDeleted = req.body.isDeleted;
    var err = {};
    var validation = []; 

    if(typeof transporterName == 'undefined' || transporterName ==""){
        res.json({ 
            "code": 204,
            "message": "transporterName is missing"
        });
    }

    if(typeof transporterCode == 'undefined' || transporterCode ==""){
        res.json({ 
            "code": 204,
            "message": "transporterCode is missing"
        });
    }
    
    if(typeof customerNo == 'undefined' || customerNo ==""){
        res.json({ 
            "code": 204,
            "message": "customerNo is missing"
        });
    }
    if(typeof createdBy == 'undefined' || createdBy ==""){
        res.json({
            "code": 204,
            "message": "createdBy is missing"
        });
    } 
    if(typeof createdOn == 'undefined' || createdOn ==""){
        res.json({
            "code": 204,
            "message": "createdOn is missing"
        });
    }
    if(typeof updatedBy == 'undefined' || updatedBy ==""){
        res.json({  
            "code": 204,
            "message": "updatedBy is missing"
        });
    } 
    if(typeof isDeleted == 'undefined' || isDeleted ==""){
        res.json({
            "code": 204,
            "message": "isDeleted is missing"
        });
    }

    db.connection.connect(function(err){
        if(err){
            res.json({
                "code": 204,
                "message": "Something went wrong with Database"
            });
        }else{
            const sql = mastersModel.insertTransporterMasterQuery(db.connection,req);
            db.connection.query(sql,function(err, rows, fields){
                if (err) throw err;
                res.json({
                    "code":200,
                    "success":"Inserted",
                    "result" : rows
                });
            });
        }
       
    });   
});

router.post('/updateTransporterMaster',function(req, res,next) {
    const transporterMasterId = req.body.transporterMasterId;
    const transporterName = req.body.transporterName;
    var err = {};
    var validation = [];
    if(typeof transporterMasterId == 'undefined' || transporterMasterId ==""){
        res.json({  
            "code": 204,
            "message": "transporterMasterId is missing"
        });
    } 
    if(typeof transporterName == 'undefined' || transporterName ==""){
        res.json({  
            "code": 204,
            "message": "transporterName is missing"
        });
    }
    const result = mastersModel.updateTransporterMasterQuery(db.connection,req);
    
    db.connection.query(result,function(err, rows, fields){
        if (err) {
            res.json({
                "code":404,
                "success":"Not Found",
                "result" : err
            });
        }
        if(typeof rows.affectedRows !="undefined" && rows.affectedRows > 0 ){
            res.json({
                "code":200,
                "success":"updated succesfully",
                "result" : rows.affectedRows + " record has been updated Successfully"
            });
        }

       else if(typeof rows.affectedRows !=="undefined" && rows.affectedRows === 0 ){
           res.json({
                "code":404,
                "success": false,
                "result" : " No record found"
            });
       }

    });
}); 

router.post('/deleteTransporterMaster',function(req,res){
    const transporterMasterId = req.body.transporterMasterId;
    var err = {};
    var validation = [];
    if(typeof req.body.transporterMasterId == 'undefined' || req.body.transporterMasterId ==""){
        res.json({  
            "code": 204,
            "message": "transporterMasterId is missing"
        });
    } 
  
    const result = mastersModel.deleteTransporterMasterQuery(db.connection,req);
    db.connection.query(result,function(err, rows, fields){
        if (err) {
            res.json({
                "code":404,
                "success":"Not Found",
                "result" : err
            });
        }
        
        if(typeof rows.affectedRows !="undefined" && rows.affectedRows > 0 ){
            res.json({
                "code":200,
                "success":"Record has been Deleted",
                "result" : rows
            });
        }

       else if(typeof rows.affectedRows !=="undefined" && rows.affectedRows === 0 ){
           res.json({
                "code":404,
                "success":"Records Not Found",
                "result" : rows
            });
       }

    });
});

router.post('/getTransporterMaster',function(req,res){
    const transporterMasterId = req.body.transporterMasterId;
    var err = {};
    var validation = [];
    if(typeof req.body.transporterMasterId == 'undefined' || req.body.transporterMasterId ==""){
        res.json({  
            "code": 204,
            "message": "transporterMasterId is missing"
        });
    } 
  
    const result = mastersModel.getTransporterMasterQuery(db.connection,req);
    db.connection.query(result,function(err, rows, fields){
        if (err) {
            res.json({
                "code":404,
                "success":"Not Found",
                "result" : err
            });
        }
        
        if(typeof rows!="undefined" && rows.length > 0){
            res.json({
                "code":200,
                "success":true,
                "result" : rows
            });
        }

       else if(typeof rows !="undefined" && rows.length === 0 ){
           res.json({
                "code":404,
                "success":false,
                "result" : "Records Not Found"
            });
       }

    });
});

// transporterMaster ends here 

// RouteCheckpointMapping starts from here 

router.post('/createRouteCheckpointMapping',function(req, res,next) {
    const routeMasterId = req.body.routeMasterId;
    const checkPointMasterId  = req.body.checkPointMasterId;
    const eta  = req.body.eta;
    const etd  = req.body.etd;
    const customerNo = req.body.customerNo;
    const createdBy = req.body.createdBy;
    const createdOn = req.body.createdOn;
    const updatedBy = req.body.updatedBy;
    const updatedOn = req.body.updatedOn;
    const isDeleted = req.body.isDeleted;
    var err = {};
    var validation = []; 

    if(typeof routeMasterId == 'undefined' || routeMasterId ==""){
        res.json({ 
            "code": 204,
            "message": "routeMasterId is missing"
        });
    }

    if(typeof checkPointMasterId == 'undefined' || checkPointMasterId ==""){
        res.json({ 
            "code": 204,
            "message": "checkPointMasterId is missing"
        });
    }

    if(typeof eta == 'undefined' || eta ==""){
        res.json({ 
            "code": 204,
            "message": "eta is missing"
        });
    }

    if(typeof etd == 'undefined' || etd ==""){
        res.json({ 
            "code": 204,
            "message": "etd is missing"
        });
    }
    
    if(typeof customerNo == 'undefined' || customerNo ==""){
        res.json({ 
            "code": 204,
            "message": "customerNo is missing"
        });
    }
    if(typeof createdBy == 'undefined' || createdBy ==""){
        res.json({
            "code": 204,
            "message": "createdBy is missing"
        });
    } 
    if(typeof createdOn == 'undefined' || createdOn ==""){
        res.json({
            "code": 204,
            "message": "createdOn is missing"
        });
    }
    if(typeof updatedBy == 'undefined' || updatedBy ==""){
        res.json({  
            "code": 204,
            "message": "updatedBy is missing"
        });
    } 
    if(typeof isDeleted == 'undefined' || isDeleted ==""){
        res.json({
            "code": 204,
            "message": "isDeleted is missing"
        });
    }

    db.connection.connect(function(err){
        if(err){
            res.json({
                "code": 204,
                "message": "Something went wrong with Database"
            });
        }else{
            const sql = mastersModel.insertRouteCheckpointMappingQuery(db.connection,req);
            db.connection.query(sql,function(err, rows, fields){
                if (err) throw err;
                res.json({
                    "code":200,
                    "success":"Inserted",
                    "result" : rows
                });
            });
        }
       
    });   
});

router.post('/updateRouteCheckpointMapping',function(req, res,next) {
    const routeCheckPointMappingId = req.body.routeCheckPointMappingId;
    const routeMasterId = req.body.routeMasterId;
    const checkPointMasterId = req.body.checkPointMasterId;
    
    var err = {};
    var validation = [];
    if(typeof routeCheckPointMappingId == 'undefined' || routeCheckPointMappingId ==""){
        res.json({  
            "code": 204,
            "message": "routeCheckPointMappingId is missing"
        });
    } 
    if(typeof routeMasterId == 'undefined' || routeMasterId ==""){
        res.json({  
            "code": 204,
            "message": "routeMasterId is missing"
        });
    }

    if(typeof checkPointMasterId == 'undefined' || checkPointMasterId ==""){
        res.json({  
            "code": 204,
            "message": "checkPointMasterId is missing"
        });
    }
    const result = mastersModel.updateRouteCheckpointMappingQuery(db.connection,req);
    
    db.connection.query(result,function(err, rows, fields){
        if (err) {
            res.json({
                "code":404,
                "success":"Not Found",
                "result" : err
            });
        }
        if(typeof rows.affectedRows !="undefined" && rows.affectedRows > 0 ){
            res.json({
                "code":200,
                "success":"updated succesfully",
                "result" : rows.affectedRows + " record has been updated Successfully"
            });
        }

       else if(typeof rows.affectedRows !=="undefined" && rows.affectedRows === 0 ){
           res.json({
                "code":404,
                "success": false,
                "result" : " No record found"
            });
       }

    });
}); 

router.post('/deleteRouteCheckpointMapping',function(req,res){
    const routeCheckPointMappingId = req.body.routeCheckPointMappingId;
    var err = {};
    var validation = [];
    if(typeof req.body.routeCheckPointMappingId == 'undefined' || req.body.routeCheckPointMappingId ==""){
        res.json({  
            "code": 204,
            "message": "routeCheckPointMappingId is missing"
        });
    } 
  
    const result = mastersModel.deleteRouteCheckpointMappingQuery(db.connection,req);
    db.connection.query(result,function(err, rows, fields){
        if (err) {
            res.json({
                "code":404,
                "success":"Not Found",
                "result" : err
            });
        }
        
        if(typeof rows.affectedRows !="undefined" && rows.affectedRows > 0 ){
            res.json({
                "code":200,
                "success":"Record has been Deleted",
                "result" : rows
            });
        }

       else if(typeof rows.affectedRows !=="undefined" && rows.affectedRows === 0 ){
           res.json({
                "code":404,
                "success":"Records Not Found",
                "result" : rows
            });
       }

    });
});

router.post('/getRouteCheckpointMapping',function(req,res){
    const routeCheckPointMappingId = req.body.routeCheckPointMappingId;
    var err = {};
    var validation = [];
    if(typeof req.body.routeCheckPointMappingId == 'undefined' || req.body.routeCheckPointMappingId ==""){
        res.json({  
            "code": 204,
            "message": "routeCheckPointMappingId is missing"
        });
    } 
  
    const result = mastersModel.getRouteCheckpointMappingQuery(db.connection,req);
    db.connection.query(result,function(err, rows, fields){
        if (err) {
            res.json({
                "code":404,
                "success":"Not Found",
                "result" : err
            });
        }
        
        if(typeof rows!="undefined" && rows.length > 0){
            res.json({
                "code":200,
                "success":true,
                "result" : rows
            });
        }

       else if(typeof rows !="undefined" && rows.length === 0 ){
           res.json({
                "code":404,
                "success":false,
                "result" : "Records Not Found"
            });
       }

    });
});

// routecheckpointmapping ends  here 

module.exports = router;