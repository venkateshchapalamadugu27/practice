//SYLLABUS
   
###  Front-end Technologies

     - HTML
     - CSS
     - JavaScript
     - BootStarp framework
     - Angular framework
     - ReactJs

###  Back-end Technologies
- NodeJs
- PHP
- c#
- Java
- Python

 ###   Databases
- MongoDb
- Mysql
- SQLite
- Firebase
- PostgresSql
- Oracle


+ VCS or Source code management
     - Distributed VCS
         - git,mercurinsl
     - remote(central)  VCS
          

###  Git
   - git init
   - git add filename
   - git add filename1 filename  
   - git add . (or) git add --all
   - git status
   - git commit(set congiguration)
      - git commit -m "msg"
   - git remote add origin<link>
   - git push -u origin master

###  HTML5
    - Hyper Text Markup Language
    - Semantic elements
       - header
       - section
       - article
       - aside
       - footer
       - table
    - Block Level Elements
       - h1 to h6
       - paragraph(p)
       - div
       - all semantic elements
       - Text will start from newline
    - Inline elements
       - span
       - img
       - a
       - nav  
       - form
       - input
       - textarea
       - legend
       - sup
       - sub
       - unorder list(ul)
       - ordered list(ol)
##### Reference Links
- Flaticon  https://www.flaticon.com
- contrast checker https://webaim.org/resources/contrastchecker/   
- clor codes
Task:
=====
     
       - Audio
       - Vedio
       - canvas
       - progress
       - datalist
       - meter
       - select

#CSS
 + cascading style sheets
 +_ Types of CSS
     - Inline CSS
     - External CSS
      
  + Syntax of CSS
   
   ''' 
   selector{
          css properties
   }  
   '''
#### selectors
  + simple selectors
     - universal selector(*)
     - By element Name
     - Grouping selector(,)
     - class selector
     - id selector (#)

  + Combinators   
    + Descendent selector () {inside divisio}
    + Child selector (>){child of division}
    + Adjacent sibling selector (+)
    + General sibling selector (~)
  + Pseudo class selector]
  + Pseudo element selector
  + Attribute selector  

  ### Box Models
   - margin
   - boarder
   - padding
      - padding: 10px (for all sides}
      - padding:10px 30px(10px for top and 30px for right)
      -padding :10px 300px 50(10 for top,300 for left and right,50 for bottom)
      -padding :10px 4px 4px 6px
   - width
   - 1rem=16px



  ##### Flex-box
   + display
     - none
     - Inline
     - Block
     - Inline-Block
   + position
    - static
    - relatice
    - absolute
    - fixed
    - sticky
   +  align-content
   + align-items
   + align-itself
#### Resonsive web design 
#### Flex-box
     - flex
     -

### Media quries

- Extra small devices (Mobiles)
   -max width:600px
- small(large phones)
   - min-width:600px
   - max width: 767px 
- medium(small laptops)
    - min-with:768px
- large Devices(Large laptops or desktops)
    - min-width:992px
- Extra large devices(More )
    -min-width:1200px
'''
@media only screen(max-width:320px) and (max-width:500px){
    CSS code
}
'''
TASK 3:
=====
    - Navbar with responsive
- module:group of functions;file containing classes,functions,any code
- package:collection of modules
- library:collection of packages
- framework:collection of library
+ module -->package  --> Library --> framework
+ Type of Modes
  - offline
  - online
    - CDN links
+ background color-bg
+ text-color
+ Margin in boot strap(m-*(0-5))
  - 0 --> 0 rem
  - 1 -->0.25rem(4px)
  - 2 -->0.5rem
  - 3 -->1 rem
  - 4 -->1.5rem
  - 5 -->3rem
  - ml-5pl-5)(margin-left)
  - m(margin in all directions)
  - mt (margin-top)
  - mb (margin-bottom)
  - mr (margin-right)
+ Padding (Padding-left -->)
+ colors
  - primary
  - secondary
  - info
  - success
  - warning
  - danger 
  - light
  - dark
  - white


+ we can use color classes for
  - Buttons(btn btn-primary`)
  - text(text-while)
  - background(bg-secondary)
  - alerts(alert alert-primary)
+ grid system
  - col-sm-2
  - sm(small devices)
  - md(medium devices)
  - lg(large devices)
  - xl(Extra large devices)
+ modal
+ table
### Javascript

+ in 1995 ,'Brenden Eich' introduced this(ES262)
+ JavaScript is loosely touple and dynamic language
+ it is a text based programming language and
  we can use in client-side and server side for 
   dynamic web applications
- ECMA(ES-6)
  - let & const.
  - map()
  - arrow function
  - classes
  - spread operator
  - rest parameter
+ data types
  - Number
  - BigInt(2^53-1)
  - String
  - Boolean
  - Undefined
  - Null
  - Object
  - Array
+ variables  
  - var
  - let
  - const
  - scope
     - function level --> var
     - block level --> let &const
  - redefine --> var,let
  - redeclare --> var
+ typeof()
+ object
 '''
  {
    name:"venki"
  }
+ Array
### Alerts
+ To generate
 - alert 
 - prompt (to take input from user)
 - confirm
+ console statements
  - `console.log()`
  - `console.info()`
  - `console.warn()`
  - `console.error()`

+ spread operator
 - to change  array elements from one array to another(swamp)
```
    ...variable name
```   
+ rest parameter
  + to handle function parameters
    ```
     ...parameter
    ```

+ Destructuring of array & objects  


+ functions
  - function with functionname
  ```
  function demo(x,y){
    return x+y
  }
  demo()
  ```
  - Anynomous function(without name)
  ```
  let demo=function(x,y)
  {
    return x+y
  }
  ```
  - Arrow function
  ```

  ```
+ for-in
 - index values gets printed
+ for-of
 - values get printed
+ forEach() --> (ES-5)
+ map() --> (ES-6)



### DOM
  - Document Object Model
  - document
  - history
  - window
  - navigator
+ dom methods
    - `getElementId()`
    - `getElementsByClassName()`
    - `innerText`
    - `textContent`
    - `append`
    - `appendChild`
    - `innerHTML`
    - `setAttribute()`
    - `classList`
    - `style`
    - `src`
    - `querySelector()`
    
### JSON
 - JavaScript Object Notation
 - To exchange information between application and server
 ```
 {
 "name":"Venkatesh",
 "salary":"5LPA",
 "designation":"BTLYT",
 "mobile":9121336407
 }

 ```  
 + Ajax calls or Promises (fetch API) or axios
 

 ### ReactJs

 + It is a library
 + It follows a compound based architecture
   - Function Component 
   - class component
   - Pure component
   - Higher order component
+  It provides virtual DOM
+ it provides JSX(JavaScript and XML)
+ Unidirectional data flow
+ Single Page Applications


+ props 
  - To pass data from one component to another component we will use props
  - Props are immutable
  
+ Union bank(Functional)
  - AndhraBank(Functional)
  - CorporationBank(class)

+ States
 - In react to maintain information we will use states
 - we can maintain states in class component only(Before react16.8 version)
 - To take state in react.Try to create constructor above render method and inside of class component
 ```
 constructor(){
   super();
   this.state={

   }
 }

 ```
  - To update the state information in class component use `setState()` method
  - To update the information in class componemt we have to follow the component life cycles method
   - `componentWillMount()`
   - `componentDidMount()`
   - `componentWillUnmount()`
   - `componentWillUpdate()`
   - `componentWillReceiveProps()`
   - `shouldComponentUpdate()`
  
#### Hooks

+ form react 16.8 

 - To maintain information in  Functional component we can use Hooks








+  Project Environment setup
  - 
  - [download Nodejs]
  - install nodejs and check versions `node` and `npm`
     - `node -v`
     - `npm -v`
     
  - `webpack` and `babel`
  - `create-react-app`
     - `npm install create-react-app`
        - `create-react-app projectname`
  - `npx create-react-app appname`

+ Index.html
+ Index.js
+ App.js  
     + Indexpage
        - nav.js
        - body.js
        - footer.js  
+ Home.js
  - nav
  - body
  - footer
+ Login.js
+ Register 
+ About
+ contact




#### List Rendering

###  Event Handling & form handling
   - `onChange`
   -  `onSubmit`
   - `preventDefault`
### routing in React
+ to navigate from one component to another
  - install reacter-router-dom  package by using
    `npm install reacter-router-dom`
  - `BrowserRouter` 
  - `Routes`
  - `Route`
     - `link`
  - `path`
  - `element`
  
+ Redux 
    
  - shorturl.at/jnxzN






#### Bootstrap 4.6

  - It is a CSS framework.