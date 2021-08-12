# SC_A_JS_DOMElementsLev2_2_202010812
https://ellachoy.github.io/SC_A_JS_DOMElementsLev2_2_202010812/
## DOM_form_value
Nutze
getElementById
.value;
function showMeText(){
    console.log("test");
    let vorname=(document.getElementById("vorname"));
    console.log(vorname.value);
    let nachname=(document.getElementById("nachname"));
    console.log(document.getElementById("nachname").value);
    let land=(document.getElementById("land"));
    console.log(document.getElementById("land").value);
  console.log("fullname:"+ "," +vorname.value + nachname.value + "," +"Land:"+land.value);
    
}
