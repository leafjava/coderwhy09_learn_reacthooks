import { faker } from '@faker-js/faker';

// const namesArray = Array(10).map(item => {
//   return faker.name.firstName()
// })

const namesArray = []

for(let i=0;i<10;i++){
  namesArray.push(faker.internet.username())
}

console.log(namesArray)

export default namesArray