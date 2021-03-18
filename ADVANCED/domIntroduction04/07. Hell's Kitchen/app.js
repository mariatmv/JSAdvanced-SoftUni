function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {
      const arr = JSON.parse(document.getElementsByTagName("textarea")[0].value);
      const restaurantsObj = {};
      const restaurants = arr.map(x => {
         let [name, workers] = x.split(' - ');
         if (!restaurantsObj[name]) {
            restaurantsObj[name] = { employees: [], averageSalary: 0, bestSalary: 0, }
         };
         workers = workers.split(', ').map(x => {
            let [name, salary] = x.split(' ');
            return {
               name, salary: Number(salary)
            }
         });
         restaurantsObj[name].employees.push(...workers);
         let averageSalary = restaurantsObj[name].employees.reduce((a, c) => a + (c.salary / restaurantsObj[name].employees.length), 0);
         let bestSalary = restaurantsObj[name].employees.reduce((a, c) => c.salary > a ? c.salary : a, -1);
         restaurantsObj[name].averageSalary = averageSalary;
         restaurantsObj[name].bestSalary = bestSalary;
         return { name, workers, averageSalary };
      });

      let bestRest = '';
      let bestAverageSalary = -1;
      let bestSalary = -1;
      for (const key in restaurantsObj) {
         if (restaurantsObj[key].averageSalary > bestAverageSalary) {
            bestRest = key;
            bestAverageSalary = restaurantsObj[key].averageSalary;
            bestSalary = restaurantsObj[key].bestSalary;
         }
      }
      document.querySelector('#bestRestaurant > p').innerHTML = `Name: ${bestRest} Average Salary: ${bestAverageSalary.toFixed(2)} Best Salary: ${bestSalary.toFixed(2)}`
      console.log(bestRest, bestAverageSalary);

      document.querySelector('#workers > p').innerHTML = restaurantsObj[bestRest].employees.sort((a,b) => b.salary - a.salary).map(x => `Name: ${x.name} With Salary: ${x.salary}`).join(' ');
   }
}