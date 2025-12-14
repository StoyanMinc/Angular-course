//* Generic Types - we can use a generic type to create a type that can be used with any type (id -> number, string, etc.)
type User<T> = {
    id: T,
    name: string,
    age: number
}
const user: User<number> = {
    id: 1,
    name: 'John',
    age: 18
}
const user2: User<string> = {
    id: '1',
    name: 'John',
    age: 18
}
console.log(user);
console.log(user2);
//* Enums
enum PaymentStatus {
    Pending = 20,
    Paid,
    Failed = 35
}
console.log(PaymentStatus.Pending);
console.log(PaymentStatus.Paid);
console.log(PaymentStatus.Failed);
