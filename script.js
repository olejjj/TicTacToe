window.onload = function () {
    app.init()
}

class App {

    // constructor, funkcja uruchamia sie automatycznie gdy tworzysz nowy obiekt (np app)
    constructor() {
        this.currentPlayer = "X";
        this.buttonX = document.querySelector(".buttonX");
        this.buttonO = document.querySelector(".buttonO");
    }

    init(){
        document.querySelectorAll(".cell").forEach(
            cell => cell.addEventListener("click", e => {
            this.playerTurn(e.target);
        }))
    }

    playerTurn(cell) {
        if (cell.children.length === 0) { // jesli nie ma zadnego dziecka (img)
            this.currentPlayer === "X" ? this.newImg("X", cell): this.newImg("O", cell);
            this.currentPlayer === "X" ? this.currentPlayer = "O": this.currentPlayer = "X";
            this.updateActiveButton();
        }
    }

    newImg(i, cell) {
        let newImg = document.createElement("img"); //utworzony w pamięci

        if (i === "X") {
            newImg.src = "/icons/x.svg";
            newImg.alt = "X";
            newImg.classList.add("X");
        } else if (i === "O"){
            newImg.src = "/icons/o.svg";
            newImg.alt = "O";
            newImg.classList.add("O");
        }
        cell.appendChild(newImg);
    }

    updateActiveButton() {
        this.buttonO.classList.remove("activeO");
        this.buttonX.classList.remove("activeX");

        this.currentPlayer === "X" ? this.buttonX.classList.add("activeX"): this.buttonO.classList.add("activeO");
    }
}

const app = new App()