let para = document.getElementById("para");
let paraSplit = para.innerHTML.split(" ");

let highlight = paraSplit
  .map((word) => {
    let newWord = word.replace(/[^a-zA-Z0-9]/g, "");
    if (newWord.length >= 8) {
      return `<span style="background-color: yellow;">${word}</span>`;
    } else {
      return word;
    }
  })
  .join(" ");
para.innerHTML = highlight;
