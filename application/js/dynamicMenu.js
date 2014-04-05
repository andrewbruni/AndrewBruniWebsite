// JavaScript Document

var width = (window.innerWidth < 1025) ? window.innerWidth : screen.width;

// CREATE MAIN HEADER NAV BAR // 
var list1 = '<li><a href="/home"><span>Home</span></a></li>' ;
var list2 = '<li><a href="/photos"><span>Albums</span></a></li>' ;
var list3 = '<li><a href="/blog"><span>Blog</span></a></li>' ; 
var list4 = '<li><a href="/resume"><span>Résumé</span></a></li>' ; 
var list5 = '<li><a href="http://www.flickr.com/photos/99327312@N03/"><span>Flickr</span></a></li>' ;

var active1 = '<li class="active" ><a href="/home"><span>Home</span></a></li>' ;
var active2 = '<li class="active" ><a href="/photos"><span>Albums</span></a></li>' ;
var active3 = '<li class="active" ><a href="/blog"><span>Blog</span></a></li>' ; 
var active4 = '<li class="active" ><a href="/resume"><span>Résumé</span></a></li>' ; 
var active5 = '<li class="active" ><a href="http://www.flickr.com/photos/99327312@N03/"><span>Flickr</span></a></li>' ;



function createMenu()
{
	
	if( width  && window.location.href.indexOf("home") > -1 && screen.width <1025) {
		document.write(active1) ;
		document.write(list2) ;
		document.write(list3) ;
		document.write(list4) ;
		document.write(list5) ; 
		
	}
	else	if(window.location.href.indexOf("home") > -1) {
		document.write(active1) ;
		document.write(list2) ;
		document.write(list3) ;
		document.write(list5) ; 
		
	}
	else if(window.location.href.indexOf("photos") > -1 || window.location.href.indexOf("album") > -1) {
		document.write(list1) ;
		document.write(active2) ;
		document.write(list3) ;
		document.write(list4) ;
		document.write(list5) ; 
	}
	else if(window.location.href.indexOf("blog") > -1) {
		document.write(list1) ;
		document.write(list2) ;
		document.write(active3) ;
		document.write(list4) ;
		document.write(list5) ;
	}
	else if(window.location.href.indexOf("resume") > -1) {
		document.write(list1) ;
		document.write(list2) ;
		document.write(list3) ;
		document.write(active4) ;
		document.write(list5) ;	
	}
	else if( width  && window.location.href.indexOf("andrew") > -1 && width) {
		document.write(active1) ;
		document.write(list2) ;
		document.write(list3) ;
		document.write(list4) ;
		document.write(list5) ; 
		
	}
	else 	if(window.location.href.indexOf("andrew") > -1) {
		document.write(active1) ;
		document.write(list2) ;
		document.write(list3) ;
		document.write(list5) ; 
		
	}
	
			
}

// CREATE PHOTO ALBUMS NAV BAR //
var album1 = '<li ><a href="../album_cars"><span >Random Cars</span></a></li>' ;
var album2 = '<li ><a href="../album_rome"><span >Rome, Italy</span></a></li>' ;
var album3 = '<li ><a href="../album_london"><span >London, England</span></a></li>' ; 
var album4 = '<li ><a href="../album_dublin"><span >Dublin, Ireland</span></a></li>' ;
var album5 = '<li ><a href="../photos_spain"><span >Spain 2013</span></a></li>' ;
var album6 = '<li ><a href="../album_track_day_exotics"><span >Track Day Exotis</span></a></li>' ; 
var album7 = '<li ><a href="../album_datr2013"><span >Dubs Along the Rockies 2013</span></a></li>' ; 
var album8 = '<li ><a href="../album_golden_super_cruise"><span >Golden Super Cruise</span></a></li>' ; 
var album9 = '<li ><a href="../album_hot_summer_nights"><span >Hot Summer Nights 2013</span></a></li>' ;

var albumactive1 = '<li class="active"><a href="../album_cars"><span >Random Cars</span></a></li>' ;
var albumactive2 = '<li class="active"><a href="../album_rome"><span >Rome, Italy</span></a></li>' ;
var albumactive3 = '<li class="active"><a href="../album_london"><span >London, England</span></a></li>' ; 
var albumactive4 = '<li class="active"><a href="../album_dublin"><span >Dublin, Ireland</span></a></li>' ;
var albumactive5 = '<li class="active"><a href="../photos_spain"><span >Spain 2013</span></a></li>' ;
var albumactive6 = '<li class="active"><a href="../album_track_day_exotics"><span >Track Day Exotis</span></a></li>' ; 
var albumactive7 = '<li class="active"><a href="../album_datr2013"><span >Dubs Along the Rockies 2013</span></a></li>' ; 
var albumactive8 = '<li class="active"><a href="../album_golden_super_cruise"><span >Golden Super Cruise</span></a></li>' ; 
var albumactive9 = '<li class="active"><a href="../album_hot_summer_nights"><span >Hot Summer Nights 2013</span></a></li>' ;

function createAlbumsMenu()
{
	if(window.location.href.indexOf("album_cars") > -1 || window.location.href.indexOf("photos") > -1 ) {
		document.write(albumactive1) ;
		document.write(album2) ;
		document.write(album3) ;
		document.write(album4) ;
		document.write(album5) ;
		document.write(album6) ;
		document.write(album7) ;
		document.write(album8) ;
		document.write(album9) ; 
	}
	else if(window.location.href.indexOf("album_rome") > -1) {
		document.write(album1) ;
		document.write(albumactive2) ;
		document.write(album3) ;
		document.write(album4) ;
		document.write(album5) ;
		document.write(album6) ;
		document.write(album7) ;
		document.write(album8) ;
		document.write(album9) ; 
	}
	else if(window.location.href.indexOf("album_london") > -1) {
		document.write(album1) ;
		document.write(album2) ;
		document.write(albumactive3) ;
		document.write(album4) ;
		document.write(album5) ;
		document.write(album6) ;
		document.write(album7) ;
		document.write(album8) ;
		document.write(album9) ; 
	}
	else if(window.location.href.indexOf("album_dublin") > -1) {
		document.write(album1) ;
		document.write(album2) ;
		document.write(album3) ;
		document.write(albumactive4) ;
		document.write(album5) ;
		document.write(album6) ;
		document.write(album7) ;
		document.write(album8) ;
		document.write(album9) ; 
	}
	else if(window.location.href.indexOf("album_track_day_exotics") > -1) {
		document.write(album1) ;
		document.write(album2) ;
		document.write(album3) ;
		document.write(album4) ;
		document.write(album5) ;
		document.write(albumactive6) ;
		document.write(album7) ;
		document.write(album8) ;
		document.write(album9) ; 
	}
	else if(window.location.href.indexOf("album_datr2013") > -1) {
		document.write(album1) ;
		document.write(album2) ;
		document.write(album3) ;
		document.write(album4) ;
		document.write(album5) ;
		document.write(album6) ;
		document.write(albumactive7) ;
		document.write(album8) ;
		document.write(album9) ; 
	}
	else if(window.location.href.indexOf("album_golden_super_cruise") > -1) {
		document.write(album1) ;
		document.write(album2) ;
		document.write(album3) ;
		document.write(album4) ;
		document.write(album5) ;
		document.write(album6) ;
		document.write(album7) ;
		document.write(albumactive8) ;
		document.write(album9) ; 
	}
	else if(window.location.href.indexOf("album_hot_summer_nights") > -1) {
		document.write(album1) ;
		document.write(album2) ;
		document.write(album3) ;
		document.write(album4) ;
		document.write(album5) ;
		document.write(album6) ;
		document.write(album7) ;
		document.write(album8) ;
		document.write(albumactive9) ; 
	}
	
	
}

// CREATE SPAIN PHOTO ALBUMS NAV BAR // 

var spain1 = '<li ><a  href="../album_barcelona"><span >Barcelona & Burgos, Spain</span></a></li>' ;
var spain2 = '<li ><a  href="../album_sansebastian"><span >San Sebastián, Spain (Part II)</span></a></li>' ;
var spain3 = '<li ><a  href="../album_biarritz"><span >San Sebastián, Spain and Biarritz, France</span></a></li>' ; 
var spain4 = '<li ><a  href="../album_camino"><span >Camino de Santiago</span></a></li>' ;
var spain5 = '<li ><a  href="../album_pamplona"><span >Pamplona and Logroño, Spain</span></a></li>' ; 
var spain6 = '<li ><a  href="../album_bilbao"><span >Bilbao, Spain</span></a></li>' ; 
var spain7 = '<li ><a  href="../album_guernica"><span >Guernica, Spain</span></a></li>' ; 
var spain8 = '<li ><a  href="../album_toledo"><span >Toledo, Spain</span></a></li>' ;
var spain9 = '<li ><a  href="../album_madrid"><span >Madrid, Spain</span></a></li>' ; 
var spain10 = '<li ><a  href="../album_valencia"><span >Valencia, Spain</span></a></li>' ; 

var spainactive1 = '<li class="active"><a  href="../album_barcelona"><span >Barcelona & Burgos, Spain</span></a></li>' ;
var spainactive2 = '<li class="active"><a  href="../album_sansebastian"><span >San Sebastián, Spain (Part II)</span></a></li>' ; 
var spainactive3 = '<li class="active"><a  href="../album_biarritz"><span >San Sebastián, Spain and Biarritz, France</span></a></li>' ;
var spainactive4 = '<li class="active"><a  href="../album_camino"><span >Camino de Santiago</span></a></li>' ;
var spainactive5 = '<li class="active"><a  href="../album_pamplona"><span >Pamplona and Logroño, Spain</span></a></li>' ; 
var spainactive6 = '<li class="active"><a  href="../album_bilbao"><span >Bilbao, Spain</span></a></li>' ;
var spainactive7 = '<li class="active"><a  href="../album_guernica"><span >Guernica, Spain</span></a></li>' ; 
var spainactive8 = '<li class="active"><a  href="../album_toledo"><span >Toledo, Spain</span></a></li>' ; 
var spainactive9 = '<li class="active"><a  href="../album_madrid"><span >Madrid, Spain</span></a></li>' ; 
var spainactive10 = '<li class="active"><a  href="../album_valencia"><span >Valencia, Spain</span></a></li>' ; 

function createAlbumsSpainMenu()
{
	if(window.location.href.indexOf("album_barcelona") > -1 || window.location.href.indexOf("photos_spain") > -1 ) {
		document.write(spainactive1) ;
		document.write(spain2) ;
		document.write(spain3) ;
		document.write(spain4) ;
		document.write(spain5) ;
		document.write(spain6) ;
		document.write(spain7) ;
		document.write(spain8) ;
		document.write(spain9) ;
		document.write(spain10) ;
		 
	}
	else if(window.location.href.indexOf("album_sansebastian") > -1) {
		document.write(spain1) ;
		document.write(spainactive2) ;
		document.write(spain3) ;
		document.write(spain4) ;
		document.write(spain5) ;
		document.write(spain6) ;
		document.write(spain7) ;
		document.write(spain8) ;
		document.write(spain9) ;
		document.write(spain10) ; 
	}
	else if(window.location.href.indexOf("album_biarritz") > -1) {
		document.write(spain1) ;
		document.write(spain2) ;
		document.write(spainactive3) ;
		document.write(spain4) ;
		document.write(spain5) ;
		document.write(spain6) ;
		document.write(spain7) ;
		document.write(spain8) ;
		document.write(spain9) ;
		document.write(spain10) ; 
	}
	else if(window.location.href.indexOf("album_camino") > -1) {
		document.write(spain1) ;
		document.write(spain2) ;
		document.write(spain3) ;
		document.write(spainactive4) ;
		document.write(spain5) ;
		document.write(spain6) ;
		document.write(spain7) ;
		document.write(spain8) ;
		document.write(spain9) ;
		document.write(spain10) ; 
	}
	else if(window.location.href.indexOf("album_pamplona") > -1) {
		document.write(spain1) ;
		document.write(spain2) ;
		document.write(spain3) ;
		document.write(spain4) ;
		document.write(spainactive5) ;
		document.write(spain6) ;
		document.write(spain7) ;
		document.write(spain8) ;
		document.write(spain9) ;
		document.write(spain10) ; 
	}
	else if(window.location.href.indexOf("album_bilbao") > -1) {
		document.write(spain1) ;
		document.write(spain2) ;
		document.write(spain3) ;
		document.write(spain4) ;
		document.write(spain5) ;
		document.write(spainactive6) ;
		document.write(spain7) ;
		document.write(spain8) ;
		document.write(spain9) ;
		document.write(spain10) ; 
	}
	else if(window.location.href.indexOf("album_guernica") > -1) {
		document.write(spain1) ;
		document.write(spain2) ;
		document.write(spain3) ;
		document.write(spain4) ;
		document.write(spain5) ;
		document.write(spain6) ;
		document.write(spainactive7) ;
		document.write(spain8) ;
		document.write(spain9) ;
		document.write(spain10) ; 
	}
	else if(window.location.href.indexOf("album_toledo") > -1) {
		document.write(spain1) ;
		document.write(spain2) ;
		document.write(spain3) ;
		document.write(spain4) ;
		document.write(spain5) ;
		document.write(spain6) ;
		document.write(spain7) ;
		document.write(spainactive8) ;
		document.write(spain9) ;
		document.write(spain10) ; 
	}
	else if(window.location.href.indexOf("album_madrid") > -1) {
		document.write(spain1) ;
		document.write(spain2) ;
		document.write(spain3) ;
		document.write(spain4) ;
		document.write(spain5) ;
		document.write(spain6) ;
		document.write(spain7) ;
		document.write(spain8) ;
		document.write(spainactive9) ;
		document.write(spain10) ; 
	}
	else if(window.location.href.indexOf("album_valencia") > -1) {
		document.write(spain1) ;
		document.write(spain2) ;
		document.write(spain3) ;
		document.write(spain4) ;
		document.write(spain5) ;
		document.write(spain6) ;
		document.write(spain7) ;
		document.write(spain8) ;
		document.write(spain9) ;
		document.write(spainactive10) ; 
	}
	
}







	