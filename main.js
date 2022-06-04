
	function myFunction() {
	var sastojci1 = document.getElementById("myPopup");
	sastojci1.classList.toggle("show");
}

	function myFunction2() {
	var sastojci1 = document.getElementById("myPopup2");
	sastojci1.classList.toggle("show");
}
	function myFunction3() {
	var sastojci1 = document.getElementById("myPopup3");
	sastojci1.classList.toggle("show");

}
	function myFunction4() {
	var sastojci1 = document.getElementById("myPopup4");
	sastojci1.classList.toggle("show");

}
	function myFunction5() {
	var sastojci1 = document.getElementById("myPopup5");
	sastojci1.classList.toggle("show");

}
	function myFunction6() {
	var sastojci1 = document.getElementById("myPopup6");
	sastojci1.classList.toggle("show");
}

	function myFunction7() {
	var sastojci1 = document.getElementById("myPopup7");
	sastojci1.classList.toggle("show");
}

	function myFunction8() {
	var sastojci1 = document.getElementById("myPopup8");
	sastojci1.classList.toggle("show");
}

	function myFunction9() {
	var sastojci1 = document.getElementById("myPopup9");
	sastojci1.classList.toggle("show");
}

	function PosaljiMejl()
	{
		var adr = document.getElementById('adresa').value;
		

		//concatenate to string to build URL
		var url = "mailto:" + adr + "subject=Palačinkarnica Novi Sad&body=Vaša porudžbina je uspešno primljena primljena i biće dostavljena u roku od maksimalno 30 minuta!";
		location.href = url; //(might want to use window.location or something else here)
	}

	
/* 	 var mydata = JSON.parse(data);
	 alert(mydata[0].ime);
	 alert(mydata[1].ime);
	 alert(mydata[2].ime); */
	/*
	var x=4;
	function IspisiKorisnikaKonzola(){
		console.log("Test: x = " + x);
		console.log("Korisnik: "+korisnik.ime + " " +korisnik.prezime);
	}
	function IspisiKorisnikaNaSajtu(){
		document.getElementById("korisnik").innerHTML = korisnik.printInfo();;
		
	}
	var korisnik={
		ime: "Srđan",
		prezime: "Nikolić",
		printInfo: function(){return this["ime"] + " " + this["prezime"];}
	}
	*/


/*       let modalBtns = [...document.querySelectorAll(".button")];
      modalBtns.forEach(function (btn) {
        btn.onclick = function () {
          let modal = btn.getAttribute("data-modal");
          document.getElementById(modal).style.display = "block";
        };
      });
      let closeBtns = [...document.querySelectorAll(".close")];
      closeBtns.forEach(function (btn) {
        btn.onclick = function () {
          let modal = btn.closest(".modal2");
          modal.style.display = "none";
        };
      });
      window.onclick = function (event) {
        if (event.target.className === "modal2") {
          event.target.style.display = "none";
        }
      }; */
	  
/* let modalBtns = [...document.querySelectorAll(".sastojci2")];
      modalBtns.forEach(function (btn) {
        btn.onclick = function () {
          let modal = btn.getAttribute("data-modal");
          document.getElementById(modalOne).style.display = "block";
        };
      });
      let closeBtns = [...document.querySelectorAll(".close")];
      closeBtns.forEach(function (btn) {
        btn.onclick = function () {
          let modal = btn.closest(".modal1");
          modal.style.display = "none";
        };
      });
      window.onclick = function (event) {
        if (event.target.className === "modal1") {
          event.target.style.display = "none";
        }
      }; */
	/*   var DnevniSpecijal;
	  fetch('./data.json')
	  .then((response) => {
		return response.json()
	  })
	  .then((data) => {
		// Work with JSON data here
		DnevniSpecijal=data["DnevniSpecijal"];
		console.log(data)
	  })
	  .catch((err) => {
		// Do something for an error here
	  }) */
	  
	var DnevniSpecijal = 
	
	[
		
		{
			Ime: "Kafa",
			Slika: "KafaPic.jpg"
		},
		
		{
			Ime: "Smuti",
			Slika: "SmutiPic.png"
		},
		
		{
			Ime: "Pica",
			Slika: "PicaPic.jpg"
			
		}
	];

	  
	  
	  var meninaslov=document.createElement("div");
	  meninaslov.className="meninaslov";
	  var naslov= document.createElement("h3");
	  naslov.className="h3";
	  naslov.innerText = "Dnevni specijal";
	  meninaslov.appendChild(naslov);
	  document.getElementById("DnSpecijal").appendChild(meninaslov);
	  
	  
	  
	  
		  
	  var meniDnevni = document.createElement("div");
	  meniDnevni.className="menideo1";
	  document.getElementById("DnSpecijal").appendChild(meniDnevni); 
	  document.body.insertBefore(meniDnevni, document.getElementById("Rezervacija") );
	  
	  var tabela1 = document.createElement("div");
	  tabela1.className="tabela1";
	  meniDnevni.appendChild(tabela1);
	  
	  var kolona1 = document.createElement("div");
	  kolona1.className="kolona";
	  tabela1.appendChild(kolona1);
	  
	  var slika1 = document.createElement("div");
	  slika1.className="slika1";
	  kolona1.appendChild(slika1);
	  
	  var dugme=document.createElement("div");
	  dugme.className="dugme";
	  slika1.appendChild(dugme);
	  
	  var sastojci1 = document.createElement("button");
	  sastojci1.className="sastojci1";
	  sastojci1.innerText="vidi sastojke";
	  sastojci1.onclick = function() {myFunction7()};
	  
	  var sastojci1text= document.createElement("span");
	  sastojci1text.className="sastojci1text";
	  sastojci1text.innerText="kafa, mleko, šećer";
	  sastojci1text.id = "myPopup7";
	  dugme.appendChild(sastojci1);
	  sastojci1.appendChild(sastojci1text);
	  
	  var dugme2 = document.createElement("div");
	  dugme2.className="dugme";
	  
	  var sastojci2 = document.createElement("button");
	  sastojci2.className="sastojci2";
	  sastojci2.innerText="poruči";
	  /* var modal=document.getElementById("modalOne1");
	  sastojci2.data= modal.id;   */
	  /* sastojci2.data-modal="modal2"; */ /* postoji data-modal ali mi daje error u konzoli kada ga iskoristim*/
	  sastojci2.data="modal2";
	  dugme2.appendChild(sastojci2);
	  slika1.appendChild(dugme2);
	  
	  
	  var slikaKafa=document.createElement("img");
	  slikaKafa.src= DnevniSpecijal[0].Slika;
	  slikaKafa.className="slikaKafa";
	  slika1.appendChild(slikaKafa);
	  
	  var h31 = document.createElement("h3");
	  h31.className="h31";
	  h31.innerText=DnevniSpecijal[0].Ime;
	  kolona1.appendChild(h31);
	  
	  
	  
	  
	  var kolona2 = document.createElement("div");
	  kolona2.className="kolona";
	  tabela1.appendChild(kolona2);
	  
	  var slika2 = document.createElement("div");
	  slika2.className="slika1";
	  kolona2.appendChild(slika2);
	  
	  var dugme1=document.createElement("div");
	  dugme1.className="dugme";
	  slika2.appendChild(dugme1);
	  
	  var sastojci2 = document.createElement("button");
	  sastojci2.className="sastojci1";
	  sastojci2.innerText="vidi sastojke";
	  sastojci2.onclick = function() {myFunction8()};
	  
	  var sastojci2text= document.createElement("span");
	  sastojci2text.className="sastojci1text";
	  sastojci2text.innerText="jagoda, borovnica, kivi";
	  sastojci2text.id = "myPopup8";
	  dugme1.appendChild(sastojci2);
	  sastojci2.appendChild(sastojci2text);
	  
	  var dugme22 = document.createElement("div");
	  dugme22.className="dugme";
	  
	  var sastojci22 = document.createElement("button");
	  sastojci22.className="sastojci2";
	  sastojci22.innerText="poruči";
	  var modal=document.getElementById("modalOne1");		/*još neki pokušaji*/
	  sastojci2.data= modal.id;  
	  /* sastojci2.className="modal2"; */
	  dugme22.appendChild(sastojci22);
	  slika2.appendChild(dugme22);
	  
	  
	  var slikaSmuti=document.createElement("img");
	  slikaSmuti.src= DnevniSpecijal[1].Slika;
	  slikaSmuti.className="slikaKafa";
	  slika2.appendChild(slikaSmuti);
	  
	  var h312 = document.createElement("h3");
	  h312.className="h31";
	  h312.innerText=DnevniSpecijal[1].Ime;
	  kolona2.appendChild(h312);
	  
	  
	  
	  

	  
	  
	  var kolona3 = document.createElement("div");
	  kolona3.className="kolona";
	  tabela1.appendChild(kolona3);
	  
	  var slika3 = document.createElement("div");
	  slika3.className="slika1";
	  kolona3.appendChild(slika3);
	  
	  var dugme3=document.createElement("div");
	  dugme3.className="dugme";
	  slika3.appendChild(dugme3);
	  
	  var sastojci3 = document.createElement("button");
	  sastojci3.className="sastojci1";
	  sastojci3.innerText="vidi sastojke";
	  sastojci3.onclick = function() {myFunction9()};
	  
	  var sastojci3text= document.createElement("span");
	  sastojci3text.className="sastojci1text";
	  sastojci3text.innerText="jaja, šunka, masline, šampinjoni";
	  sastojci3text.id = "myPopup9";
	  dugme3.appendChild(sastojci3);
	  sastojci3.appendChild(sastojci3text);
	  
	  var dugme32 = document.createElement("div");
	  dugme32.className="dugme";
	  
	  var sastojci32 = document.createElement("button");
	  sastojci32.className="sastojci2";
	  sastojci32.innerText="poruči";
	  var modal=document.getElementById("modalOne1");
	  sastojci32.data= modal.id;  
	  /* sastojci2.className="modal2"; */
	  dugme32.appendChild(sastojci32);
	  slika3.appendChild(dugme32);
	  
	  
	  var slikaPica=document.createElement("img");
	  slikaPica.src= DnevniSpecijal[2].Slika;
	  slikaPica.className="slikaKafa";
	  slika3.appendChild(slikaPica);
	  
	  var h313 = document.createElement("h3");
	  h313.className="h31";
	  h313.innerText=DnevniSpecijal[2].Ime;
	  kolona3.appendChild(h313);
	  
	  
	/* var test=document.createElement("div");
	  test.style.backgroundColor = "blue";
	  test.height= "200 px";
	  test.width= "200 px";
	  document.getElementById("test2").appendChild(test);
	  document.getElementById("Rezervacija").appendChild(document.getElementById("test2"));
	  document.body.appendChild(document.getElementById("Rezervacija"));
	  document.body.insertBefore(test, document.getElementById("test" )); */
	  
	  
	  
	
	var json = {name:"products", data:[{"id":1,"title":"iPhone 9","description":"An apple mobile which is nothing like apple","price":549,"discountPercentage":12.96,"rating":4.69,"stock":94,"brand":"Apple","category":"smartphones","thumbnail":"https://dummyjson.com/image/i/products/1/thumbnail.jpg","images":["https://dummyjson.com/image/i/products/1/1.jpg","https://dummyjson.com/image/i/products/1/2.jpg","https://dummyjson.com/image/i/products/1/3.jpg","https://dummyjson.com/image/i/products/1/4.jpg","https://dummyjson.com/image/i/products/1/thumbnail.jpg"]},{"id":2,"title":"iPhone X","description":"SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...","price":899,"discountPercentage":17.94,"rating":4.44,"stock":34,"brand":"Apple","category":"smartphones","thumbnail":"https://dummyjson.com/image/i/products/2/thumbnail.jpg","images":["https://dummyjson.com/image/i/products/2/1.jpg","https://dummyjson.com/image/i/products/2/2.jpg","https://dummyjson.com/image/i/products/2/3.jpg","https://dummyjson.com/image/i/products/2/thumbnail.jpg"]},{"id":3,"title":"Samsung Universe 9","description":"Samsung's new variant which goes beyond Galaxy to the Universe","price":1249,"discountPercentage":15.46,"rating":4.09,"stock":36,"brand":"Samsung","category":"smartphones","thumbnail":"https://dummyjson.com/image/i/products/3/thumbnail.jpg","images":["https://dummyjson.com/image/i/products/3/1.jpg"]},{"id":4,"title":"OPPOF19","description":"OPPO F19 is officially announced on April 2021.","price":280,"discountPercentage":17.91,"rating":4.3,"stock":123,"brand":"OPPO","category":"smartphones","thumbnail":"https://dummyjson.com/image/i/products/4/thumbnail.jpg","images":["https://dummyjson.com/image/i/products/4/1.jpg","https://dummyjson.com/image/i/products/4/2.jpg","https://dummyjson.com/image/i/products/4/3.jpg","https://dummyjson.com/image/i/products/4/4.jpg","https://dummyjson.com/image/i/products/4/thumbnail.jpg"]},{"id":5,"title":"Huawei P30","description":"Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.","price":499,"discountPercentage":10.58,"rating":4.09,"stock":32,"brand":"Huawei","category":"smartphones","thumbnail":"https://dummyjson.com/image/i/products/5/thumbnail.jpg","images":["https://dummyjson.com/image/i/products/5/1.jpg","https://dummyjson.com/image/i/products/5/2.jpg","https://dummyjson.com/image/i/products/5/3.jpg"]}]};
	/* var myjson= JSON.stringify(json); */
	function PromeniSpan() {
	var blk2 = document.getElementById("blk2p");
	
	   blk2.innerHTML=json.name;		
	   /* blk2.innerHTML=myjson.name; */  /*ne radi, daje undefined*/
}

	function KreirajElemente() {
	var mojdiv= document.getElementById("pismeni2");
	for(var i=0; i< /* myjson.data.length *//*isto ne radi*/ json.data.length; i++)
	{
		var paragraf= document.createElement("p");
		/* paragraf.innerHTML= myjson.data[i]; */ /* Uncaught TypeError: Cannot read properties of undefined (reading '0')
    at KreirajElemente (main.js:354:34)*/  
		paragraf.innerText=""+JSON.stringify(json.data[i]);
		mojdiv.appendChild(paragraf);
		
	}
	
}
	  
	  
	  
	  

