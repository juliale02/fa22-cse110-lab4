1. 3 
   Explanation: The for loop exits when there are no more items in the 'prices' to iterate over. 'i' is incremented to 3 which makes the condition i < prices.length false. At line 13, 'i' has the value 3. 
2. 150 
   Explanation: In the last iteration of the for loop, 'discountedPrice' will be set to the value of (price[2]* (1-0.5)). It can be calculated by ... <br>
   discountedPrice = price[2]*(1-0.5) <br>
                    = 300*0.5<br>
                    = 150<br>
3. 150
   Explanation: Seen in question 2, 'discountedPrice' evaluates to 150. 'finalPrice' is calculated by ...<br>
    finalPrice = Math.round(discountedPrice*100)/100<br>
               = Math.round(15000)/100<br>
               = 15000/100<br>
               = 150<br>
4. [ 50, 100, 150 ]. The value of discounted is returned, however nothing is written to the log in the console. <br>
    Explanation: No error occurs, but nothing is written to the console either. THis is because we have commented out all the console.log() statements. 'discounted' was declared with keyword 'var' therefore we are still able to refer to it at the return statement with the correct caclualted discounted values.  
5. Error: <br>
```
    /Users/Julia/Desktop/UCSD/CSE/CSE 110/fa22-cse110-lab4/expose/javascript/part2-question5.js:12
        console.log(i); //question 5
                    ^
    ReferenceError: i is not defined
        at discountPrices (/Users/Julia/Desktop/UCSD/CSE/CSE 110/fa22-cse110-lab4/expose/javascript/part2-question5.js:12:17)
        at Object.<anonymous> (/Users/Julia/Desktop/UCSD/CSE/CSE 110/fa22-cse110-lab4/expose/javascript/part2-question5.js:19:1)
        at Module._compile (node:internal/modules/cjs/loader:1155:14)
        at Object.Module._extensions..js (node:internal/modules/cjs/loader:1209:10)
        at Module.load (node:internal/modules/cjs/loader:1033:32)
        at Function.Module._load (node:internal/modules/cjs/loader:868:12)
        at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
        at node:internal/main/run_main_module:22:47
```  
<br>
    Explanation: 'i' was declared with the keyword 'let'. Therefore, it only has a blockscope and line 12 attempts to mkae a call to the variable outside this scope. Hence the error above occurs and deems that 'i' is not defined. 

6. Error: <br>
   ```
    /Users/Julia/Desktop/UCSD/CSE/CSE 110/fa22-cse110-lab4/expose/javascript/part2-question6.js:13
    console.log(discountedPrice);//question 6
                ^
    ReferenceError: discountedPrice is not defined
        at discountPrices (/Users/Julia/Desktop/UCSD/CSE/CSE 110/fa22-cse110-lab4/expose/javascript/part2-question6.js:13:17)
        at Object.<anonymous> (/Users/Julia/Desktop/UCSD/CSE/CSE 110/fa22-cse110-lab4/expose/javascript/part2-question6.js:19:1)
        at Module._compile (node:internal/modules/cjs/loader:1155:14)
        at Object.Module._extensions..js (node:internal/modules/cjs/loader:1209:10)
        at Module.load (node:internal/modules/cjs/loader:1033:32)
        at Function.Module._load (node:internal/modules/cjs/loader:868:12)
        at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
        at node:internal/main/run_main_module:22:47
    ```
    Explanation: Similar to question 5. Line 13 is attempting to make a reference to a variable outside of its blockscope. This results in the error 'discountPrice' is not defined since it was declared in the for loop and now we have exited that block at line 13. 
7. 150
    Explanation: 'final price' is declared before enetring the for loop, therefore line 13 makes a call to the reference in the correct blockscope and we are able to obtain the correct value. The output is identical to that of question 3 with similar code logic.
    In the last iteration of the for loop, 'discountedPrice' will be set to the value of (price[2]* (1-0.5)). It can be calculated by ... <br>
    discountedPrice = price[2]*(1-0.5) <br>
                    = 300*0.5<br>
                    = 150<br>
8. [ 50, 100, 150 ]
    Exlpanation: Although nothing is written to the log, we we can se that the return statement is within the blockscope of the declaration of 'discounted' with the keyword 'let'. Hence, output is identical to using keyword 'var' in question 4. 
9. Error: <br>
```
    /Users/Julia/Desktop/UCSD/CSE/CSE 110/fa22-cse110-lab4/expose/javascript/part2-question9.js:11
        console.log(i); //question 9
                    ^

    ReferenceError: i is not defined
        at discountPrices (/Users/Julia/Desktop/UCSD/CSE/CSE 110/fa22-cse110-lab4/expose/javascript/part2-question9.js:11:17)
        at Object.<anonymous> (/Users/Julia/Desktop/UCSD/CSE/CSE 110/fa22-cse110-lab4/expose/javascript/part2-question9.js:17:1)
        at Module._compile (node:internal/modules/cjs/loader:1155:14)
        at Object.Module._extensions..js (node:internal/modules/cjs/loader:1209:10)
        at Module.load (node:internal/modules/cjs/loader:1033:32)
        at Function.Module._load (node:internal/modules/cjs/loader:868:12)
        at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
        at node:internal/main/run_main_module:22:47
```
    Explanation: 'i' was declared with the keyword 'let'. Therefore, it only has a blockscope and line 11 attempts to mkae a call to the variable outside this scope. Hence the error above occurs and deems that 'i' is not defined. Similar to question 5.  
10. 3
    Explanation: 'length' is initialized to be the size of the 'prices' array, whhich is 3. We are able to access this value since we are making a reference to it within its blockscope, so no error occurs. 
11. [ 50, 100, 150 ]
    Exlpanation: Although nothing is written to the log, we we can se that the return statement is within the blockscope of the declaration of 'discounted' with the keyword 'const'. EVen though it is 'const', we are still able to push onto the array, just not able to reassign the value. Hence, output is identical to using keyword 'var' in question 4. 
12. <!-- output is undefined, check with TA !-->
    A. student.name<br>
    B. student["Grad Year"]<br>
    C. student.greeting()<br>
    D. student["Favorite Teacher"].name<br>
    E. student.courseLoad[0]<br>
13. 
    A. 32<br>
        Explanation: This is seen as a string operation and concatenates '3' and 2 since strings map to their exact string representation.
    B. 1<br>
        Explanation: This is seen as an arithmetic operation and subtracts the 2 values, resulting in 1.  
    C. 3<br>
        Explanation: This is seen as an arithmetic operation and 'null' has the numeric conversion 0, hence the operation is 3+0 = 3.
    D. 3null<br>
        Explanation: This is seen as string  operation and 'null' has the stirng value "null". These values are concatenated to get the output above. 
    E. 4<br>
        Explanation: This is seen as an arithmetic operation and 'true' has the numeric conversion 1, hence the operation is 3+1 = 4.
    F. 0<br>   
        Explanation: This is seen as an arithmetic operation and 'false' and 'null' both have the numeric conversion 0, hence the operation is 0+0 = 0.
    G. 3undefined<br>
        Explanation: This is seen as string  operation and 'undefined' has the stirng value "undefined". These values are concatenated to get the output above. 
    H. NaN<br>
        Explanation: This is seen as an arithmetic operation and 'undefined' has the numeric conversion NaN hence the output above.
14. 
    A. true<br>
        Explanation: '2' becomes the number 2 and the experession evaluates to true since 2 is indeed greater than 1. 
    B. false<br>
        Explanation: '2' and '12' are both strings and are compared by letter. We are comparing the first letters, '2' and '1' which with the < operator is false. 
    C. true<br>
        Explanation: The operator == checks equality without taking into account types, therefore the comparison of these values evaluates to true. 
    D. false<br>
        Explanation: The operator === checks equality taking into account types. Therefore the comparison of these values evaluates to false since the values are of different types string and int.  
    E. false<br>
        Explanation: 'true' has the numeric conversion of 0. The expression is 0 == 2 which is false. 
    F. true<br>
        Explanation: THe boolean value of 2 is  true. Hence we are evaluating true === true, which is true. 
15. The == operator equates values whil2 applying type conversions. Hence, variables could be of different types and the expression could be evaluated to true. The === operator does not do this conversion so values of different types will never be equal. 
16.  See part2-question16.js file. 
17. [ 2, 4, 6 ]
    Explanation: Line 13 makes a call to the function modifyArray and passes in the following arguments, [1,2,3] and doSomething.
    Thus we have the following, array = [1,2,3] and callback = doSomething. The for loop will iterate through each value in [1,2,3]. The doSomthing function multiplies the number passed through by a factor of 2. By applying this function to each value of 'array' and pushing it onto 'newArr' , we get the result that 'newArr' evaluates to the values of 'array' multiplied by 2. 
18.  See part2-question18.js file. 
19. 1
    4
    3
    2
    Explanatino: The code reads top to bottom and executes lines of code in that order. So 1 is logged first. 2 will be logged 1 second later since that was the length of time specified by the setTimeout function. 3 is also logged with the setTimeout but with time 0,so it will be logged immediatelu. Similar to 1, 4 will be logged. Lasty 2 is logged after 1 second. 


