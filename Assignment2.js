// Print FizzBuzz without using mod

let i, x, y, z, n = 15
for (i = 1; i <= n; i++) {
    x = i
    y = i
    z = i

    while (x >= 15) x -= 15
    while (z >= 5) z -= 5
    while (y >= 3) y -= 3

    if (x == 0) console.log("FizzBuzz")
    else if (z == 0) console.log("Buzz")
    else if (y == 0) console.log("Fizz")
    else console.log(i)
}

// Print Palindrome words from a string

let str = "madam knows malayalam well "
let str1 = "", str2 = ""
for (t of str) {
    if (t != " ") {
        str2 = str2 + t
        str1 = t + str1
    }
    else {
        if (str1 == str2) console.log(str1)
        str1 = ""
        str2 = ""
    }
}