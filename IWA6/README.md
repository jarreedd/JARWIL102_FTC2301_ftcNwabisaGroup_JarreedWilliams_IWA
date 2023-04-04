# Interactive Web Apps JavaScript Fundamentals 
## IWA_6 Challenge 1  
It is common to save information such as phone numbers and ID numbers as strings in JavaScript. Since they are not strictly numbers by definition. You don’t represent an actual amount of something, it does not make sense to add or subtract to them, nor can actual real numbers start with a 0 character, since 0031 is effectively just 31.  

However it is useful to still do validation on number to confirm that they only contain numerical characters (even if they are strings). In the example below the user has accidentally typed the alphabetical O character instead of the zero 0 number.  

This means that the primary validation should fail (resolving to false), however since the secondary number is correct it should pass (resolving to true).  

At the moment both values return false , in other words:
* Primary phone is valid numerical string: false  
* Secondary phone is valid numerical string: false  

Please fix this issue by only changing the logic below the comment (and not the values themselves).  

### original script
```javascript
const primaryPhone = 'O748105141'
const secondaryPhone = '0219131568'

// Only change below this line

const primaryValid = typeof number == primaryPhone 
const secondaryValid = typeof number == secondaryPhone

console.log('Primary phone is valid numerical string:', primaryValid)
console.log('Secondary phone is valid numerical string:', secondaryValid )
```

### Pathway to fix code
## Why did the original code not work?

## What changes did you need to make to achieve the intended behaviour?

## Why did the change result in the intended behaviour?

## Are there any other ways in which it could have been solved?