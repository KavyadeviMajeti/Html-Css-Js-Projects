const BASE_URL =
  "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

/* .dropdown select--> space undhi ante adhi decesendent(child,grandchild) selector */
/*ela endhuku icchan ante direct select isthe anni select elements ni select chestundi kabatti*/

const dropdowns = document.querySelectorAll(".dropdown select");//dropdown ane class lo unna select elements list store in dropdown
const btn = document.querySelector("form button");//form tag lo unna button tag ni select chesi btn variable lo store chesam
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");

for (let select of dropdowns) {
  for (currCode in countryList) {
    let newOption = document.createElement("option");//coutrylist lo unna countries ki option tag create chesi
    newOption.innerText = currCode;// currCode ni option tag lo text ga set chesam
    newOption.value = currCode; //value endhukante ,,form submit chesina appudu value ee store ayyadhi */
    if (select.name === "from" && currCode === "USD") { //we can select the choice as we like
      newOption.selected = "selected";  //each country ki option create chestunnapudu , manaki kavalsindhi default(browser open chedinappudu) undalante give selected */
    } else if (select.name === "to" && currCode === "INR") {
      newOption.selected = "selected";
    }
    select.append(newOption);//first select = to ,so to ki append chestadhi ,,next time select = from so from ki append chestundi
  }

  select.addEventListener("change", (evt) => { //select lo country ni change chesina appudu ,,,flag ni kuda change cheyadaniki function
    updateFlag(evt.target); // ee element medha aa event jarigindho ,, target= element  (target lo aa element code store ayyidhi)
    //select medha event jarigindhi kabaatti   target=<select>...</select>
    //console.log(evt.target);//-->to know which element the event is triggered
  });
}

const updateFlag = (element) => { // element=evt.target=<select>...</select>
    let currCode = element.value; //user ee option click chesthe adhi ,,selected ayyidhi(i.e, select lo kanipichiddi ),,select lo vunnadhanni we can access by value (like innertext for tags)
    let countryCode = countryList[currCode]; //codes.js file lo coutnrylist object lo properties unnai ,,we can access property value by objectname[key] --->this gives value ,, ,,this value stored in coutnry code
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;//anni country images have same path with 1 diff -countrycode ,,,so using coutnry code we can access the image
    let img = element.parentElement.querySelector("img");//document endhuku evvaledhante ,,query selctor selects only 1 element , peddha projects chessetappudu inka images untayi  ,,kada so eee format kuda use cheyyochu
    //element.parentElement.querySelector("img") means , select yokka parent element lo unna first imge element ni return chestundi
    img.src = newSrc;//img src ni marustunnam -bcuz to display the flag a/c to the country selected

    /*note: we can chane attribute value ,, 1. using setAttribute() method  or  2. accessing using ().) syntax */
  };

const updateExchangeRate = async () => { //aeait use chesam kabbati give async
  let amount = document.querySelector(".amount input");
  let amtVal = amount.value;//input lo user enter chesina value ni amtVal lo store chesam
console.log(amtVal);
  if (amtVal === "" || amtVal < 1) {
    amtVal = 1;
    amount.value = "1";  //okavela user sarigga ivvakapothe ,error rakunda default ga 1 set chesam
  }

 // console.log(fromCurr.value, toCurr.value); //to check which currency is selected
  const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`; //fromcurr , tocurr are select elements ,,use value to get (access) the selected option value
 console.log(fromCurr.value.toLowerCase(), toCurr.value.toLowerCase()); //to check which currency is selected
  let response = await fetch(URL);
  console.log(response); //to check if the response is ok or not
  let data = await response.json();
  console.log(data); //to check the data received from the API
  let rate = data[toCurr.value.toLowerCase()]; //data lo object store ayyidhi,, usd:80  ala  money exchange rate store ayyindhi
  let finalAmount = amtVal * rate;//amtvel(user enter chesina value) *rate (entha ani 1$=80 ie 80 ani)
  msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
  //             userentered value   fromCurr.value ante coutry code diplay
};



btn.addEventListener("click", (evt) => {
  evt.preventDefault();//button click chesina appudu default ga page reload avuthundi ,reload ni prevent cheyyadaniki we use this
  updateExchangeRate();//button ni click chesinappudu ee function call ayyidhi 
});

window.addEventListener("load", () => {
  updateExchangeRate(); //window.addEventListener("load", ...) runs the code after the whole page (HTML, CSS, images) is fully loaded.
});



//    NOT COMPLETED BECAUSE URL IS NOT WORKING