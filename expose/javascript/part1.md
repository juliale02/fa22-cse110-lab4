1. values added:  20
2. final result:  20
3. values added:  20 

4. Error: 
   
        console.log('final result: ', result);//question 4
                                  ^
        ReferenceError: result is not defined
            at sumValues (/Users/Julia/Desktop/UCSD/CSE/CSE 110/fa22-cse110-lab4/expose/javascript/part1-question3.js:13:35)
            at Object.<anonymous> (/Users/Julia/Desktop/UCSD/CSE/CSE 110/fa22-cse110-lab4/expose/javascript/part1-question3.js:15:1)
            at Module._compile (node:internal/modules/cjs/loader:1155:14)
            at Object.Module._extensions..js (node:internal/modules/cjs/loader:1209:10)
            at Module.load (node:internal/modules/cjs/loader:1033:32)
            at Function.Module._load (node:internal/modules/cjs/loader:868:12)
            at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
            at node:internal/main/run_main_module:22:47

    Explanation: The variable 'result' is declared with keyword 'let' which only has a block scope. Line 13 attempts to make a reference to 'result' outside of this scope. 

5. Error:
   
        /Users/Julia/Desktop/UCSD/CSE/CSE 110/fa22-cse110-lab4/expose/javascript/part1-question5.js:7
            result = num1 + num2; 
                ^
        TypeError: Assignment to constant variable.
            at sumValues (/Users/Julia/Desktop/UCSD/CSE/CSE 110/fa22-cse110-lab4/expose/javascript/part1-question5.js:7:16)
            at Object.<anonymous> (/Users/Julia/Desktop/UCSD/CSE/CSE 110/fa22-cse110-lab4/expose/javascript/part1-question5.js:15:1)
            at Module._compile (node:internal/modules/cjs/loader:1155:14)
            at Object.Module._extensions..js (node:internal/modules/cjs/loader:1209:10)
            at Module.load (node:internal/modules/cjs/loader:1033:32)
            at Function.Module._load (node:internal/modules/cjs/loader:868:12)
            at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
            at node:internal/main/run_main_module:22:47

    Explanation: 'result' is initialled with the keyowrd 'const' which prevents it from being reassigned a value. However, line 7 attempts to reassign it to the values 'num1 + num2'.
    
6. Error: 

        /Users/Julia/Desktop/UCSD/CSE/CSE 110/fa22-cse110-lab4/expose/javascript/part1-question5.js:7
        result = num1 + num2; 
               ^

        TypeError: Assignment to constant variable.
            at sumValues (/Users/Julia/Desktop/UCSD/CSE/CSE 110/fa22-cse110-lab4/expose/javascript/part1-question5.js:7:16)
            at Object.<anonymous> (/Users/Julia/Desktop/UCSD/CSE/CSE 110/fa22-cse110-lab4/expose/javascript/part1-question5.js:15:1)
            at Module._compile (node:internal/modules/cjs/loader:1155:14)
            at Object.Module._extensions..js (node:internal/modules/cjs/loader:1209:10)
            at Module.load (node:internal/modules/cjs/loader:1033:32)
            at Function.Module._load (node:internal/modules/cjs/loader:868:12)
            at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
            at node:internal/main/run_main_module:22:47

    Explanation: 'result' is initialled with the keyowrd 'const' which prvents it from being reassigned a value. However, line 7 attempts to reassign it to the values 'num1 + num2'. In addition, the value is out of the block scope that result was declared in. 