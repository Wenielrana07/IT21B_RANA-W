class Person {
    #name;
    #age;
    #occupation;

    constructor(name, age, occupation) {
        this.#name = name;
        this.#age = age;
        this.#occupation = occupation;
    }

    getName() {
        return this.#name;
    }

    getAge() {
        return this.#age;
    }

    getOccupation() {
        return this.#occupation;
    }
}

class Student extends Person {
    #major;

    constructor(name, age, occupation, major) {
        super(name, age, occupation);
        this.#major = major;
    }

    getMajor() {
        return this.#major;
    }

    displayInfo() {
        const infoDiv = document.getElementById('student-info');
        infoDiv.innerHTML = `
            <h2>Student Information</h2>
            <p><strong>Name:</strong> ${this.getName()}</p>
            <p><strong>Age:</strong> ${this.getAge()}</p>
            <p><strong>Occupation:</strong> ${this.getOccupation()}</p>
            <p><strong>Major:</strong> ${this.getMajor()}</p>
        `;
    }

    logInfo() {
        console.log(`Name: ${this.getName()}`);
        console.log(`Age: ${this.getAge()}`);
        console.log(`Occupation: ${this.getOccupation()}`);
        console.log(`Major: ${this.getMajor()}`);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const student = new Student('weniel', 20, 'student', 'Information technology');
    student.displayInfo();
    student.logInfo();     
});
