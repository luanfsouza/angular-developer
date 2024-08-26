class CardNews extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });

    shadow.appendChild(this.build());
    shadow.appendChild(this.styles());
  }
  build() {
    const componentRoot = document.createElement("div");
    componentRoot.setAttribute("class", "card");

    const cardLeft = document.createElement("div");
    cardLeft.setAttribute("class", "card_left");
    const autor = document.createElement("span");
    const titulo = document.createElement("h1");
    const paragrafo = document.createElement("p");

    autor.textContent = this.getAttribute("autor") || "Anonymous";
    titulo.textContent = this.getAttribute("titule");
    paragrafo.textContent = this.getAttribute("description");
    
    cardLeft.appendChild(autor);
    cardLeft.appendChild(titulo);
    cardLeft.appendChild(paragrafo);

    const cardRigth = document.createElement("div");
    cardRigth.setAttribute("class", "card_rigth");
    
    const imagem = document.createElement("img");
    imagem.src = this.getAttribute("imgLink");
    imagem.setAttribute("alt", "foto dark 11");
    
    cardRigth.appendChild(imagem);

    componentRoot.append(cardLeft);
    componentRoot.appendChild(cardRigth);
    return componentRoot;
  }
  styles() {
    const componentRootStyles = document.createElement("style");
    componentRootStyles.textContent(`
            *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.card{
    width: 720px;
    border: 1px solid black;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.card_left, .card_right{
}
.card_right img{
    width: 300px;
    height: fit-content;
}
.card_left{
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 10px;
}

.card_left h1{
    margin-top: 10px;
    font-size: 25px;
}
.card_left p{
    color: gray;
}
.card_left span{
    font-weight: 400;
}
            `);
    return componentRootStyles;
  }
}

customElements.define("card-news", CardNews);
