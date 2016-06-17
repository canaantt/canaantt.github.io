(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// var mongoose = require('mongoose');
// db = mongoose.createConnection('localhost', 'api');
// db.on('error', function () {
//   console.log('Error! Database connection failed.');
// });

// db.once('open', function (argument) {
//   console.log('Database connection established!');

//   mongoose.connection.db.tcga_gbm_pt(function (error, names) {
//     if (error) {
//       console.log('Error: '+ error);
//     } else {
//       console.log(names);
//     };
//   });
// });

$(document).ready(function(){

	var encode = function(v){
			return encodeURIComponent(JSON.stringify(v));
		};
	// Get Examples Model
	var examples = (function(){

		return {
			"Queries":[
				{name:"Select All", url:"|"},
				{name:"Select Fields", url:""},
				{name:"Select Count", url:"|/count"}
			],
			"Sort":[
				{name:"Single Column Asc", url:""},
				{name:"Multiple Columns Asc And Desc", url:""}
			],
			"Filtering":[],
			"Pagination":[
				{name:"Limit 10 Items", url:"/?q="+encode({ $limit:10 })}
			]
	}})();


	// Get Reference To All Important UI Elements
	var elements = (function($){
		return{
			sidebar: $("#sideBar"),
			diseases: $("#diseaseDropDown"),
			tables: $("#tableDropDown"),
			examples: $("#divExamples"),
			query: $("#txtQuery"),
			submit: $("#btnSubmit"),
			results: $("#divResults")
		}
	})($);

	// Fill the Disease Dropdown Menu
	// var diseaseURL = "http://localhost/api/_collections|?q=" + 
	// 				 encode({"name":"tcga"},{"diseases.name":true});
	// 				 console.log()
	//$.get(diseaseURL, function(data){
	var fillDiseaseDropdown = (function(){
		var data = [ 
				        {
				            "name" : "acc"
				        }, 
				        {
				            "name" : "blca"
				        }, 
				        {
				            "name" : "brca"
				        }, 
				        {
				            "name" : "cesc"
				        }, 
				        {
				            "name" : "chol"
				        }, 
				        {
				            "name" : "coad"
				        }, 
				        {
				            "name" : "dlbc"
				        }, 
				        {
				            "name" : "esca"
				        }, 
				        {
				            "name" : "gbm"
				        }, 
				        {
				            "name" : "hnsc"
				        }, 
				        {
				            "name" : "kich"
				        }, 
				        {
				            "name" : "kirc"
				        }, 
				        {
				            "name" : "kirp"
				        }, 
				        {
				            "name" : "laml"
				        }, 
				        {
				            "name" : "lgg"
				        }, 
				        {
				            "name" : "lich"
				        }, 
				        {
				            "name" : "luad"
				        }, 
				        {
				            "name" : "lusc"
				        }, 
				        {
				            "name" : "meso"
				        }, 
				        {
				            "name" : "ov"
				        }, 
				        {
				            "name" : "paad"
				        }, 
				        {
				            "name" : "pcpg"
				        }, 
				        {
				            "name" : "prad"
				        }, 
				        {
				            "name" : "read"
				        }, 
				        {
				            "name" : "sarc"
				        }, 
				        {
				            "name" : "skcm"
				        }, 
				        {
				            "name" : "stad"
				        }, 
				        {
				            "name" : "tgct"
				        }, 
				        {
				            "name" : "thca"
				        }, 
				        {
				            "name" : "thym"
				        }, 
				        {
				            "name" : "ucec"
				        }, 
				        {
				            "name" : "ucs"
				        }, 
				        {
				            "name" : "uvm"
				        }
				    ];
		var diseaseType = data; //find the list of the disease names from "_collections"
		for(var i=0; i<diseaseType.length; i++){
			elements.diseases.append("<li><a href='#'>" + diseaseType[i].name + "</a></li>");
		}
		$("#diseaseDropDown li a").click(function(){
		      $(".diseaseBtn").text($(this).text());
		      $(".diseaseBtn").val($(this).text());
		      //fillTableDrowDown($(this).text());
		});

	})();
		
	//});

	// Fill the Table Dropdown Menu
	
	/*
		db.getCollection('_collections').find({"diseases.name":"acc"},
			{_id:0, diseases: {$elemMatch: {name:"acc"}},"diseases.tables.collection":true})
	*/

	// $.ajax({
 //        url: "http://localhost/api/_collections/?q=" + encodeURIComponent(JSON.stringify({
 //            id: 'xx',
 //            $fields: ['firstName'],
 //            $options: {
 //                limit: 2
 //            },
 //            $single: true,
 //            $cached: true
 //        })),
 //    }).error(function (err) {
 //        throw err;
 //    }).done(function (results) {
 //        console.log(results);
 //    });




	// var fillTableDrowDown = function(disease){
	// 	console.log("Diseases selected is: ", disease);
	// 	var tableURL = "http://localhost/api/_collections/?q=" + 
	// 				 encode({diseases.name:disease}, 
	// 						_id:0, 
	// 						$elemMatch: {diseases.name: disease});
	// 	$.get(tableURL, function(data){
	// 		//console.log(data);
	// 		for(var i=0; i<data[0].length; i++){
	// 			elements.tables.append("<li><a href='#'>" + data[0].diseases[0].tables.collection[i] + "</a></li>");
	// 		}
	// 	});		 
	// }

	// Fill the sidebar
	// $.each(examples, function(k,v){
	// 	console.log(v[k]);
	// });
	$(".panel-group").width($("#sideBar").width());

	elements.examples.jsonViewer( examples );
	elements.examples.click(function(e) {
		var value = e.target.innerText.replace(/\"/g,"");
		if (value.indexOf("|")==0){
			elements.query.val(value.substr(1));
			elements.submit.click();
		}	
  	});

	elements.results.jsonViewer( examples);

	elements.submit.on("click", function(e){
		var url = "http://localhost/api/tcga_gbm_pt"+elements.query.val();
		$.get(url, function( data ) {
   			elements.results.jsonViewer(data, {collapsed:true});
		});

	});
	



});
},{}]},{},[1])