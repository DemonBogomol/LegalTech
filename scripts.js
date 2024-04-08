
function showMore()
{
    var moreInfo = document.getElementById("moreInfo");
    var moreBtn = document.getElementById("moreBtn");

    if (moreInfo.style.display === "none") 
	{
        moreInfo.style.display = "block";
        moreBtn.innerText = "Скрыть";
    } else 
	{
        moreInfo.style.display = "none";
        moreBtn.innerText = "Подробнее";
    }
}

function adaptSite() 
{
  var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  if (width <= 768) 
  {
    document.getElementById('header').style.width = '100%';
    document.getElementById('menu').style.display = 'none';
  } 
  else 
  {
    document.getElementById('header').style.width = '50%';
    document.getElementById('menu').style.display = 'block';
  }
}

window.addEventListener('resize', adaptSite);

window.onload = adaptSite;