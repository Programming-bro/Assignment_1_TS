const multiplyValue = (value : number , multiplier = 2) => {
    return value * multiplier;
}
const processInput = (value: string | number | boolean): string | number | boolean => {
    if(typeof value === "string") {
        let val = value.trim().toLowerCase();
        return val;
    }
    if(typeof value === "number") {
        return value * 10;
    }
    if(value) return "Active";
    else return "Inactive";
}
const formatCoordinate = ([latitude, longitude, locationName]: readonly  [number, number, string]) => {
    return `Location: ${locationName} (${latitude}, ${longitude})`
}
const concatenateArrays = <T>(...arrays: T[][]) => {
    return arrays.flat();
}
interface Course {
    title: string,
    students: number,
    isPublished: boolean
}
const getPopularCourses = (array: Course[], minStudents: number) => {
    let newArr: Course[] = [];
    for(let x of array) {
        if(x.students >= minStudents && x.isPublished) {
            newArr.push(x);
        }
    }
    return newArr;
}
const pluckValues = <T, K extends keyof T>(items: T[], key: K) => {
    let newArr: T[K][] = [];
    for(let x of items) {
        newArr.push(x[key])
    }
    return newArr;
}
class Employee {
    constructor(
    protected name: string,
    private _baseSalary: number,
  ) {}
  getDetails() : string {
    return `Employee: ${this.name}, Base Salary: ${this._baseSalary}`
  }
}
class Manager extends Employee {
    private department : string;
    constructor (name: string, baseSalary: number, department: string) {
        super(name, baseSalary)
        this.department = department;
    }
    getRoleInfo(): string {
        return `Manager of ${this.department}: ${this.name}`
    }
}
const validateAgeAsync = async (age: number) : Promise<string> => {
    if(age < 18) {
        throw new Error("Access Denied: Must be 18 or older");
    }
    return new Promise<string> ((resolve) => {
        setTimeout(() => {
            resolve("Access Granted");
        }, 1000)
    })
}
