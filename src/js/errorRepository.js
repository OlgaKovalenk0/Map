export class ErrorRepository {
    constructor() {
        this.errorsMap = new Map();
        this.errorsMap.set(35, 'Ошибка №35');
    }
    
    translate = (code) => {
        if (this.errorsMap.has(code)) {
            return this.errorsMap.get(code);
        }
        return 'Unknown error';
    }
}