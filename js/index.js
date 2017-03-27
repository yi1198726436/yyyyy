var arr=[{title:"你的第一个同桌姓什么?",imgSrc:"img/timg.jpg"},
		{title:"你的初恋是几岁?",imgSrc:"img/3.jpg"},
		{title:"你的初恋对象是谁?",imgSrc:"img/0002.jpg"},
		{title:"你最好的朋友是谁?",imgSrc:"img/002.png"},
		{title:"你做过最尴尬的事是什么?",imgSrc:"img/0003.png"},
		{title:"你最喜欢看的电影?",imgSrc:"img/0004.jpg"},
		{title:"你最喜欢的音乐是什么?",imgSrc:"img/00007.jpg"},
		{title:"你最喜欢的动漫人物?",imgSrc:"img/IMG_6343 .jpg"},
		{title:"做一个你最猥琐的表情?",imgSrc:"img/00006.png"}];

		window.onload = function(){
			var inputDiv = document.getElementById("inputDiv");
			var btn = document.getElementById("btn");
			var result = document.getElementById("result");
			var divImg = document.getElementById("divImg");
			var divTitle = document.getElementById("divTitle");
			var pageBtn = document.getElementById("pageBtn");
			var userName = document.getElementById("userName");
			inputDiv.className = "inputDivStart";
			btn.className = "btnStart";
			var length = arr.length;
			var newImg;
			userName.onfocus = function(){
				this.value = "";
			}
			
			btn.addEventListener("click",function(){
				var randomNum;
			if(userName.value==""||userName.value=="请输入您的名字"){
				divTitle.innerHTML = "你叫什么名字？";
				divTitle.style.display = "block";
			}else{
				randomNum =parseInt(Math.random()*length);
				newImg = document.createElement("img");
				newImg.src = arr[randomNum].imgSrc;
				divImg.appendChild(newImg);
				divTitle.innerHTML =userName.value+":"+ arr[randomNum].title;
				divImg.style.display = "block";
				divTitle.style.display = "block";
			}
				inputDiv.style.left = "200%";
				btn.style.left = "200%";
				result.style.top = "0%";
				main.style.backgroundColor = "rgba(255,255,255,0.8)";
			})
			pageBtn.addEventListener("click",function(){
				userName.value="请输入您的名字";
				divImg.removeChild(newImg);
				divImg.style.display = "none";
				divTitle.style.display = "none";
				inputDiv.style.left = "50%";
				btn.style.left = "50%";
				result.style.top = "100%";
				main.style.backgroundColor = "rgba(255,255,255,0)";
			});
			
			
		}