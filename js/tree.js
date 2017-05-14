var idCounter=1;
function createMenuFromXMLTree(xmlArray){
    var firstUl = $("<ul id=\"root\"/>");
	
	for (var i in xmlArray) {
		var jxml = $.parseXML(xmlArray[i]);
        $bxml = $(jxml);
        //method call to populate 
       var ul = paintMenuTree($bxml);
       
	     $("#navigation").append(ul);
	}//end for loop
    return firstUl;
}
function paintMenuTree(data){
      //put your stylin here while painting UL so that it becomes nice Menu
    var ul_main=$("<ul style=\"width: 20%; padding-left: 5px;\" idCounter="+(idCounter++)+"/>");
    $(data).find("Menu").each(function(){
        if($(this).children().length)
        {
            var ulSub=$("<ul  />");
            $(this).children().each(function(){
                ulSub.append("<li><input class=\"parent\" type=\"checkbox\" id="+(idCounter++)+"><a href=action.do?urlId="+$(this).attr("url")+">"+$(this).attr("text")+"</a></li>");
            });
            var li=$("<li ><input class=\"parent\" type=\"checkbox\"  id="+(idCounter++)+"><a href=action.do?urlId="+$(this).attr("url")+">"+$(this).attr("text")+"</a></li>");
            ul_main.append(li.append(ulSub))
        }
        else ul_main.append("<li> <input class=\"parent\" type=\"checkbox\"  id="+(idCounter++)+"><a href=action.do?urlId="+$(this).attr("url")+" class=\"link\">"+$(this).attr("text")+"</a></li>");
    });
    return ul_main;
}

