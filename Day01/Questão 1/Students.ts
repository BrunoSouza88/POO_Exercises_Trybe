class Student {
  matricula: number;
  name: string;
  tests: number[];
  exercises: number[];

  constructor(matricula: number, name: string, tests: number[], exercises: number[]) {
    this.matricula = matricula;
    this.name = name;
    this.tests = tests;
    this.exercises = exercises
  }

  sumTests(): number {
    const sum = this.tests.reduce((acc, curr) => acc + curr, 0);
    return sum;
  }

  avgTests(): number {
    const sum = this.tests.reduce((acc, curr) => acc + curr, 0)
    const numberOfTests = this.tests.length;
    const avg = sum / numberOfTests;
    return avg;
  }
};

const Maria = new Student(1, 'Maria', [5.2, 7.9, 8.2, 9.1], [10, 9.5]);

console.log(Maria);
console.log(Maria.sumTests());
console.log(Maria.avgTests());




export default Student;