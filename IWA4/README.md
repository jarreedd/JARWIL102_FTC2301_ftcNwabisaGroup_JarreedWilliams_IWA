# Interactive Web Apps JavaScript Fundamentals 
## IWA_4 Challenge 1 
The following code is meant to output several South African public holidays for the year 2050. I should log the name of the holiday, as well as the associated month. There is also a condition that only logs “Youth Day” if the current status is student and only “Christmas Day” if the status is “parent”. Once all the public holidays have been logged, the final output should log three separate messages each showing the following:

The status value as declared initially (”parent”)  
The year as declared initially (2050)  
The total count of holidays for the above settings (9)
 
### original script
```javascript
const date: 2050
const status: 'student'
const count = 0

if (date = 2050) {
	console.log("January", 'New Year’s Day'
	console.log("March", 'Human Rights Day')
	date = 'April'
	console.log(date, 'Family Day')
	console.log(date, 'Freedom Day')
	let count = count + 4

	if (status = "student") {
	  console.log('June', 'Youth Day')
		let count = count + 1
  }

	console.log('August', 'Women’s Day')
	console.log('September', 'Heritage Day')
	date = 'December'
	console.log(date, 'Day of Reconciliation')
	let count = count + 3

	if (status = "parent") {
	  console.log(date, 'Christmas Day')
		let count = count + 1
  }

	console.log(date, 'Day of Goodwill')
	let count = count + 1
}

console.log('Your status is:', status)
console.log('The year is:', date)
console.log('The total holidays is:', count)
```
### Pathway to fix code
 ## Why did the original code not work?
 * The variable count is declared with the keyword const but further on in the code the variable's value needs to change, the const keyword prevents the value of the variable to change.

 ```javascript
 const count = 0
 ```
* The condition of several if statements is changing the value of variables instead of creating conditions.

```javascript
if (date = 2050) {}
if (status = "student") {}
if (status = "parent") {}
```

* A missing closing bracket after 'New Year’s Day'.

```javascript
console.log("January", 'New Year’s Day'
```

* The variable date inside the if statement has a global scope.
```javascript
date = 'April'
```

* The variable count has already been declared.
* The closing curly brackets of several if statements needs to the correct indentation.

## What changes did you need to make to achieve the intended behaviour?
* The count variable is declared using the let keyword.

```javascript
let count = 0
```
* Instead of assigning new values to the variable, a condition is made.

```javascript
if (date == 2050) {}
if (status == "student") {}
if (status == "parent") {}
```

* Added a closing bracket after 'New Year’s Day'.

```javascript
console.log("January", 'New Year’s Day')
```

* The variable date inside the if statement is declared inside the if statement to give it a local scope.
```javascript
let date = 'April'
```
* Indented the closing curly brackets of several if statements correctly.

## Why did the change result in the intended behaviour?

* The status value as declared initially (”parent”) so instead of the status variable being declared as student, it's value is declared as parent.

```javascript
const status = 'parent'
```

## Are there any other ways in which it could have been solved?

* Only declare the count variable.
```javascript
let count
```

* The date variable with a local scope doesn't need to be declared and place the value of the date variable where it intensely need to be.

```javascript
console.log('April', 'Family Day')
console.log('April', 'Freedom Day')
console.log('December', 'Day of Reconciliation')
console.log('December', 'Christmas')
console.log('December', 'Day of Goodwill')
```