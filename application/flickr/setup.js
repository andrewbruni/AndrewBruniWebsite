$(document).ready(function(){
/*
	$('#basicuse').jflickrfeed({
		limit: 14,
		qstrings: {
			id: '99327312@N03'
		},
		itemTemplate: '<li><a href="{{image_b}}"><img src="{{image_s}}" alt="{{title}}" /></a></li>'
	});
*/	
	$('#cbox').jflickrfeed({
		limit: 12,
		qstrings: {
			id: '99327312@N03'
		},
		itemTemplate: '<li>'+
						'<a rel="colorbox" href="{{image}}" title="">' +
							'<img src="{{image_s}}" alt="" />' +
						'</a>' +
					  '</li>'
	}, function(data) {
		$('#cbox a').colorbox();
	});
	
	
	 $('.thumbs').each(function () {
        var PhotoSetID = $(this).attr("id");

        var url = "http://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=f0b84fba1c00631410b85b90720f52ba";
        var src;
        $.getJSON(url + "&photoset_id=" + PhotoSetID + "&format=json&jsoncallback=?", function (data) {
            $.each(data.photoset.photo, function (i, item) {
                src = "http://farm" + item.farm + ".static.flickr.com/" + item.server + "/" + item.id + "_" + item.secret + "_c.jpg";
                title = item.title;


                $("<a>").attr({
                    "href": src,
                        "class": "gallery",
                    "rel" : PhotoSetID,
                        
                }).html(
                $("<img />").attr({
                    "src": src,
                        "alt": title,
                        "class": (i === 0 ? "show" : "hide"),
                        "width": "300",
                        "height": "215"
                })

                ).appendTo("#" + PhotoSetID);
    $("a.gallery[rel=" + PhotoSetID +"]").colorbox();

            });

        });

    });
     
/*	
	$('#cycle').jflickrfeed({
		limit: 14,
		qstrings: {
			id: '37304598@N02'
		},
		itemTemplate: '<li><img src="{{image}}" alt="{{title}}" /><div>{{title}}</div></li>'
	}, function(data) {
		$('#cycle div').hide();
		$('#cycle').cycle({
			timeout: 5000
		});
		$('#cycle li').hover(function(){
			$(this).children('div').show();
		},function(){
			$(this).children('div').hide();
		});
	});
	
	$('#nocallback').jflickrfeed({
		limit: 4,
		qstrings: {
			id: '37304598@N02'
		},
		useTemplate: false,
		itemCallback: function(item){
			$(this).append("<li><img src='" + item.image_m + "' alt=''/></li>");
		}
	});
*/
});

