javascript:
(
	function(j,f)
	{
		j=['https://sgimera.github.io/mai_RatingAnalyzer/scripts/mai_inner_level_milk3.js',
		   'https://sgimera.github.io/mai_RatingAnalyzer/scripts/calc_rating.js',
		   //'https://sgimera.github.io/mai_RatingAnalyzer/scripts/maiRatingAnalyzer_body.js'
		   'https://cdn.rawgit.com/Y-RAMU/Sample/655a7143/tmpBody.js'];
		f=function(s,u)
		{
			if(j.length==0)
			{
				return;
			}
			u=j.shift()+'?'+Date.now();
			s=document.createElement('script');
			document.body.appendChild(s);
			s.charset='UTF-8';
			s.addEventListener('load',f);
			s.src=u;
		};
		(document.readyState=='loading')?document.addEventListener('DOMContentLoaded',f):f();
	}
)();
