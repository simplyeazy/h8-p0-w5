function graduates(students) {
    let listClass = [];
    let school = {};
    // CREATING LIST OF CLASSES FROM INPUT
    for (let i = 0; i < students.length; i++) { // get list of class
        let studentClass = students[i].class;
        if (listClass.includes(studentClass)) {
        } else {
            listClass.push(studentClass);
        }
    }

    for (let i = 0; i < listClass.length; i++) {

        let schoolKey = listClass[i];
        school[schoolKey] = [];
    }

    for (let key in school) {
        for (let i = 0; i < students.length; i++) {
            let studentClass = students[i].class;
            let studentScore = students[i].score;
            if (studentScore > 75) {
                if (studentClass === key) {
                    school[key].push(students[i]);
                }
            }
        }
    }
    for (let key in school) {
        for (let i = 0; i < school[key].length; i++) {
            delete school[key][i].class;
        }
    }
    return school;
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