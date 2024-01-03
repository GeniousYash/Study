class Mobile {
    constructor(model, number, unlockPin) {
        this.model = model;
        this.number = number;
        
        let _unlockPin = unlockPin;

        this.getUnlockPin = function () {
            return _unlockPin;
        };

        this.setUnlockPin = function (newUnlockPin) {
           
            _unlockPin = newUnlockPin;
        };

        this.sendSMS = function (message) {
            
            return message;
        };
    }
}

const myMobile = new Mobile("iPhone", "1234567890", "1234");

console.log(myMobile.model);  

console.log(myMobile.number);  

console.log(myMobile.getUnlockPin());  

myMobile.setUnlockPin("5678");
console.log(myMobile.getUnlockPin());  

const message = "Hello, how are you?";
const sentMessage = myMobile.sendSMS(message);
console.log(sentMessage);  
