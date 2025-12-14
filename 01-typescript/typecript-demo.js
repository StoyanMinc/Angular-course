var user = {
    id: 1,
    name: 'John',
    age: 18
};
var user2 = {
    id: '1',
    name: 'John',
    age: 18
};
console.log(user);
console.log(user2);
//* Enums
var PaymentStatus;
(function (PaymentStatus) {
    PaymentStatus[PaymentStatus["Pending"] = 20] = "Pending";
    PaymentStatus[PaymentStatus["Paid"] = 21] = "Paid";
    PaymentStatus[PaymentStatus["Failed"] = 35] = "Failed";
})(PaymentStatus || (PaymentStatus = {}));
console.log(PaymentStatus.Pending);
console.log(PaymentStatus.Paid);
console.log(PaymentStatus.Failed);
