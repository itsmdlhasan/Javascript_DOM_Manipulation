// call
const student = {
    name: 'Abul',
    Id: 11,
    study: function (time) {
        console.log(time, 'study kortese');
    }
}
console.log(student.study(4));


const liCollection = document.getElementsByTagName('li'); // document e thaka sokol li element ke loop kore dekhabe
console.log(liCollection);

for (const li of liCollection) {
    console.log(li);
    console.log(li.innerText);
}


const allHeadings = document.getElementsByTagName('h1'); // document e thaka sokol h1 heading ke loop kore dekhabe
for (const heading of allHeadings) {
    console.log(heading.innerText);
}



const places = document.getElementsByClassName('important-place'); // same class name er upor loop chalabe
for (const place of places) {
    console.log(place);
}



// style
const sections = document.querySelectorAll('section'); // jehetu section ekta tag tai . ba # use kora lagbe na
for (const section of sections) {
    section.style.border = '2px solid steelblue';
    section.style.borderRadius = '5px';
    section.style.marginTop = '10px';
}



// Node (appendChild)

// 1. where to add
const bandContainer = document.getElementById('band-container');
// 2. what to add
const li = document.createElement('li');
li.innerText = 'pahartoli ( i am added by append child)';
// 3. add
bandContainer.appendChild(li);