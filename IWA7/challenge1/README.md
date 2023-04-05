# Interactive Web Apps JavaScript Fundamentals
## IWA_7 Challenge 1
The following code is meant to add the following three values together and log 10. However, it currently logs 343 instead. Please correct the mistake, and explain why 343 was logged initially:
### original script
```javascript
const value = "3"
console.log(value + 4 + value)
```
### Pathway to fix code

## Why did the original code not work?
 The  code is meant to log 10 to the console, instead it logged 343. The variable 'value' is assigned to 3 as a sting data type instead of as a number data type.

```javascript
const value = "3"
```
Because the value of the value variable is a string literal, the number 4  and 3 that is added to value variable in the ```console.log()``` is seen as a characters that are being concatenated, resulting that 343 is logged.

```javascript
console.log(value + 4 + value) //> 343
```
```javascript
console.log("3" + 4 + "3") //> 343
```
## What changes did you need to make to achieve the intended behaviour?
Removed the double quotes from the value of the variable making it a number instead of it being a string. This results in logging 10 to the console as intended, because now a calculation is being calculated instead of strings being concatenated.
```javascript
const value = 3
console.log(value + 4 + value) //> 10
```