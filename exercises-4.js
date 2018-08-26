function graduates(students) {
    let arrayClass = [];
    let schoolObject = {};
    for (let i = 0; i < students.length; i++) {
        let studentClass = students[i].class;
        if (arrayClass.includes(studentClass)) {
        } else {
            arrayClass.push(studentClass);
        }
    }

    for (let i = 0; i < arrayClass.length; i++) {

        let schoolKey = arrayClass[i];
        schoolObject[schoolKey] = [];
    }

    for (let key in schoolObject) {
        for (let i = 0; i < students.length; i++) {
            let studentClass = students[i].class;
            let studentScore = students[i].score;
            if (studentScore > 75) {
                if (studentClass === key) {
                    schoolObject[key].push(students[i]);
                }
            }
        }
    }
    for (let key in schoolObject) {
        for (let i = 0; i < schoolObject[key].length; i++) {
            delete schoolObject[key][i].class;
        }
    }
    return schoolObject;
}

console.log(graduates([
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

// {
//   foxes: [
//     { name: 'Dimitri', score: 90 }
//   ],
//   wolves: [
//     { name: 'Alexei' , score: 85 },
//     { name: 'Anastasia', score: 78 }
//   ]
// }

console.log(graduates([
    {
        name: 'Alexander',
        score: 100,
        class: 'foxes'
    },
    {
        name: 'Alisa',
        score: 76,
        class: 'wolves'
    },
    {
        name: 'Vladimir',
        score: 92,
        class: 'foxes'
    },
    {
        name: 'Albert',
        score: 71,
        class: 'wolves'
    },
    {
        name: 'Viktor',
        score: 80,
        class: 'tigers'
    }
]));

// {
//   foxes: [
//     { name: 'Alexander', score: 100 },
//     { name: 'Vladimir', score: 92 }
//   ],
//   wolves: [
//     { name: 'Alisa', score: 76 },
//   ],
//   tigers: [
//     { name: 'Viktor', score: 80 }
//   ]
// }


console.log(graduates([])); //{}