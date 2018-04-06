const students = [
    {
        name: "Jean",
        age : 23,
        height: 175
    },
    {
        name: "Toto",
        age : 33,
        height: 180
    },
    {
        name: "Alfred",
        age : 55,
        height: 170
    },
    {
        name: "Lucette",
        age : 16,
        height: 155
    }
];


function filtersAdults(students) {
    const adults = [];
    for (let i = 0; i < students.length; i++) {
        if (students[i].age >= 18) {
            adults.push(students[i]);
        }
    }
    return adults;
}

function averageAge(students) {
    let sumAge = 0;
    for (let i = 0; i < students.length; i++) {
        sumAge += students[i].age;
    }
    return sumAge / students.length;
}

function adultAverageAge(students) {

    let adults = filtersAdults(students);
    return averageAge(adults);


}

function sortStudent(students) {
    let results = [];

    for (let i = 0; i < students.length; i++) {
        let student = students[i];
        let foundOlderStudent = false;

        for (let j = 0; j < results.length && !foundOlderStudent; j++) {
            if (student.age < results[j].age) {
                foundOlderStudent = true;
                results.splice(j, 0, student);
            }
        }
        if (!foundOlderStudent) {
            results.push(student);
        }
    }
    return results;
}
/*
function sortStudentsBis(students) {
    const result = [].concat(students);

    result.sort(function (student1, student2) {
        return student1.age - student2.age;
    });

    return result;
}*/

function youngestStudent(students) {
    let listStudents = sortStudent(students);
    return listStudents[0];
}

function smallestStudent(students) {
    let result = students[0];
    for(let i = 1; i < students.length; i++){
        if(result.height > students[i].height){
            result = students[i];
        }
    }
    return result;
}

console.log(averageAge(students));
console.log(adultAverageAge(students));
console.log(smallestStudent(students));
