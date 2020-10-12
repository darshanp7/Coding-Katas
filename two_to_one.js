// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

function longest(s1, s2) {
    s3 = s1 + s2
    s4 = new Set()
    s3.split("").forEach(element => {
        if(!s4.has(element)){
            s4.add(element)
        }
    });
    return Array.from(s4).sort().join("")
}

a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"

console.log(longest(a, b))