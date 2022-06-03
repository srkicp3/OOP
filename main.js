
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
	  var DnevniSpecijal;
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
	  })
	  
	  
	  
	  function KreirajMeni(){
		  
	  var meniDnevni = document.createElement("div");
	  meniDnevni.class="menideo1";
	  document.getElementById("DnSpecijal").appendChild(meniDnevni); 
	  document.body.insertBefore(meniDnevni, getElementById("Rezervacija") );
	  
	  var tabela1 = document.createElement("div");
	  tabela1.class="tabela1";
	  meniDnevni.appendChild(tabela1);
	  
	  var kolona1 = document.createElement("div");
	  kolona1.class="kolona";
	  tabela1.appendChild(kolona1);
	  
	  var slika1 = document.createElement("div");
	  slika1.class="slika1";
	  kolona1.appendChild(slika1);
	  
	  var dugme=document.createElement("div");
	  dugme.class="dugme";
	  slika1.appendChild(dugme);
	  
	  var sastojci1 = document.createElement("button");
	  sastojci1.class="sastojci1";
	  sastojci1.innerText="vidi sastojke";
	  sastojci1.onclick="myFunction4()";
	  
	  var sastojci1text= document.createElement("span");
	  sastojci1text.class="sastojci1text";
	  sastojci1text.innerText="banana, sladoled, šlag, čoko preliv";
	  sastojci1text.id = "myPopup4";
	  dugme.appendChild(sastojci1);
	  sastojci1.appendChild(sastojci1text);
	  
	  var dugme2 = document.createElement("div");
	  dugme2.class=dugme;
	  
	  var sastojci2 = document.createElement("button");
	  sastojci2.class="sastojci2";
	  sastojci2.innerText="poruči";
	  /* sastojci2.data-modal= "modalOne1"; */
	  sastojci2.class="modal12";
	  dugme2.appendChild(sastojci2);
	  slika1.appendChild(dugme2);
	  
	  var slikaimg = '<img src="'+ DnevniSpecijal[0].Slika+'" />';
	  var slikaKafa=document.createElement("img");
	  slikaKafa.innerHTML = slikaimg;
	  slikaKafa.height = "350px";
	  slikaKafa.width = "450px";
	  slikaKafa.border = "1 px";
	  slika1.appendChild(slikaKafa);
	  
	  var h31 = document.createElement("h3");
	  h31.class="h31";
	  h31.innerText="Kafa";
	  kolona1.appendChild(h31);
	  }
	  
	/* var test=document.createElement("div");
	  test.style.backgroundColor = "blue";
	  test.height= "200 px";
	  test.width= "200 px";
	  document.getElementById("test2").appendChild(test);
	  document.getElementById("Rezervacija").appendChild(document.getElementById("test2"));
	  document.body.appendChild(document.getElementById("Rezervacija"));
	  document.body.insertBefore(test, document.getElementById("test" )); */
	  
	  
	  
	  
	  

