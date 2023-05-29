
function AddChild(name,result) {
    const resultArea =  document.getElementById("triangleoutput")
    const li = document.createElement('li') 
    li.innerText ="Result of "+name+": "+result  
    resultArea.appendChild(li)
}





document.getElementById("btnheight").addEventListener("click", function() {
    const base = parseInt(document.getElementById("base").value);
    const height = parseInt(document.getElementById("height").value);
    const area = 0.5 * base * height;
    AddChild("Triangle",area)
     document.getElementById("triangleoutput").innerText = "Area of Triange is : " + area;
});
 
document.getElementById("paraBtnheight").addEventListener("click", function() {
    const base = parseInt(document.getElementById("paraBase").value);
    const height = parseInt(document.getElementById("paraHeight").value);
    const area = base * height;
    AddChild("Triangle",area)
     document.getElementById("triangleoutput").innerText = "Area of Parallelogram is : " + area;
});
 
document.getElementById("recbtnheight").addEventListener("click", function() {
    const base = parseInt(document.getElementById("recBase").value);
    const height = parseInt(document.getElementById("recHeight").value);
    const area = base * height;
    AddChild("Rectangle",area)
     document.getElementById("triangleoutput").innerText = "Area of  Rectangle is : " + area;
});
 
document.getElementById("pentbtnheight").addEventListener("click", function() {
    const base = parseInt(document.getElementById("pentBase").value);
    const height = parseInt(document.getElementById("pentHeight").value);
    const area = 0.5 * base * height;
    AddChild("Rectangle",area)
     document.getElementById("triangleoutput").innerText = "Area of pentagon is : " + area;
});
 

document.getElementById("ellbtnheight").addEventListener("click", function() {
    const base = parseInt(document.getElementById("ellbase").value);
    const height = parseInt(document.getElementById("ellheight").value);
    const area = 0.5 * base * height;
    AddChild("Rectangle",area)
     document.getElementById("triangleoutput").innerText = "Area of Ellipse is : " + area;
});
 


document.getElementById("rhobtnheight").addEventListener("click", function() {
    const base = parseInt(document.getElementById("rhobase").value);
    const height = parseInt(document.getElementById("rhoheight").value);
    const area = 0.5 * base * height;
    AddChild("Rectangle",area)
     document.getElementById("triangleoutput").innerText = "Area of Rhombus is : " + area;
});