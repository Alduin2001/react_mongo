class Validator {
    // Проверка, состоит ли строка только из русских букв
    public static isRussian(...arr: string[]): boolean {
        const pattern:RegExp = /^[а-яА-Я]+$/; // Регулярное выражение для русских букв
        return arr.every(el => pattern.test(el));
    }

    // Проверка, состоит ли строка только из английских букв
    public static isEnglish(...arr: string[]): boolean {
        const pattern:RegExp = /^[a-zA-Z]+$/; // Регулярное выражение для английских букв
        return arr.every(el => pattern.test(el));
    }

    // Проверка, состоит ли строка только из цифр
    public static isNumbers(...arr: string[]): boolean {
        const pattern:RegExp = /^[0-9]+$/; // Регулярное выражение для цифр
        return arr.every(el => pattern.test(el));
    }

    // Проверка, является ли строка корректным email
    public static isMail(...arr: string[]): boolean {
        const pattern:RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // Регулярное выражение для email
        return arr.every(el => pattern.test(el));
    }
}

export default Validator;