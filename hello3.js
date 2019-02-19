function createGreeting(name,age){
    const yearOfBirth = 2019 - age;
    return `I was born in ${yearOfBirth}`;
}

const greetingOne = createGreeting("Eddie", 25);
console.log(greetingOne);