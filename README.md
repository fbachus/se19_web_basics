# What this is 
This is a repository to show learnings in the areas of basic web development.  
The folders are named exerciseX and refer to the number of the hand-in they are
meant to satisfy.

# How to run
## Exercise1
This is a static webpage with some html and css, and can be navigated with the
internal links and the navbar. Access starts by opening on of the files in the 
local browser.
The webpage design is meant to be responsive.

## Exercise2
This is a more or less dynamic web app which runs on a local server. The app is 
built on pnpm(parallized npm) which should be interoperable with npm. 
There is dynamic and static rounting, and some requests like search hand over
parameters via GET requests, whereas the math functions average and add
work with POST requests and dynamic routes.  
Run the server with `npm run dev` in `repo/exercise2` and navigate to 
localhost:3003 in your browser.  
Try to run the path based calculators with `localhost:3003/average/$x/and/$y`
(replace $x and $y with your values) and `localhost:3003/add/$x/$y`.
