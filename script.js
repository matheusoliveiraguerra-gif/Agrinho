document.addEventListener("DOMContentLoaded", () => {
    const botao = document.getElementById("btnInterativo");
  
    botao.addEventListener("click", () => {
      // Verifica se o card já existe (evita duplicar)
      if (document.querySelector(".card-sustentabilidade")) return;
  
      // Cria o card
      const card = document.createElement("div");
      card.classList.add("card-sustentabilidade");
  
      card.innerHTML = `
        <h2>Sustentabilidade no Agro</h2>
        <p>
          A sustentabilidade no agronegócio envolve práticas como rotação de culturas,
          uso consciente da água, redução de agrotóxicos e preservação de áreas naturais.
          Essas ações ajudam a manter a produção sem comprometer o meio ambiente.
        </p>
        <button id="fecharCard">Fechar</button>
      `;
  
      // Adiciona o card na página (dentro do main)
      document.querySelector(".conteudo-principal").appendChild(card);
  
      // Botão de fechar
      document.getElementById("fecharCard").addEventListener("click", () => {
        card.remove();
      });
    });
  });
