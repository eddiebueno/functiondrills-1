function getYearOfBirth(age){
    if (age < 0){
        throw new Error('Age cannot be negative');
    }
    return 2019 - age;
}

function createGreeting(name,age){
    const yearOfBirth = getYearOfBirth(age);
    return `I was born in ${yearOfBirth}`;
}

try{
    const greetingOne = createGreeting("Eddie", 25);
    console.log(greetingOne);
}
catch (e){
    console.log(e.message);
}