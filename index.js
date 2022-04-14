
    var dice1 = Math.floor(Math.random()*  6)
    var dice2 = Math.floor(Math.random() * 6)

    function tela() {
      if ( dice1 < dice2) {
        document.getElementById("titulo").innerHTML = "segundo dado ganhou 🚩"
      } else if (dice1 > dice2) {
        document.getElementById("titulo").innerHTML = "🚩primeiro dado ganhou"
      } else {
        document.getElementById("titulo").innerHTML = "🚩empate🚩"
      }
    }

    function sorteio1(){
          if(dice1 === 0){
              document.getElementById("img1").src="images/dice1.png";
          } else if (dice1 === 1){
            document.getElementById("img1").src="images/dice2.png";
          } else if (dice1 === 2) {
            document.getElementById("img1").src="images/dice3.png";
          } else if (dice1 === 3) {
            document.getElementById("img1").src="images/dice4.png";
          } else if (dice1 === 4) {
            document.getElementById("img1").src="images/dice5.png";
          } else  {
            document.getElementById("img1").src="images/dice6.png";
          }
        }

        function sorteio2(){
          if(dice2 === 0){
              document.getElementById("img2").src="images/dice1.png";
          } else if (dice2 === 1){
            document.getElementById("img2").src="images/dice2.png";
          } else if (dice2 === 2) {
            document.getElementById("img2").src="images/dice3.png";
          } else if (dice2 === 3) {
            document.getElementById("img2").src="images/dice4.png";
          } else if (dice2 === 4) {
            document.getElementById("img2").src="images/dice5.png";
          } else  {
            document.getElementById("img2").src="images/dice6.png";
          }
        }

        sorteio1()

        sorteio2()

        tela()

        

    