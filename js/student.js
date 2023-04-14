// class Student {
//     constructor(name, favTopic = "C#", leastFavTopic = "STS"){
//         this.name = name;
//         this.favTopic = favTopic;
//         this.leastFavTopic = leastFavTopic;
//     }
// }

// let students = [
//     new Student("John", "STS"),
//     new Student("Amy", "SQL", "Java"),
//     new Student("Pat")
// ]

let students = [
  { name : "John", likeTopic : "C#", dislikeTopic : "STS" },
  { name : "Jill", likeTopic : "Java", dislikeTopic : "SQL" },
  { name : "Joan", likeTopic : "Azure", dislikeTopic : "JavaScript" }
]

const add = () => {
    let nameCtrl = document.getElementById("pName");
    let likeCtrl = document.getElementById("pLikeTopic");
    let dislikeCtrl = document.getElementById("pDislikeTopic");

    let newName = nameCtrl.value;
    let newLikeTopic = likeCtrl.value;
    let newDislikeTopic = dislikeCtrl.value;

    console.debug("newName",newName, "fav", newLikeTopic, "least", newDislikeTopic);

    // let newStudent = new Student(newName, newLikeTopic, newDislikeTopic); // Gregs demonstration
    let newStudent = {
        name : newName, likeTopic : newLikeTopic, dislikeTopic : newDislikeTopic
    }

    students.push(newStudent);
    console.log("Student added ...");
    render();
}

const render = () => {
    let tbody = document.getElementById("tbody");
    tbody.innerHTML = "";
    for(let student of students){
        console.log(`${student.name} | ${student.likeTopic} | ${student.dislikeTopic}`)
        let row = "<tr>";
        row += `<td>${student.name}</td>`;
        row += `<td>${student.likeTopic}</td>`;
        row += `<td>${student.dislikeTopic}</td>`;
        row += "</tr>";
        tbody.innerHTML += row;
    }
}

const loaded = () =>{
    let bodiesCtrl = document.getElementsByTagName("body");
    let bodyCtrl = bodiesCtrl[0];
    bodyCtrl.style.fontFamily = "Arial";
    let tableCtrl = document.getElementsByTagName("table")[0];
    tableCtrl.style.width = "50%";
    render();
}

