function highestScore(students) {
    let listClass = [];
    let school = {};
    let findHighestStudent = {};

    for (let i=0; i < students.length; i++) {
        let studentClass = students[i].class;
        if (listClass.includes(studentClass)) {
        } else {
            listClass.push(studentClass);
        }
    }

    for (let i = 0; i < listClass.length; i++) {

        let schoolKey = listClass[i];
        school[schoolKey] = { name: [], score: [] };
    }

    for (let i = 0; i < students.length; i++) {
        for (let j = 0; j < listClass.length; j++) {
            if (students[i].class === 'foxes') {
                school.foxes.name.push(students[i].name);
                school.foxes.score.push(students[i].score);
                break;
            } else if (students[i].class === 'wolves') {
                school.wolves.name.push(students[i].name);
                school.wolves.score.push(students[i].score);
                break;
            } else {
                if ((listClass).includes(students[i].class) === false) {
                    listClass.push(students[i].class);
                }
                school.tigers.name.push(students[i].name);
                school.tigers.score.push(students[i].score);
                break;
            }

        }
    }

    for (let i = 0; i < listClass.length; i++) {
        let classKey = listClass[i];
        let array1 = school[classKey].score;
        let array2 = school[classKey].name;
        let arr = [];
        let l1 = Math.min(array2.length, array1.length);
        let l2 = Math.min(array2.length, array1.length);

        while (l1--) arr.push({ name: array1[l1], score: array2[l1] });

        arr.sort(function (a, b) {
            return a.score - b.score;
        });

        while (l2--) {
            array1[l2] = arr[l2].name;
            array2[l2] = arr[l2].score;
        }
    }

    for (let i = 0; i < listClass.length; i++) {
        let schoolKey = listClass[i];
        findHighestStudent[schoolKey] = {};
        findHighestStudent[schoolKey].name = school[schoolKey].name[school[schoolKey].name.length - 1];
        findHighestStudent[schoolKey].score = school[schoolKey].score[school[schoolKey].score.length - 1]

    }

    return findHighestStudent;
}

// TEST CASE
// highestScore([
//     {
//         name: 'Dimitri',
//         score: 90,
//         class: 'foxes'
//     },
//     {
//         name: 'Alexei',
//         score: 85,
//         class: 'wolves'
//     },
//     {
//         name: 'Sergei',
//         score: 74,
//         class: 'foxes'
//     },
//     {
//         name: 'Anastasia',
//         score: 78,
//         class: 'wolves'
//     }
// ])
console.log(highestScore([
    {
        name: 'Dimitri',
        score: 90,
        class: 'foxes'
    },
    {
        name: 'Alexei',
        score: 85,
        class: 'wolves'
    },
    {
        name: 'Sergei',
        score: 74,
        class: 'foxes'
    },
    {
        name: 'Anastasia',
        score: 78,
        class: 'wolves'
    }
]));

// // {
// //   foxes: { name: 'Dimitri', score: 90 },
// //   wolves: { name: 'Alexei', score: 85 }
// // }


// console.log(highestScore([
//     {
//         name: 'Alexander',
//         score: 100,
//         class: 'foxes'
//     },
//     {
//         name: 'Alisa',
//         score: 76,
//         class: 'wolves'
//     },
//     {
//         name: 'Vladimir',
//         score: 92,
//         class: 'foxes'
//     },
//     {
//         name: 'Albert',
//         score: 71,
//         class: 'wolves'
//     },
//     {
//         name: 'Viktor',
//         score: 80,
//         class: 'tigers'
//     }
// ]));

// // {
// //   foxes: { name: 'Alexander', score: 100 },
// //   wolves: { name: 'Alisa', score: 76 },
// //   tigers: { name: 'Viktor', score: 80 }
// // }


// console.log(highestScore([])); //{}