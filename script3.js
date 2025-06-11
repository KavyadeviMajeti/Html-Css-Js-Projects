let btn=document.getElementById("changeColor");
let first=document.getElementById("one");
let para=document.getElementById("para");
let name1=document.getElementById("name1");
let color=document.getElementById("col");
let second=document.getElementById("two");
let name2=document.getElementById("name2");

btn.addEventListener("click", function() {
    let red=Math.floor(Math.random() * 256);
    let green=Math.floor(Math.random() * 256);
    let blue=Math.floor(Math.random() * 256);

    let color=`rgb(${red}, ${green}, ${blue})`;
    first.style.backgroundColor=color;
    name1.value=color;
    /*similaryly we can give hex color also */
})
color.addEventListener("input", function() { /* we can use change also instead of input  ,,,,change isthe mouse color medha nunchi testene we can see change in color  */

    let colorValue=color.value; /*ante manam ee color select chestamo adhi , input type="color" ki value ayyidhi ,,we can access it by value */
    console.log(colorValue);
    second.style.backgroundColor=colorValue;
    name2.innerHTML= `User Selected color is <b><i><big> ${colorValue}</big></i></b>`;

/* only text ivvalante-->use innerText ,,, text tho patu html tags kuda unnay ante give-->innerHTML */

}

)



