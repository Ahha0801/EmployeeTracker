const cTable = require('console.table')
const inquirer =require ('inquirer')
const mysql = require('mysql2')
const db = mysql.createConnection(
    {
        host: '127.0.0.1',
        // MySQL username,
        user: 'root',
        // TODO: Add MySQL password here
        password: '',
        database: 'employee_db'
    },
    console.log(`Connected to the movies_db database.`)
);
async function menu() {
    const res = await inquirer.prompt([
        {
            type: 'list',
            name: 'menu',
            message: 'Welcome to the employee tracker, please select what you would like to do',
            choices: ['view all employees', 'view all roles', 'view all departments']

        }
    ])
    console.log (res)
  if (res.menu==='view all employees'){
    viewAllEmployees()

  }
}



function viewAllDepartments() {
    pool.query(
        selectDepartmentSQL,
        function (err, results, fields) {

            console.table(results)
        }
    );

}
function viewAllroles() {
    pool.query(
        selectRoleSQL,
        function (err, results, fields) {

            console.table(results)
        }
    );

}
async function viewAllEmployees() {
    const employees=await db.promise().query('select * from employee')
    console.table (employees[0])
    menu()
    }
// functioninsertDepartment(id, name) {
//     pool.query(
//         'INSERT INTO DEPARTMENT(id,name) value(${id},'${ name }')',
//         function (err, results, fields) {
//             // console.log("Added!!")
//         }

//     );

// }
// function insertRole(id, title, salary, department) {
//     pool.query(
//         "INSERT INTO ROLE(id,title,salary,department_id) value(${id}','${title}, ${salary},${departmentID})' "
//         function (err, results, fields) {
//             // console.log("Added2!!")
//         }
//     )

// } 
menu()