class Vacationer {
    constructor(fullName, creditCard) {
        this.fullName = fullName;

        this.creditCard = creditCard

        this.wishList = [];
        this.idNumber = this.generateIDNumber();
    }

    get creditCard() {
        return this._creditCard;
    }

    set creditCard(input) {
        if (input === undefined) {
            input = [1111, '', 111]
        }
        if (input.length !== 3) {
            throw new Error('Missing credit card information');
        } else if (typeof input[0] !== 'number' || typeof input[2] !== 'number') {
            throw new Error('Invalid credit card details');
        }
        this._creditCard = {
            cardNumber: input[0],
            expirationDate: input[1],
            securityNumber: input[2]
        }
    }

    get fullName() {
        return this._fullName;
    }
    set fullName(value) {
        if (this.isValid(value)) {
            this._fullName = value;
        } else if (value.length !== 3) {
            throw new Error('Name must include first name, middle name and last name')
        } else {
            throw new Error('Invalid full name')
        }
    }

    isValid(value) {
        let checkerRegex = new RegExp('(?:[A-Z]{1}[a-z]+)');
        let valid = true;
        let matched2 = value[0].match(checkerRegex)
        if (matched2[0] !== matched2.input) {
            valid = false
        }
        let matched3 = value[1].match(checkerRegex)
        if (matched3[0] !== matched3.input) {
            valid = false
        }
        let matched1 = value[2].match(checkerRegex)
        if (matched1[0] !== matched1.input) {
            valid = false
        }
        return valid
    }

    generateIDNumber() {
        let firstLetter = this.fullName[0].charCodeAt(0);
        let middleName = this.fullName[1]
        let id = (231 * firstLetter + 139 * middleName.length).toString()
        let vowels = ["a", "e", "o", "i", "u"];
        let lastChar = this.fullName[2].slice(-1);
        if (vowels.includes(lastChar)) {
            id += '8';
        } else {
            id += '7';
        }
        return id;
    }

    addCreditCardInfo(input) {
        this.creditCard = input;
    }

    addDestinationToWishList(destination) {
        if (this.wishList.includes(destination)) {
            throw new Error('Destination already exists in wishlist');
        }
        this.wishList.push(destination);
        this.wishList.sort((a, b) => {
            return a.length - b.length;
        })
    }

    getVacationerInfo() {

        if (this.wishList.length !== 0) {
            return `Name: ${this.fullName[0]} ${this.fullName[1]} ${this.fullName[2]}\nID Number: ${this.idNumber}\nWishlist:\n${this.wishList.join(', ')}\nCredit Card:\nCard Number: ${this.creditCard.cardNumber}\nExpiration Date: ${this.creditCard.expirationDate}\nSecurity Number: ${this.creditCard.securityNumber}`;
        } else {
            return `Name: ${this.fullName[0]} ${this.fullName[1]} ${this.fullName[2]}\nID Number: ${this.idNumber}\nWishlist:\nempty\nCredit Card:\nCard Number: ${this.creditCard.cardNumber}\nExpiration Date: ${this.creditCard.expirationDate}\nSecurity Number: ${this.creditCard.securityNumber}`;
        }
    }
}
