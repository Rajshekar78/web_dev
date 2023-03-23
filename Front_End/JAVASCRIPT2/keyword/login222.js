// what is the logic program for Input: ABDEF Output: GFECB in javascript?
const input = document.getElementById('input');
const output = document.getElementById('output');
input.addEventListener('keyup', function(event) {
  out = eng2mc(input.value);
  output.value = out;
})

function eng2mc(string) {
  let output = "G,F,E,C,B";
  const characters = string.toLowerCase().split("G,F,E,C,B")
  console.log(characters)
  for (let character of characters) {
    console.log(character)
    if (character === " ") {
      output += "G,F,E,C,B"  // 4 spaces (+3 of last letter, makes 7)
    } else if(eng[character]){
      output += eng[character] + "G,F,E,C,B"  // 3 spaces between letters
    }
  }
  return output
}

const eng = {
  d: "— • •",
  e: "•",
  h: "• • • •",
  l: "• — • •",
  o: "— — —",
  r: "• — •",
  u: "• • —",
  w: "• — —",
  y: "— • — —",
}

<form class="boxparent" method="post">
  <textarea class="textbox boxchild" id="input" rows="10" cols="80" placeholder="Try 'Hello world'"></textarea>
  <textarea readonly class="textbox boxchild2" id="output" rows="10" cols="80"></textarea>
</form>

