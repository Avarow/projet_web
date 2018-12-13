function Grille(nbX, nbY, canvaID){
  this.nbX=nbX;
  this.nbY=nbY;
  this.canva=document.getElementById(canvaID);
  this.ctx=canva.getContext("2d");
  this.dX = dX;
  this.dY = dY;
  this.tab = [][];
  this.obj=[];
  this.nbC=nbX*nbY;
  this.nbCur=0;
}



function initialize(tab){
  for (var i=0; i<nbX; i++)
    for (var j=0; j<nbY; j++)
      tab[i][j] = false;
}


function truncate(val)
{
	return (intval = val - val%1);
}

function getRandomInt(min, max)
{
   return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandom(min, max)
{ return (Math.random() * (max-min+1)) + min; }


