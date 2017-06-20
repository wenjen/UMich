function render_UW_hours(){
    //alert("render_UW_hours");
    items=[];
    items.push({title:"Husky Grind",icon:"fa fa-coffee",target:"huskygrind",style:"dayEnd",weekday_time:"07:00 - 22:00",weekend_time:"09:00 - 22:00"});
    items.push({title:"Fitness Center West",icon:"fa fa-heartbeat",target:"FitnessCenterWest",style:"dayEnd",weekday_time:"06:00 - 21:00",weekend_time:"07:00 - 19:00"});
    items.push({title:"District Market",icon:"fa fa-shopping-cart",target:"districtMarket",style:"dayEnd",weekday_time:"07:00 - 22:00",weekend_time:"09:00 - 17:00"});
    items.push({title:"Area 01",icon:"fa fa-gamepad",target:"area01",style:"thru",time:"16:00 - 23:00"});
    for (i in items){
        //console.log("<li><a href=\""+items[i].link+"\"><i class=\""+items[i].class+"\"></i>"+items[i].name+"</a></li>");
        element = "<a data-toggle=\"collapse\" data-target=\"#"+items[i].target+"\" class=\"list-group-item\"> <i class=\""+items[i].icon+"\" ></i> "+items[i].title+"</a>";
        element += "<ul id=\""+ items[i].target + "\" class=\"collapse\">";
        if(items[i].style === "dayEnd") {
            element += (" Mon - Fri " + items[i].weekday_time + "<br> Sat - Sun " + items[i].weekend_time + "</ul>");
        } else if(items[i].style === "thru") {
            element += (" Mon - Sun " + items[i].time + "</ul>");
            
        }
        // alert(element);
        $(hours_list_group).append(element);
    }                
}
window.onload=render_UW_hours();