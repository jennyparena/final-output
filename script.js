


function alertExample(){
	alert("Hello World!");
}

function promptExample(){
	let name= prompt("Enter your name");
	alert("Your name is "+ name);
}


function confirmExample(){
	let save= confirm("Are you sure you want to save this data? ");
}

function ifElseExample(){
	if (confirm("Delete this file?")== true){
		alert("File Deleted");
	}
	else{
		alert('Cancelled');
	}
}

function loopExample(){
	let i= 0;
	for (i; i <5; i++){
		alert(i);
	}
}



function nestedExample(){
	let gender= prompt("Are you a male or female [M/F]");
	if (gender.toUpperCase() == "M"){
		let age= prompt("What's your age? ");
		if(age){
			alert("You are male and your age is" + age);
		}

	}
	else if (gender.toUpperCase() == "F"){
		let age= prompt("What's your age? ");
		if(age){
			alert("You are female and your age is " + age);
		}

	}
	else{
		alert("Okay fine");
	}
}




//LOOP END HERE



let myArray = [];

function addItem() {


  if (myArray.length < 10){
    let input = document.getElementById("input").value;
    myArray.push(input);
  }
  else{
    alert("You cannot add, Maximum limit reached!");
  }
  
  display();
}

function display() {
  let list = document.getElementById("myList");
  list.innerHTML = "";
  for (let i = 0; i < myArray.length; i++) {
    let item = document.createElement("li");
    item.appendChild(document.createTextNode(myArray[i]));
    list.appendChild(item);
  }
}

function removeFirst() {
  myArray.shift();
  display();
}

function removeLast() {
  myArray.pop();
  display();
}

function addFirst(){
        const newBrand= prompt("Insert new brand to the first");
        myArray.unshift(newBrand);
       display();
}



function addLast(){
        const newBrand= prompt("Insert new brand to the last");
        myArray.push(newBrand);
     display();
}



//MULTI
const list= [
  ['Jenny', 20]
]

function displayList(){
    const listContainer= document.querySelector('.lists');
    listContainer.innerHTML= '';

    const olEl= document.createElement('ol');
    list.forEach(item =>{
        const liEl= document.createElement('li');
        liEl.innerHTML= item;
        olEl.appendChild(liEl);
    })
    listContainer.appendChild(olEl);
}

displayList();


function addList(){
    const name= document.getElementById('name').value;
    const age= document.getElementById('age').value;

    list.push([name, age]);
    displayList();

}

function shiftBtn(){
    list.shift();
    displayList();
}

function unshiftBtn(){
    const name= prompt("Enter name");
    const age= prompt("Enter age");
    list.unshift([name, age]);
    displayList();
}

function popBtn(){
    list.pop();
    displayList();
}

function pushBtn(){
    const name= prompt("Enter name");
    const age= prompt("Enter age");
    list.push([name, age]);
    displayList();
}