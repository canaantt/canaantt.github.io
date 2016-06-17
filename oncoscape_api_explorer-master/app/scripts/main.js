var encode = function(v){
			return encodeURIComponent(JSON.stringify(v));
	};

var decode = function(v){
			return decodeURIComponent(v);
	};

var numberType = function(str){
	return !isNaN(Number(str))? Number(str):str;
};

var operations = (function(){

		return {
			"Queries":[
				{name:"Select All", url:""},
				{name:"Select Fields", url: "http://localhost:3000/api/_field_detail/"},
				{name:"Select Count", url:"/count"}
			],
			"Sort":[
				{name:"Single Column Asc", url:""},
				{name:"Multiple Columns Asc And Desc", url:""}
			],
			"Filtering":[
				{name:"gender", url:""},
				{name:"race", url:""}
			],
			"Pagination":[
				{name:"Limit 10 Items", url:"/?q=" + encode({$fields:['patient_ID','days_to_death']})}
			]
	}})();

function getObjects(obj, key, val) {
    var objects = [];
    for (var i in obj) {
        if (!obj.hasOwnProperty(i)) continue;
        if (typeof obj[i] == 'object') {
            objects = objects.concat(getObjects(obj[i], key, val));
        } else if (i == key && obj[key] == val) {
            objects.push(obj);
        }
    }
    return objects;
}	


$(document).ready(function(){

	
	var service = function(url, fun){
		$.ajax({
        	url: url
	    }).error(function (err) {
	    	console.log(this.name + " ERROR");
	    	throw err;
	    }).done(function (result) {
	        fun(result);
	    });		   
	};	
	var populateDiseases = function(result){
        	var diseaseList = result[0].diseases;
        	var disease; 
        	
        	for(var i=0; i<diseaseList.length; i++){
        		disease = diseaseList[i].name;
				elements.diseases.append("<li><a href='#'>" + 
						 disease + "</a><ul class='dropdown-submenu' id=" + disease + "></ul></li>");
				var elemID = '#'+disease;
				var tables = diseaseList[i].tables;
				for(var j=0; j<tables.length; j++){
					$(elemID).append("<li><a href='#'>" + 
						 tables[j].collection + "</a></li>")	
				}
			}
			$(".dropdown-submenu li a").on("click", function(e){
				var str = e.target.innerText;
				elements.diseaseBtn.val(str);
				elements.diseaseBtn.text(str);
		});	
    }; 	  
	
	// Get operations Model
	

	// Get Reference To All Important UI Elements
	var elements = (function($){
		return{
			diseaseBtn: $(".diseaseBtn"),
			diseases: $("#diseaseDropDown"),
			operations: $("#accordion"),
			query: $("#txtQuery"),
			submit: $("#btnSubmit"),
			results: $("#divResults"),
			userInput:{
					collection: $("#collectionInput"),
					count: $("#btnCount"),
					//countVal: $("#countVal"),
					query: $("#criInput"),
					fields: $("#fieldsInput"),
					limit: $("#limitInput"),
					skip: $("#skipInput"),
					filter: $("#filterInput"),
					submit: $("#cusSubmit")
					}
		}
	})($);


	var fillDiseaseDropdown = (function(){
		var url = "http://localhost:3000/api/_collections/?q=" 
             + encode({
         	   $fields:['diseases']
         	});
		service(url, populateDiseases);

	})();

	
	var populateOperations = function(jsonObj){
		$.each(jsonObj, function(k, v){
			var str = "#" + k;
			console.log(str);
			var opt = "<div class='panel panel-success'><div class='panel-heading'>" +
					  "<h4 class='panel-title'>" + 
					  "<a data-toggle='collapse' data-parent='#accordion' ref=" + str +
					  ">" + k + "</a></h4></div>" +
			          "<div class='panel-collapse collapse in ' id=" + 
			          k +"><div class='panel-body'>";

			$.each(v, function(key, val){
				opt = opt + "<p class='btn-default'>" + val.name + "</p>";
			});
			opt = opt + "</div></div></div>";

			elements.operations.append(opt);
		});
	
	};

	populateOperations(operations);


	elements.operations.click(function(e) {
		var value = e.target.innerText.replace(/\"/g,"");
		var url = getObjects(operations, 'name', value)[0].url;
		var newValue;
		if(url.indexOf("http")==0){
			newValue = url + "?q=" + encode({
				collection: elements.diseaseBtn.val()
				, "$fields":["fields.key"]
				//, "$unwind":["fields"]
			});
		}else{
			newValue = "http://localhost:3000/api/" + elements.diseaseBtn.val() + url;
		}
		elements.query.val(newValue);
		elements.submit.click();
  	});

	elements.results.jsonViewer(operations);

	elements.submit.on("click", function(e){

		$.get(elements.query.val(), function( data ) {
   			elements.results.jsonViewer(data, {collapsed:true});
   			elements.query.val(decode(elements.query.val()));
		});

	});


	elements.userInput.count.click(function(e) {
	    e.preventDefault();
	    $(this).toggleClass('active');
	});

	var customerQuery = function(){
		var constructedURL = "http://localhost:3000/api/";
		var collection, query = [], fieldVals = [], limitVal, skipVal, filterVal; 
		collection = (elements.userInput.collection.val() == "" ? null:elements.userInput.collection.val());
		query = (elements.userInput.query.val() == "" ? null:elements.userInput.query.val().split(","));
															//.replace(/\s+/g, '').split(","));
		fieldVals = (elements.userInput.fields.val() == "" ? null:elements.userInput.fields.val().split(","));
		limitVal = (elements.userInput.limit.val() == "" ? null:elements.userInput.limit.val());
		skipVal = (elements.userInput.skip.val() == "" ? null:elements.userInput.skip.val());
		filterVal = (elements.userInput.filter.val() == "" ? null:elements.userInput.filter.val());
		
		var string ="";

		if(query != null){
			string = string + JSON.stringify($.trim(query[0].split(":")[0])) + ":" 
							+ JSON.stringify(numberType($.trim(query[0].split(":")[1])));
			if(query.length > 1){
				for(var i=1;i<query.length;i++){
					string = string + ", " + 
							 JSON.stringify($.trim(query[i].split(":")[0])) + ":" 
							+ JSON.stringify(numberType($.trim(query[i].split(":")[1])));
				}
			}	
		}
		
		
		if(fieldVals != null){
			if(string == "") {
				console.log("test within fieldVal");
				string = JSON.stringify("$fields")+ ":"+ JSON.stringify(fieldVals);
			}else{
				string = string + ","+ JSON.stringify("$fields")+ ":"+ JSON.stringify(fieldVals);
			}
		}

		if(limitVal != null){
			if(string == "") {
				string = JSON.stringify("$limit")+ ":"+ Number(limitVal);
			}else{
				string = string + ","+ JSON.stringify("$limit")+ ":"+  Number(limitVal);
			}
		}

		if(skipVal != null){
			if(string == "") {
				string = JSON.stringify("$skip")+ ":"+  Number(skipVal);
			}else{
				string = string+ ","+ JSON.stringify("$skip")+ ":"+ Number(skipVal);
			}
		}
		
		string = "{" + string + "}";
		//alert(string);
		
		if(elements.userInput.count.hasClass("active")) {
			constructedURL = constructedURL + collection + "/count?q=";
			//constructedURL = constructedURL + encodeURIComponent(string);
			// $.get(constructedURL, function(data){
			// 	elements.userInput.countVal.val(data.count);
			// });
		}else{
			constructedURL = constructedURL + collection + "/?q=";
		}
		elements.query.val(constructedURL + string);
		constructedURL = constructedURL + encodeURIComponent(string);


		return constructedURL;
	}
	
	elements.userInput.submit.on("click", function(e){
		
		$.get(customerQuery(), function( data ) {
   			elements.results.jsonViewer(data, {collapsed:true});
		});

	});
});




























