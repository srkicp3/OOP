
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
	
