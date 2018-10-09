var search = document.getElementById("search");
var button = document.getElementById("button");
var answer = document.getElementById("answer");
var error = document.getElementById("error");

button.addEventListener("click", spellSearch);

function spellSearch() {
    answer.style.fontFamily = "Georgia";
    answer.innerHTML = "";
    
    var spell = search.value
        .toUpperCase()
        .trim();
    
    switch (spell) {
        case "ACORIUM":
            answer.innerHTML = ("Jab -> Right");
            break;
        case "AERILLIOUS":
            answer.innerHTML = ("Jab -> Left");
            break;
        case "ASCENDIO":
            answer.innerHTML = ("Jab -> Up -> Jab");
            break;
        case "ARANIA EXUMAI":
            answer.innerHTML = ("Up -> Down -> Left -> Right");
            break;
        case "BAUBILLIOUS":
            answer.innerHTML = ("Up -> Down-Left");
            break;
        case "FUMOS":
            answer.innerHTML = ("Left -> Down");
            break;
        case "INCENDIO":
            answer.innerHTML = ("Right -> Left -> Jab");
            break;
        case "LUMOS":
            answer.innerHTML = ("Down");
            break;
        case "MOLLIARE":
            answer.innerHTML = ("Up -> Up -> Down");
            break;
        case "NOX":
            answer.innerHTML = ("Down -> Up");
            break;
        case "PERICULUM":
            answer.innerHTML = ("Jab");
            break;
        case "PROSILIOX":
            answer.innerHTML = ("Left -> Right -> Jab");
            break;
        case "PROTEGO":
            answer.innerHTML = ("Up");
            break;
        case "RECORDIUS":
            answer.innerHTML = ("Down -> Up -> Jab -> Jab");
            break;
        case "RICTUSEMPRA":
            answer.innerHTML = ("Left -> Jab -> Jab -> Right");
            break;
        case "RESPIRATIO":
            answer.innerHTML = ("Up-Right -> Down-Right -> Down");
            break;
        case "SPONGIFY":
            answer.innerHTML = ("Down -> Up -> Up");
            break;
        case "VERDIMILLIOUS":
            answer.innerHTML = ("Jab -> Up");
            break;
        case "VERMILLIOUS":
            answer.innerHTML = ("Jab -> Jab");
            break;
        default:
            if (!spell) answer.innerHTML = ("SpellName cannot be null.")
            else answer.innerHTML = (spell + " not found. Make sure that you are in the right tier, and that you are spelling the spell name correctly!")
    }
    
}