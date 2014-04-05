


    <center> 
    <canvas id="myCanvas" width="1000px" height="650px" style="border:5px solid rgb(194,70,69) ;">
        Your Browser Does Not Support HTML5. Sorry.
    </canvas>
    </center>


<script type="text/javascript">
  	var c=document.getElementById("myCanvas") ;
	var cxt=c.getContext("2d") ;  

	var forCount ; 
	var brickX ; 
	var brickY ;
	var mouseX = 0; 

	
function draw() 
{
	<!-- Background --> 
	cxt.fillStyle="rgb(118,30,30)" ;
	cxt.fillRect(0,0,c.width,c.height) ;
	
	<!-- Bricks --> 
	cxt.fillStyle="rgb(194,70,69)" ; 
	
	forCount = 0 ; 
	brickX = 10 ;
	brickY = 45 ; 
	
	for( forCount ; forCount < 55 ; forCount++ ) 
	{
		if( forCount == 11 || forCount == 22 || forCount == 33 || forCount == 44 || forCount == 55  )
		{
			brickY = brickY + 25 ; 
			brickX = 10 ; 
		}
		cxt.fillRect(brickX, brickY, 80, 15) ;
		brickX = brickX + 90 ;  
		
	}
}



c.onmousemove = function (event) 
{ 

	<!--- Mouse Paddle Movement---> 
	cxt.fillStyle="rgb(118,30,30)" 
    cxt.fillRect(mouseX, 600,100,30);	
    mouseX = event.pageX - this.offsetTop ;
	cxt.fillStyle="rgb(194,70,69)" ;  
    cxt.fillRect(mouseX, 600,100,30);
}

function paddle()
{
	cxt.fillStyle="rgb(194,70,69)" ; 
    cxt.fillRect(mouseX, 600,100,30);	
	
}

draw() ; 
paddle() ; 



</script>