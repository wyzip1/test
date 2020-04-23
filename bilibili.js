const imgs = document.querySelector('.imgs');
const li = document.querySelectorAll('.lunbo ul li');
var index = 0;
lb();

function lb(){
	start = setInterval(function(){
		index++;
		let x = -550*index+'px';
		imgs.style.transform = "translateX("+x+")";
		li.forEach(function(a){
			if(a.classList.contains('on')){
				a.classList.remove('on');
			}
		})
		if(index == imgs.children.length){
			index=0;
			x = -550*index+'px';
			imgs.style.transform = "translateX("+x+")";
		}
		li[index].classList.add('on');
	},3000)
}

li.forEach(function(a){
	a.addEventListener('click', function(e){
		index = Array.from(li).indexOf(e.target);
		let x = -550*index+'px';
		imgs.style.transform = "translateX("+x+")";
		li.forEach(function(a){
			if(a.classList.contains('on')){
				a.classList.remove('on');
			}
		})
		li[index].classList.add('on');
	})
})

imgs.addEventListener('mouseenter',function(){
	clearInterval(start);
})
imgs.addEventListener('mouseleave',function(){
	lb();
})