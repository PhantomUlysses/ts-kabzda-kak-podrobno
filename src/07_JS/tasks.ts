const salary: number = 100;

export const sum = (salary: number, a: number) => salary + a;
export const mult = (salary: number, a: number) => salary * a;
export const sub = (salary: number, a: number) => salary - a;
export const div = (salary: number, a: number) => salary / a;

export type ActionType = {
    type: 'sum' | 'mult' | 'sub' | 'div';
    payload: number;
}

export const salaryReducer = (salary: number, action: ActionType) => {
    switch(action.type) {
        case 'sum':
            return salary + action.payload;
        case 'mult':
            return salary * action.payload;
        case 'sub':
            return salary - action.payload;
        case 'div':
            return salary / action.payload;
        default:
            return salary;
    }
}

type CarType = {
    model: string;
    year: number;
    on: boolean;
    turnOn: () => void;
    rename: (model: string) => string;
}

type CreateGarageType = {
    addCar: (car: CarType) => void;
    logAllCarsNames: () => void;
    getAllCars: () => Array<CarType>;
};

let createGarage = (): CreateGarageType => {
    let _cars: Array<CarType> = [];

    return {
        addCar(car: CarType) {
            _cars.push(car);
        },
        logAllCarsNames() {
            console.log('Cars in the garage: ');
            _cars.forEach(c => console.log(c.model));
        },
        getAllCars() {
            return _cars;
        }
    }
}