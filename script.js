document.getElementById('noBtn').addEventListener('mouseover', function() {
  const x = Math.random() * (window.innerWidth - this.clientWidth);
  const y = Math.random() * (window.innerHeight - this.clientHeight);
  this.style.transform = `translate(${x}px, ${y}px)`;
});

document.getElementById('yesBtn').addEventListener('click', function() {
  document.body.innerHTML = `
        <h2>Ótimo! Onde gostaria de ir?</h2>
        <form id="placesForm" style="margin: 20px;">
            <input type="checkbox" name="place" value="BluFoodPark"> BluFoodPark<br>
            <input type="checkbox" name="place" value="Poke Beach"> Poke Beach<br>
            <input type="checkbox" name="place" value="Mahai"> Mahai<br>
            <input style="margin-bottom
:20px;" type="checkbox" name="place" value="Bontà Forno e Cucina"> Bontà Forno e Cucina<br>

            
            <input type="text" name="customPlace" placeholder="Outro lugar"><br>

            
            <input style="margin:20px" type="date" name="date" required><br>
            <button type="submit" class="form-item">Enviar</button>

        </form>
    `;

  document.getElementById('placesForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário
    window.location.href = 'confirmacao.html'; // Redireciona para a página de confirmação
  });

});
