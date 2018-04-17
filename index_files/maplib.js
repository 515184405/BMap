	var top_left_navigation = new BMap.NavigationControl(
	{
		
		anchor: BMAP_ANCHOR_TOP_LEFT,
		type: BMAP_NAVIGATION_CONTROL_ZOOM
	});  //左上角，添加默认缩放平移控件

	


var map = new BMap.Map("map");
//map.centerAndZoom(address,20);
var address_pont="";
var address_realpoint=[];
map.setCurrentCity(city); 

 
map.addControl(top_left_navigation);     
//map.addControl(top_right_navigation);
map.enableScrollWheelZoom(true);

map.addControl(new BMap.MapTypeControl);   
var myGeo = new BMap.Geocoder();//// 创建地址解析器实例
var num=0;



function get_centerAndZoom_by_point(point){
		address_pont=point;
			map.clearOverlays();  
			map.centerAndZoom(point, 17);
			n.addMarker(point);
			n.addMarker2(point);	
}
function get_luxian(strartpoint,address){
	var i=0;
	if (strartpoint) {
		var r=new BMap.DrivingRoute(map, {
                onSearchComplete: yyy
		});	
		for (var o = 0; o < strartpoint.length; o++){
		 	r.search(strartpoint[o], address);
		}

	}	
	
} 
var n = {};
	n.SquareOverlay = function(t, twidth, theight, tcolor, taddress) {
            this._center = t,
            this._width = twidth,
            this._height = theight,
            this._color = tcolor,
            this._text = taddress
        },
        n.SquareOverlay.prototype = new BMap.Overlay,
        n.SquareOverlay.prototype.initialize = function(t) {
            this._map = t;
            var e = document.createElement("div");
            return e.innerHTML = this._text,
            e.style.textAlign = "center",
            e.style.lineHeight = this._height + "px",
            e.style.color = "white",
            e.style.position = "absolute",
            e.style.width = this._width + "px",
            e.style.height = this._height + "px",
            e.style.background = this._color,
            t.getPanes().markerPane.appendChild(e),
            this._div = e,
            e
        },
        n.SquareOverlay.prototype.draw = function() {
            var t = this._map.pointToOverlayPixel(this._center);
            this._div.style.left = t.x - this._width / 2 + "px",
            this._div.style.top = t.y + this._height + "px"
        },
        n.addMarker = function(t) {
            var e = new BMap.Size(33, 39),
            i = {
                offset: new BMap.Size(16, 39)
            };
            var n = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAnCAMAAAC2Y9FAAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAHCUExURQAAAP1gAf1gAf1gAf1gAf1gAf1gAf1gAf1gAf1gAf1gAf1gAf1gAf1gAf1gAf1gAf1gAf1gAf1gAf1gAf1gAf1gAf1gAf1gAf1gAf1gAf1gAf1gAf1gAf1gAf1gAf1gAf1gAf1gAf1gAf1gAf1gAf1gAf1gAf1gAf1gAf1gAf1gAf1gAf1gAf1gAf1gAf1gAf1gAf1gAf1gAf1gAf1gAf1gAf1gAf1gAf1gAf1gAf1gAf1gAf1gAf1gAf1gAf1gAf1gAf1gAf1gAf1gAf1gAf1gAf1gAf1gAf1gAf1gAf1gAf1gAf1gAf1gAf/////7+f1nDf1hAv/9/P/59v1hA/1mC/6cYv6wgf16K//9+/6yg/1iBP/l1v1oDv/t4v/+/f6tfP6+lv19L//07f/m1//8+v68k/6nc/6zhf68lP7Ipv/+/v6eZP2GPv2ANP1wG/7QtP1iBf/z6/6kbv1pD//p3P7LrP/q3f1/Mv11I/1sFf/v5f7Qs/6se//i0f/bxf2FPP16Kv7Tuf/s4f61if7Rtf/y6v12JP6odf/28P/x6f1uGP/p2/14J/7VvP7Uuv6qeP6UVf6ref1zH//r3/7Xv4m+okgAAABNdFJOUwD+FanuDPUB5vmv6Ef7O4A+D9L2QczwOOw28mSnjGdcBOBz3rjl6mkw5IJO8y80XSlSFPw9583xjzJ1VkYnjiyi0BEWwM8ZpOv6wYESNdbokAAAAbNJREFUOMt9lFVXw0AQhaeFtlDFpUCBFnd3d9tpcXd3d3d3+L+EptkkbdL7NHPznT3Z3TsLQKUxmhJsZmK2JZiMGvCUyhpPeMVbVe5ArB8Ryy9WvIAP8ZSPYBllKJFSqJIDAoOItIICXXvQEjlp2T1ZiLws/0CdrxfCt4MhTCJrc31H1LcDxOkE/epGN+L+zRHv6OJAz3fDi8jq6YI39RDDNwvMx929K2aZx0tqxkADrafG0b7SScjzO+IbdduAv49JxHln0fuC+ErvB9SUmEG7g60eEPs4NxhaKTGNY67qE/GDcw3QQokRnB1lqy/BGhHQSIk5xAln4fhBvOfcWqihxMAgdm33EPL9i3hL3WaI4s+jnzmP45NzO+LdITWjoN5Am86hZfZMrw+oZ2gCEAZwbWkLu85OHYKEMHcbKb7v3h5hpwj/D0i0l3xEOzOWlygLFLqyHBAsA/iHcGFP95cGyvmBCZHKqrpCOHSRYR5ARoF4bgPUbkCx0X209eJ/CQv3fB5y84VzkiXxgEC2ggIRpSCpZA5JSgEZlbmmqBpkleZMdw54UQkhqZXeANBUFWW6WX+aKxCj2qq79AAAAABJRU5ErkJggg==";
            
			var A = new BMap.Icon(n, e, i),
            f = new BMap.Marker(t, {
                icon: A
            });
           // map.addOverlay(f);
			var marker = new BMap.Marker(t); 
			map.addOverlay(marker); 
			marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
			//var label = new BMap.Label(address,{offset:new BMap.Size(163,30)});
			//marker.setLabel(label);
        },
		n.addMarker2 = function(t) {
			var e2 = new n.SquareOverlay(t, marker_width, marker_height, "rgba(114,192,44,0.85)", address);
			map.addOverlay(e2);

			

		},
		n.viewRoute = function() {
            var t = $(".route_view");
             // mui.toast('努力规划中...') 
            t.mousedown(function() {
                $(this).addClass("click");
            }),
            t.mouseup(function() {
                $(this).removeClass("click")
            });
			$("#bus_route").html("");
            for (var e = document.getElementsByClassName("location"), i = document.getElementsByClassName("route_view"), A = [], a = 0; a < e.length; a++) A[a] = e[a].childNodes[0].innerHTML,
            i[a].index = a;
			var driving_route = new BMap.DrivingRoute(map, {
					renderOptions: {
						map: map
					}
			});
			map.clearOverlays(); 
			n.addMarker(address_pont);
			n.addMarker2(address_pont);			
           // driving_route.clearResults();
            driving_route.search(A[this.index], address);
			//var results=driving_route.getResults();
			//console.log(results);
			
        },
		n.viewTrans = function() {
            var t = $(".route_view2");
             // mui.toast('公交路线滚动到底部哦...') 
            t.mousedown(function() {
                $(this).addClass("click")
            }),
            t.mouseup(function() {
                $(this).removeClass("click")
            });		
				
            for (var e = document.getElementsByClassName("location"), i = document.getElementsByClassName("route_view2"), A = [], a = 0; a < e.length; a++) A[a] = e[a].childNodes[0].innerHTML,
            document.getElementsByClassName('bus_box')[a].innerHTML = '',
            i[a].index = a;  
                    
				var routePolicy = [BMAP_TRANSIT_POLICY_LEAST_TIME,BMAP_TRANSIT_POLICY_LEAST_TRANSFER,BMAP_TRANSIT_POLICY_LEAST_WALKING,BMAP_TRANSIT_POLICY_AVOID_SUBWAYS];
				var transit = new BMap.TransitRoute(map, {
						renderOptions: {map: map,panel: this.parentNode.nextSibling.id},
						policy: 0
						 
					});
				$(".bus_route").scrollTop('-17em');
				map.clearOverlays();
				n.addMarker(address_pont);
				n.addMarker2(address_pont);
				transit.setPolicy(0);
				//console.log(A[this.index]);
				transit.search(A[this.index],address);
		}
		
	 
 
		
function yyy(t){ 
	var i, A = document.getElementById("line-content");       
			 var e = t.getPlan(0);
			
 
			if(num==0){
				//address_realpoint=new BMap.Point(t.getEnd().point.lng, t.getEnd().point.lat);
				address_realpoint=t.getEnd().point;
				//console.log(address_realpoint);
				get_centerAndZoom_by_point(address_realpoint);
			}
			num++;

                i = "用时:" + e.getDuration(!0) + "(打车费用:" + t.taxiFare.day.totalFare + "元)";
                var a = document.createElement("dl");
                var b = document.createElement("dl");
                a.setAttribute("class", "location");
                b.setAttribute("class", "bus_box");
                b.setAttribute("id", "bus_box"+num);
                var f = t.getStart().title,
                o = "";
                o = f.indexOf("机场") > -1 ? "plane": "train",
                a.innerHTML = "<span class=" + o + ">" + t.getStart().title + "</span>";
                var g = document.createElement("dd");
                g.setAttribute("class", "distance"),
                g.innerHTML = i,
                a.appendChild(g);
                var s = document.createElement("dd");
                s.setAttribute("class", "route_view"),
                s.innerHTML = "打车路线",
                s.onclick = n.viewRoute,
                a.appendChild(s),
                A.appendChild(a);


                var s2 = document.createElement("dd");
                s2.setAttribute("class", "route_view2"),
                s2.innerHTML = "公交路线",
                s2.onclick = n.viewTrans,
                a.appendChild(s2),
                A.appendChild(a);
                A.appendChild(b);


}	
function getpoint(){
	myGeo.getPoint(city+address, function(point){
		address_pont=point;
		//console.log(point);
		if (point) {
			map.clearOverlays();  
			map.centerAndZoom(point, 17);
			n.addMarker(point);
			n.addMarker2(point);
			map.setCurrentCity(city); 	
			get_luxian(strartpoint,address);
		}else{
			 
		}
	}, city);
	
  
}

getpoint();
