class maindivy {
    constructor() {
      this.mainDiv = this.createMainDiv();
      this.lewodiv = this.lewomain();
      this.prawodiv = this.prawomain();
      this.smalldiv = this.prawosmall();
      this.male1 = this.malezielone();
      this.male2 = this.malezolte();
      this.male4 = this.malezolte();
      this.male3 = this.malezielone();
    }
  
    createMainDiv() {
      const mainDiv = document.createElement("div");
      document.body.appendChild(mainDiv);
      mainDiv.style.display = "flex";
      mainDiv.style.flexWrap = "wrap";
      mainDiv.style.backgroundColor = "black";
      mainDiv.style.border = "5px solid white";
  
      return mainDiv;
    }
    lewomain() {
      const lewodiv = document.createElement("div");
      this.mainDiv.appendChild(lewodiv);
      lewodiv.style.display = "flex";
      lewodiv.style.flexWrap = "wrap";
      lewodiv.style.backgroundColor = "black";
      lewodiv.style.border = "3px solid black";
      return lewodiv;
    }
    prawomain() {
      const prawodiv = document.createElement("div");
      this.mainDiv.appendChild(prawodiv);
      prawodiv.style.display = "flex";
      prawodiv.style.flexWrap = "wrap";
      prawodiv.style.backgroundColor = "red";
      prawodiv.style.height = "min-content";
      prawodiv.style.border = "3px solid black";
      prawodiv.style.width = "240px";
      prawodiv.style.padding = "5px";
      return prawodiv;
    }
    prawosmall() {
      const prawosmalldiv = document.createElement("div");
      this.prawodiv.appendChild(prawosmalldiv);
      prawosmalldiv.style.display = "flex";
      prawosmalldiv.style.flexWrap = "wrap";
      prawosmalldiv.style.height = "auto";
      prawosmalldiv.style.backgroundColor = "blue";
      prawosmalldiv.style.border = "3px solid white";
      prawosmalldiv.style.height = "min-content";
      prawosmalldiv.style.padding = "5px";
      return prawosmalldiv;
    }
    malezielone() {
      const male = document.createElement("div");
      this.smalldiv.appendChild(male);
      male.style.display = "flex";
      male.style.flexWrap = "wrap";
      male.style.backgroundColor = "green";
      male.style.border = "1px solid white";
      male.style.width = "100px";
      male.style.height = "100px";
      male.style.margin = "5px";
      return male;
    }
    malezolte() {
      const male = document.createElement("div");
      this.smalldiv.appendChild(male);
      male.style.display = "flex";
      male.style.flexWrap = "wrap";
      male.style.backgroundColor = "yellow";
      male.style.border = "1px solid white";
      male.style.width = "100px";
      male.style.height = "100px";
      male.style.margin = "5px";
      return male;
    }
    lewoanim() {
      let i = 1;
  
      setInterval(() => {
        const lewoanim = document.createElement("div");
        let r = Math.floor(Math.random() * (255 + 1));
        let g = Math.floor(Math.random() * (255 + 1));
        let b = Math.floor(Math.random() * (255 + 1));
        lewoanim.style.background =
          "#" + r.toString(16) + g.toString(16) + b.toString(16);
        lewoanim.style.width = "5px";
        lewoanim.style.border = "1px solid white";
        lewoanim.style.height = Math.pow(i, 2).toString() + "px";
        this.lewodiv.appendChild(lewoanim);
        i++;
      }, 1000);
    }
  }
  
  const newmaindivy = new maindivy();
  newmaindivy.lewoanim();