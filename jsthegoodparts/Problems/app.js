function funky(o) {
    o = null;
}

const x = []
funky(x)
alert(x)

/* 

what is x?

A. null
B. []
C. Undefined
D. throw 

Answer: B - o is a parameter - o knows nothing about b - o only knows the value the was
passed to it - and that value is the array. It takes the its parameter changes it to null,
but that does not change b - the array - it just changed was o is pointing to. 

*/

