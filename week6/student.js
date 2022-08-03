var students =[loadStudents()];

document.querySelector('#add_btn').addEventListener('click',addStudent);
document.querySelector('#delete_btn').addEventListener('click',delectStudent);

function loadStudents() {
    return JSON.parse(localStorage.getItem('sudents'));
}

function saveStudents() {
    localStorage.setItem('students', JSON.stringify(students));
}

function addStudent() {
    let student = {
        ID: document.querySelector('#id').value,
        Name: document.querySelector('#name').value
    };
    students.push(student);
    displayList();
}
function displayList() {
    let res = '<ul>';
    for (let student of students) {
        res += '<li>' + student.ID + ' : ' + student.Name + '<li>';
    }
    res += '<ul>'
    document.querySelector('#studen_list').innerHTML = res;
}

function delectStudent{
    tmp= [];
    for (let student of students) {
        if (student.ID == document.querySelector('#id').value) {
            continue;
        }
        tmp.push(student);
    }
    students = tmp;
    displayList();
}

