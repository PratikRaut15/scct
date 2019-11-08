const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const jwt = require('jsonwebtoken');
const auth = require('../middleware/auth');
const db = require('../config/db'); 
const mastersModel = require('../models/masters');

router.post('',auth.verifyToken,(req, res) => {
    res.json({"msg" : "1"});
});

router.post('/createCheckPointMaster',function(req, res,next) {

             db.connection.connect(function(err){
                if(!err){
                    //console.log("Database connected successfully");
                    console.log(req.body);
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

   
    
    // If user is not authenticated then send user a message to logIn 
        // if(req.token == 0 ){
        //     console.log(req.token);
        //     res.json({
        //         "code":204,
        //         "success":"Invalid Token Please Log In"

        //     });
        // }else{
        //     // If user is authenticated
        //     isDbConnected = '';
        //         db.connection.connect(function(err){
        //         if(!err){
        //             console.log("Database connected successfully");
        //             res.json({"msg" : "1"});
                    
        //         } else {
        //             console.log("Something went wrong");
        //             res.json({"msg" : "0"});
        //         }
        //     });
           
            
           
            
        // }
            
    
    //console.log(verifyToken);
});
  

router.post('checkPointMaster',(req,res) =>{
    
    // const token = auth.verifyToken(req,res,next);
    // console.log(verifyToken);
    // if(connection){
    //     connection.connect(function(err){
    //         if(!err){
    //             console.log('Database is connected...');
    //         } else {
    //             console.log('error connecting database');
    //         }
    //     });
    // }
});
module.exports = router;