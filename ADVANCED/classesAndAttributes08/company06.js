class Company {
    constructor() {
        this.departments = {}
    }

    addEmployee(username, salary, position, department) {
        let invalid = ['', undefined, null]
        if (username in invalid || salary in invalid || position in invalid || department in invalid) {
            throw new Error("Invalid input!")
        }
        if (salary < 0) {
            throw new Error("Invalid input!")
        }

        if (this.departments[department] === undefined) {
            this.departments[department] = []
        }
        this.departments[department].push([username, salary, position])

        return `New employee is hired. Name: ${username}. Position: ${position}`
    }

    bestDepartment() {
        let bestDepartment = ''
        let bestAvgSalary = 0
        for (let department in this.departments) {
            let currentAvgSalary = 0
            let count = 0
            for (let employee in this.departments[department]) {
                currentAvgSalary += this.departments[department][employee][1]
                count += 1
            }
            currentAvgSalary /= count

            if (currentAvgSalary > bestAvgSalary) {
                bestDepartment = department
                bestAvgSalary = currentAvgSalary
            }
        }

        let output = `Best Department is: ${bestDepartment}\n`
        output += `Average salary: ${bestAvgSalary.toFixed(2)}`
        let employeesArray = this.departments[bestDepartment]
        employeesArray.sort(function (a, b) {
            return b[1] - a[1] || a[0].localeCompare(b[0])
        })

        for (let employee in employeesArray) {
            output += `\n${employeesArray[employee][0]} ${employeesArray[employee][1]} ${employeesArray[employee][2]}`
        }

        return output
    }
}




let c = new Company();
c.addEmployee("Stanimir",2000,"engineer","Construction");
c.addEmployee("Pesho",1500,"electrical engineer","Construction");
c.addEmployee("Slavi",500,"dyer","Construction");
c.addEmployee("Stan",2000,"architect","Construction");
c.addEmployee("Stanimir",1200,"digital marketing manager","Marketing");
c.addEmployee("Pesho",1000,"graphical designer","Marketing");
c.addEmployee("Gosho",1350,"HR","Human resources");
console.log(c.bestDepartment());
