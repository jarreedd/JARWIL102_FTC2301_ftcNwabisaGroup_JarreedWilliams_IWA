# Interactive Web Apps JavaScript Fundamentals 
## IWA_6 Challenge 2  
The following code is meant to run every hour of the day to check a user’s balance should be calculated. The only time the balance should be calculated is when it is the start of a new day (in other words midnight, when hourOfDay and minuteOfDay are both 0). However, there are cases where the time is not known (in which case both hourOfDay and minuteOfDay will be undefined. To prevent any bugs, the balance should not be calculated if the time is not known.  

Before calculating the cost, tax needs to be deduced as a percentage of the salary. After this is done all expenses should be subtracted such as food, transport and rent. The final result should be 274.00100000000003. However, you are required to use toFixed(2) to only show cents (up to only 2 decimals) and prefix the value with a R symbol. This means that the final logged value should be R274.46.  

Note that you are only allowed to change the code below the comment.

### original script
```javascript
const rent = 400;
const tax = '12%';
const food = 51.7501;
const salary = 800;
const transport = 10.2;
const hourOfDay = 00;
const minuteOfDay = 00;

// Only change below this line

if hourOfDay && (minuteOfDay !== null) && (hourOfDay == '00') && (minuteOfDay == '00') {
	const taxAsDecimal = tax / '100'
  const startingAfterTax = salary * '1' - taxAsDecimal
	const balace = starting - transport - food - rent
}
	
console.log(balance.toFixed(3))
```
### Pathway to fix code
## Why did the original code not work?

## What changes did you need to make to achieve the intended behaviour?

## Why did the change result in the intended behaviour?

## Are there any other ways in which it could have been solved?