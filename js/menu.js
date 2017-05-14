function createMenuToggler(parent, li){
    var menuToggler = null;
    if(li){
        menuToggler = $(li)
        menuToggler.attr('id', 'menuToggler');
    }else{
        menuToggler = $("<li/>");
        menuToggler.attr('id', 'menuToggler');
        var anchor = $("<a/>");
        anchor.attr('href','#');
        anchor.text('Menu');
        var divTag = $("<div/>");
        divTag.attr('class','previewMenu');
        menuToggler.append(anchor);
        menuToggler.append(divTag);
    }
    $(parent).append(menuToggler);
}
function createMenuFromXML(xmlArray){
    var firstUl = $("<ul/>");
   for (var i in xmlArray) {
		var jxml = $.parseXML(xmlArray[i]);
        $bxml = $(jxml);
        //method call to populate 
       var ul = paintMenu2($bxml);
       firstUl.append(ul);
	}//end for loop
	
    return firstUl;
}
function addToParentMenu(parent, firstUl){
    $(parent).append(firstUl);
     $(parent).treeview({
		collapsed: true,
		//unique: true,
		persist: "location",
		animated: "fast",
		control: "#treecontrol"
	});
}

function paintMenu2(data){
      //put your stylin here while painting UL so that it becomes nice Menu
    var ul_main=$("<ul style=\"width: 20%; padding-left: 5px;\"/>");
    $(data).find("Menu").each(function(){
        if($(this).children().length)
        {
            var ulSub=$("<ul  />");
            $(this).children().each(function(){
                ulSub.append("<li id="+$(this).attr("id")+" ><a href="+$(this).attr("url")+">"+$(this).attr("text")+"</a></li>");
            });
            var li=$("<li id="+$(this).attr("id")+"><a href="+$(this).attr("url")+">"+$(this).attr("text")+"</a></li>");
            ul_main.append(li.append(ulSub))
        }
        else ul_main.append("<li id="+$(this).attr("id")+" style=\"padding-left: 10px; \"><a href="+$(this).attr("url")+">"+$(this).attr("text")+"</a></li>");
    });
    return ul_main;
}

function getInitialXMLArray(){
   var xmlDoc1 = "<MenuRoot1> <Menu id=\"home\" text=\"Home from text\" url=\"home.aspx\"></Menu><Menu id=\"projects\" text=\"Projects\" url=\"projects.aspx\"><SubMenu id=\"sub1\" text=\"Sub One\" url=\"subone.aspx\"></SubMenu><SubMenu id=\"sub2\" text=\"Sub Two\" url=\"subtwo.aspx\"></SubMenu><SubMenu id=\"sub3\" text=\"Sub Two\" url=\"subthree.aspx\"></SubMenu></Menu><Menu id=\"abc\" text=\"ABC\" url=\"http://abc.com\"></Menu></MenuRoot1>";
   var xmlDoc2 = "<MenuRoot1><Menu id=\"msn\" text=\"msn\" url=\"http://msn.com\"></Menu><Menu id=\"google\" text=\"google\" url=\"http://google.com\"></Menu></MenuRoot1>";
   var xmlArray=new Array();
   xmlArray[0]=xmlDoc1;
   xmlArray[1]=xmlDoc2;
   return xmlArray;
}