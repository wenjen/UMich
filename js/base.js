function render_side_bar(){
    //alert("render_side_bar");
    items=[{link:"index.html",class:"fa fa-fw fa-dashboard",name:"Dashboard"}];
    items.push({link:"course.html",class:"fa fa-graduation-cap",name:"Course"});
    items.push({link:"UW.html",class:"fa fa-university",name:" UW life"});
    items.push({link:"charts.html",class:"fa fa-fw fa-bar-chart-o",name:"Charts"});
    items.push({link:"tables.html",class:"fa fa-fw fa-table",name:"Tables"});
    items.push({link:"forms.html",class:"fa fa-fw fa-edit",name:"Forms"});
    items.push({link:"bootstrap-elements.html",class:"fa fa-fw fa-desktop",name:"Bootstrap Elements"});
    items.push({link:"bootstrap-grid.html",class:"fa fa-fw fa-wrench",name:" Bootstrap Grid"});
    items.push({link:"blank-page.html",class:"fa fa-fw fa-file",name:" Blank Page"});
    items.push({link:"index-rtl.html",class:"fa fa-fw fa-dashboard",name:"RTL Dashboard"});
    for (i in items){
        //alert(items[i]);
        //console.log("<li><a href=\""+items[i].link+"\"><i class=\""+items[i].class+"\"></i>"+items[i].name+"</a></li>");
        var tokens = location.pathname.split('/');
        var element="";
        if (items[i].link==tokens[tokens.length-1]){
            element="<li class=\"active\"><a href=\""+items[i].link+"\"><i class=\""+items[i].class+"\"></i>"+items[i].name+"</a></li>";
        }
        else{
            element="<li><a href=\""+items[i].link+"\"><i class=\""+items[i].class+"\"></i>"+items[i].name+"</a></li>";
        }
        $(side_bar).append(element);
    }
    element=`
    <li>
        <a href="javascript:;" data-toggle="collapse" data-target="#demo"><i class="fa fa-fw fa-arrows-v"></i> Dropdown <i class="fa fa-fw fa-caret-down"></i></a>
        <ul id="demo" class="collapse">
            <li>
                <a href="#">Dropdown Item</a>
            </li>
            <li>
                <a href="#">Dropdown Item</a>
            </li>
        </ul>
    </li>
   `;
   $(side_bar).append(element);                 
}
window.onload=render_side_bar();