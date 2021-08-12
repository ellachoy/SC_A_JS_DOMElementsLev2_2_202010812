console.log("hi, neue Aufgabe hi");

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

