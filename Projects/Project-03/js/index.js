				function is_pd(){
					console.log(parseInt(dragimages.style.left));
					if(parseInt(dragimages.style.left)==0 || parseInt(dragimages.style.top)==0){
							dragimages.style.left=1;
							dragimages.style.top=1;
							return false;
						}
						if(parseInt(dragimages.style.left)>0 || parseInt(dragimages.style.top)>0){
							dragimages.style.left=-1;
							dragimages.style.top=-1;
							return false;
						}
						return true;
				}
				//setInterval("is_pd()",1000);
				
				//Img Drag and drag
				drag = 0;
				move = 0;
				function mousedown() {
					if(drag) {
						X1 = window.event.x - parseInt(dragimages.style.left);
						Y1 = window.event.y - parseInt(dragimages.style.top);
						dragimages.style.Index += 1;
						move = 1;
					}
				}
				function mouseStop() {
					window.event.returnValue = false;
				}

				function mousemove() {
					if(move) {
//						if(!is_pd()){
//							return ;	
//						}
						dragimages.style.left = window.event.x - X1;
						dragimages.style.top = window.event.y - Y1;
					}
				}
				function mouseup() {
					move = 0;
				}
				function remove() {
					var layer2=document.getElementById("layer2");
					layer2.style.width="999999px";
					layer2.style.height="999999px";
					layer2.style.left=999999/2*-1-2360;
					layer2.style.top=999999/2*-1+571;
					document.all.layer2.onmousemove = mousemove;
					document.all.layer2.onmousedown = mousedown;
					document.all.layer2.onmouseup = mouseup;
					document.all.layer2.ondragstart = mouseStop;
				}
				//Open Footer Img
				function layer_change(index){
					var Shelter=document.getElementById("Shelter");
					var Shelter_img=document.getElementById("Shelter_img");
					var footer_li_list=document.getElementById("footer").getElementsByTagName("li");
					var audio_list=document.getElementById("audio").getElementsByTagName("audio");
					//Open Effect
					for(var i in footer_li_list){
						//Cycle deletion className
						if(footer_li_list[i].className!=""){
							var str=footer_li_list[i].className+"";
							if(str.indexOf("Open_zt")!=-1){
								footer_li_list[i].classList.remove("Open_zt");
							}
						}
					}
					Shelter.style.display="block"; //Shelter display
					Shelter_img.src="images/p"+(parseInt(index)+1)+".jpg";
					//Cycle suspend audio
					for(var i=0;i<audio_list.length;i++){
						if(!audio_list[i].paused){
							audio_list[i].pause();
						}
					}
					//Add Effect
					footer_li_list[index].classList.add("Open_zt");
					//Play audio
					audio_list[index+1].play();
				}
				//Onlad audio play
				var is_onlad=0;
				function onlad(){
					if(is_onlad==0){
						layer_Op();
						is_onlad=1;
						return ;
					}else{
						
					}
				}
				//Close_gb
				function close_gb(){
					var audio_list=document.getElementById("audio").getElementsByTagName("audio");
					var She=document.getElementById("Shelter");
					She.style.display="none"; //将图片层隐藏
					//Close 后将所有播放的音乐关闭
					for(var i=0;i<audio_list.length;i++){
						if(!audio_list[i].paused){
							audio_list[i].pause();
						}
					}
					layer_Op(); //等所有音频暂停后，播放起主页的音频
				}
//				//layer2 Play
				function layer_Op(){
					var audio=document.getElementById("audio_auto");
					audio.play();
				}
