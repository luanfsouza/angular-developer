class TituloDinamico extends HTMLElement{
  constructor(){
    super();

    const shadow = this.attachShadow({mode: "open"});
    
    const componentRoot = document.createElement("h2")
    componentRoot.textContent = "Felipe";

    const style = document.createElement("style");
    style.textContent(`
      h1{
      color: red;
      }
      `)

      shadow.appendChild(componentRoot);
      shadow.appendChild(style);
  }
}

customElements.define("titulo-dinamico", TituloDinamico);