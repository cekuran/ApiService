//Server Definitions

const ServerApp = (function () {

  var ServerRequest = {};

  var missing_request = function (Param) {
    let JsonResponse = {
      Error: "Missing request"
    };
    return JsonResponse;
  }

  var bad_request = function (Param) {
    let JsonResponse = {
      Error: "Bad request"
    };
    return JsonResponse;
  }

  return {
    AddPathFuncs: function(path, PathFuncs) {
      ServerRequest[path] = PathFuncs;
    },

    process: function (Parameters) {
      var FuncServerRequest = missing_request;

      if(Parameters.hasOwnProperty("request") && Parameters.hasOwnProperty("path"))
      {
        FuncServerRequest = ServerRequest[Parameters['path']][Parameters['request']] ? ServerRequest[Parameters['path']][Parameters['request']] : bad_request; 
      }

      return FuncServerRequest(Parameters);
    },
    
    TimeoutRequest : function () {
      Logger.log("Esto es una prueba");
    }    
  };

})();

//Add path functions
ServerApp.AddPathFuncs('auth',authFuncs);

function doGet(e) {
  let JsonResponse = ServerApp.process(e.parameters);
  return ContentService.createTextOutput(JSON.stringify(JsonResponse)).setMimeType(ContentService.MimeType.JSON);   
}


function Test(){
  let JsonParameters = {
    path: "auth",
    request: "get_token"
  }

  let JsonResponse = ServerApp.process(JsonParameters);
}

