function getYearOfBirth(age){
    if (age < 0){
        throw new Error('Age cannot be negative');
    }
    return 2019 - age;
}

function createGreeting(name,age){
    if (typeof name !== "string" || isNaN(age)){
        throw new TypeError("Incorrect type");
    }
    const yearOfBirth = getYearOfBirth(age);
    return `I was born in ${yearOfBirth}`;
}

try{
    const greetingOne = createGreeting(22, 'two');
    console.log(greetingOne);
}
catch (e){
    console.log(e.message);
}