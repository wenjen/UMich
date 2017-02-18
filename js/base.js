function render_side_bar(){
    //alert("render_side_bar");
    items=[{link:"index.html",class:"fa fa-fw fa-dashboard",name:"Dashboard"}];
    items+=[{link:"course.html",class:"fa fa-graduation-cap",name:"Course"}]
    for (i in items){
        $(side_bar).append("<li><a href=\""+items[i].link+\"><i class=\""+items[i].class+"\"></i>"+items[i].name+"</a></li>");
    }
}
window.onload=render_side_bar();