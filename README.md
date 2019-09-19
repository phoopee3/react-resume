# React Resume

A json resume - currently hard coded to the `r` variable that then gets rendered with react classes.

Used as a method for me to learn react, but I realize this isn't a very "reactive" implementation.

## Challenges

- Dynamically calling a react class based on the key from the json object. Solved on `index.js` [line 45](https://github.com/phoopee3/react-resume/blob/master/src/index.js#L45) by creating a `components` object of classes, and then on [line 57](https://github.com/phoopee3/react-resume/blob/master/src/index.js#L57) and [60](https://github.com/phoopee3/react-resume/blob/master/src/index.js#L60) creating the class and calling it.
- Returning a variable number of components. Solved on [line 50](https://github.com/phoopee3/react-resume/blob/master/src/index.js#L50) by creating an array, and then on [line 60](https://github.com/phoopee3/react-resume/blob/master/src/index.js#L60) by just pushing the component onto that array.

## To do

- [x] Finish additional sections of resume
- [x] Conditional rendering for contact methods (links, classes, etc)
- [x] Load resume from an external source
- [x] Style
