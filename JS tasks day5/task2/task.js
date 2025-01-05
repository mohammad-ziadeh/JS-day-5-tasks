let para = document.getElementById("para");
let paraSplit = para.innerHTML.split(" ");

let highlight = paraSplit
  .map(() => {
    if (paraSplit.length >= 8) {
      return `${paraSplit}`;
    }
    return paraSplit;
  })
  .join(" ");
paragraph.innerHTML = highlightedText;
