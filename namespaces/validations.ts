namespace Validation {
    export const validateText = (text: string): Boolean => {
        return text.length > 3;
    }

    export const validateDate = (myDate: Date): Boolean => {
        return !isNaN(myDate.valueOf())
            ? false
            : true

    }

}

console.log(Validation.validateText(""))