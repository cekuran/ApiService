var scriptProperties = PropertiesService.getScriptProperties();
const ssAuth = scriptProperties.getProperty('spreadSheetAuth');

const authFuncs = {
    confirm_user: function (Param) {
      let JsonResponse = {};
      if(!Param.hasOwnProperty("user")) {
        JsonResponse["Error"]="Missing parameter";
      }else if (!Param.hasOwnProperty("checkToken")){
        JsonResponse["Error"]="Missing parameter";
      }
      else
      {

      }

      return JsonResponse;
    },
    add_user : function (Param) {
      let JsonResponse = {};
      if(!Param.hasOwnProperty("user")) {
        JsonResponse["Error"]="Missing parameter";
      }else if (!Param.hasOwnProperty("password")){
        JsonResponse["Error"]="Missing parameter";
      }
      else
      {

      }

      return JsonResponse;
    },
    get_token: function (Param) {
      let JsonResponse = {};
      if(!Param.hasOwnProperty("user")) {
        JsonResponse["Error"]="Missing parameter";
      }else if (!Param.hasOwnProperty("password")){
        JsonResponse["Error"]="Missing parameter";
      }else if (!Param.hasOwnProperty("scope")){
        JsonResponse["Error"]="Missing parameter";
      }
      else
      {
        //TODO: Check logging
        //Create Token
        //Get timestamp
        ScriptApp.newTrigger("ServerApp.TimeoutRequest").timeBased().after(20 * 1000).create();
        let TimeStamp = Date();
        JsonResponse["Result"]="GetToken";
      }

      return JsonResponse;
    },

    check_token: function (Param) {
      let JsonResponse = {};

      if(!Param.hasOwnProperty("user")) {
        JsonResponse["Error"]="Missing parameter";
      }else if (!Param.hasOwnProperty("access_token")){
        JsonResponse["Error"]="Missing parameter";
      }
      else
      {
        let TimeStamp = Date();
        JsonResponse["Result"]="CheckToken";
      }
      return JsonResponse;
    }
  };
