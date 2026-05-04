/*
Given two sets of elements, find the sum of all distinct elements from the set. In other words, find the sum of all elements which are present in either of the given set.
Example:
Set 1 : [3, 1, 7, 9], Set 2: [2, 4, 1, 9, 3]
Output: 13 (distinct elements 4, 7, 2 )
Give a solutions to this problem, using arrays

sol.
 //compare the two sets 
one [3,1,7,9] ,two [2,1,1,9,3]

set one against set 2,
3 exists in B // skip
1 exists in B // skip
7 not in B // add seven 
9 exists in B // skip
partial sum = 7;

set two against set 1,
2 not in A // add 2
4 not in A // add 4
1 in a // skip 
9 exists in A // skip 
3 exists in A // skip 
 final sum 7+2+4=13

The algorithm becomes;



 ALGORITHM SumDistinctElements
INPUT: A[1..n], B[1..m]
OUTPUT: sum

BEGIN
    sum ← 0  // accumulator which collects elements 

    // Step 1: Process array A    ....handles elements in a not b
    FOR i ← 1 TO n DO
        found ← FALSE
        
        FOR j ← 1 TO m DO
            IF A[i] = B[j] THEN
                found ← TRUE
            ENDIF
        ENDFOR
        
        IF found = FALSE THEN
            sum ← sum + A[i]
        ENDIF
    ENDFOR

    // Step 2: Process array B    handles elements in b not a 
    FOR i ← 1 TO m DO
        found ← FALSE
        
        FOR j ← 1 TO n DO
            IF B[i] = A[j] THEN
                found ← TRUE
            ENDIF
        ENDFOR
        
        IF found = FALSE THEN
            sum ← sum + B[i]
        ENDIF
    ENDFOR

    RETURN sum
END



Problem 2
Algorithm  that :
name: Dot product
description of algo:

Writes a procedure, called dot_product which calculates in the variable ps, the dot(scalar) product of v1 and v2 (v1 and v2 are vectors of IR)
Writes an algorithm which determines, for n pairs of given vectors, whether two vectors of given IR are orthogonal, by calling the procedure defined in the previous question. The dot product of two orthogonal vectors is zero.
Modifys the previous algorithm if you use a dot_product function instead of a procedure.



BEGIN
FOR k ← 1 TO number_of_pairs DO  //outer loop which repeats the entire process for multiple vectors independently
    
    READ n                        // defines how many loops each vector has 
    DECLARE v1[1..n], v2[1..n]    // allocates memory for vectors
    
    FOR i ← 1 TO n DO              // input first vector
        READ v1[i]
    ENDFOR
    
    FOR i ← 1 TO n DO              //inputs second vector 
        READ v2[i]
    ENDFOR
    
    CALL dot_product(v1, v2, n, ps)  //computation   
    
    IF ps = 0 THEN                   //key condition ie if dot product is 0 -vectors are perpendicular
        WRITE "Orthogonal"
    ELSE
        WRITE "Not Orthogonal"
    ENDIF

ENDFOR                              // Loop repeat 

Problem 3
Solution  with an array.

Initialize sum = 0. 
Compare each element of set one with the second set and if element is not present then add that element to sum. 
Then do the vice versa to add elements from the second set.
Problem 2

While creating your algorithm, you should: 

Use array for presenting the vector.
Use nested loop (a loop inside another if you want)
Use different types of passing parameters


ALGORITHM SumDistinct
(A[1..n], B[1..m])

BEGIN
    sum ← 0

    // Elements in A not in B
    FOR i ← 1 TO n DO
        found ← FALSE
        FOR j ← 1 TO m DO
            IF A[i] = B[j] THEN
                found ← TRUE
            ENDIF
        ENDFOR
        
        IF found = FALSE THEN
            sum ← sum + A[i]
        ENDIF
    ENDFOR

    // Elements in B not in A
    FOR i ← 1 TO m DO
        found ← FALSE
        FOR j ← 1 TO n DO
            IF B[i] = A[j] THEN
                found ← TRUE
            ENDIF
        ENDFOR
        
        IF found = FALSE THEN
            sum ← sum + B[i]
        ENDIF
    ENDFOR

    RETURN sum
END




minimal full algorithm;







































































































*\