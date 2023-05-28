var text = document.getElementById("textField");

// for change color
var color = document.getElementById("color");
color.addEventListener("input", function () {
  text.style.color = this.value;
});

// for text bold

var bo = true;
function bold() {
  var text = document.getElementById("textField");
  var boldBtn = document.getElementById("bold");
  if (bo) {
    text.style.fontWeight = "bold";
    boldBtn.innerHTML = "<b>B</b>";
    bo = false;
  } else {
    text.style.fontWeight = "100";
    boldBtn.innerHTML = "B";
    bo = true;
  }
}

// for text underline
var ud = true;
function underLine() {
  var text = document.getElementById("textField");
  var unBtn = document.getElementById("underline");
  if (ud) {
    text.style["text-decoration"] = "underline";
    unBtn.innerHTML = "<u>U</u>";
    ud = false;
  } else {
    text.style["textDecoration"] = "none";
    unBtn.innerHTML = "U";
    ud = true;
  }
}

// for italic
var it = true;
function italic() {
  var text = document.getElementById("textField");
  var itBtn = document.getElementById("italic");
  if (it) {
    text.style.fontStyle = "italic";
    itBtn.innerHTML = "<i>I</i>";
    it = false;
  } else {
    text.style.fontStyle = "normal";
    itBtn.innerHTML = "I";
    it = true;
  }
}

function font_Style() {
  var fontsty = document.getElementById("fontStyle").value;
  var text = document.getElementById("textField");

  text.style.fontFamily = fontsty;
  console.log(font_Style);
}

function font_Size() {
  var text = document.getElementById("textField");
  var fontSz = document.getElementById("fontSize").value;
  text.style.fontSize = fontSz + "px";
  console.log(fontSz);
}

function add() {
  var text = document.getElementById("textField").value.trim();
  var list = document.getElementById("list");
  console.log(text);
  if(text == ""){
    alert("Please write some thing at text field");
  }
  else{
    list.innerHTML += `
    <li class="center1">
    <input type="text" class="textFie" value="${text}" disabled//>
    <button class="save-Post-Btn" onclick="deleteBtn(this)"><img class="img" src="./images/delete.png" alt=""></button>
    <button class="save-Post-Btn" onclick="editBtn(this)"><img id="editImg" class="img" src="./images/edit.png" alt=""></button>
    </li>
`;
  }
}

function deleteBtn(e) {
  e.parentNode.remove()
}

var editVal = true; 
function editBtn(e) {
  var editImg = document.getElementById('editImg');
  if(editVal){
    editImg.style.backgroundColor = "black"
    e.parentNode.childNodes[1].disabled = false;
    e.parentNode.childNodes[1].focus();
    editVal = false;
  }
  else {
    editImg.style.backgroundColor = "transparent"
    e.parentNode.childNodes[1].disabled = true;
    e.parentNode.childNodes[1].blur();
    editVal = true;
  }
}

function deleteAll(){
  var list = document.getElementById("list");
  var no = (list.childNodes.length);
  if(no > 1){
    list.innerHTML = "";
  }
  else{
    alert("Your save list is empty")
  }
}
