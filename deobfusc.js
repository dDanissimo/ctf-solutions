// Qualifiers from Ya.Profi on the profile of Information Security
// The task contained an obfuscated one-liner function in js, which was loaded onto an html page and checked the flag
// By putting this into a deobfuscator, we obtained code from which it could be concluded that multiple different checks were made for flag compliance
// with certain criteria. For example, the flag contained delimiters "_". And, for example, line 14 shows that the flag starts with the format "iforpay", which
// when reversed gives "yaprofi".
// Also, in certain specific segments, a specific substring should have been present, as in line 23.
// By going through all the criteria and manually collecting the flag, we could satisfy all the requirements of the checker.


function alert(message, place) {
	console.log(place + ":" + message)
	return -1
}

function showMessage(r) {
  var e = r.split("").reverse().join("");
  if (-1 != e.indexOf("iforpay")) {
    var t = e.split("_"), o = 0;
    if (t.forEach(function (r) {
      o += 1;
    }), 7 != o) return alert("Не соответствует критериям!"), -1;
    var n = 0;
    for (let r = 0; r < o; r++) {
      if (0 == r && 9 == t[r].length && "fXlEZFB6UnEx" == btoa(t[r]) && (n += 8), 1 == r && 8 == t[r].length) {
        if (52 != t[r].charCodeAt(0)) return alert("Found error. Stop", 1), -1;
        if (n += 1, 49 != t[r].charCodeAt(1)) return alert("Found error. Stop", 2), -1;
        if (n += 1, 114 != t[r].charCodeAt(2)) return alert("Found error. Stop", 3), -1;
        if (n += 1, 51 != t[r].charCodeAt(3)) return alert("Found error. Stop", 4), -1;
        if (n += 1, 55 != t[r].charCodeAt(4)) return alert("Found error. Stop", 5), -1;
        if (n += 1, 49 != t[r].charCodeAt(5)) return alert("Found error. Stop", 6), -1;
        if (n += 1, 114 != t[r].charCodeAt(6)) return alert("Found error. Stop", 7), -1;
        if (n += 1, 99 != t[r].charCodeAt(7)) return alert("Found error. Stop", 8), -1;
        n += 1;
      }
      if (2 == r && 6 == t[r].length) {
        if (119 != t[r].charCodeAt(0)) return alert("Found error. Stop", 9), -1;
        if (n += 1, 79 != t[r].charCodeAt(1)) return alert("Found error. Stop", 10), -1;
        if (n += 1, 49 != t[r].charCodeAt(2)) return alert("Found error. Stop", 11), -1;
        if (n += 1, 49 != t[r].charCodeAt(3)) return alert("Found error. Stop", 12), -1;
        if (n += 1, 111 != t[r].charCodeAt(4)) return alert("Found error. Stop", 13), -1;
        if (n += 1, 70 != t[r].charCodeAt(5)) return alert("Found error. Stop", 14), -1;
        n += 1;
      }
      if (3 == r && 3 == t[r].length) {
        if (100 != t[r].charCodeAt(0)) return alert("Found error. Stop", 15), -1;
        if (n += 1, 78 != t[r].charCodeAt(1)) return alert("Found error. Stop", 16), -1;
        if (n += 1, 52 != t[r].charCodeAt(2)) return alert("Found error. Stop", 17), -1;
        n += 1;
      }
      if (4 == r && 4 == t[r].length) {
        if (114 != t[r].charCodeAt(0)) return alert("Found error. Stop", 18), -1;
        if (n += 1, 101 != t[r].charCodeAt(1)) return alert("Found error. Stop", 19), -1;
        if (n += 1, 118 != t[r].charCodeAt(2)) return alert("Found error. Stop", 20), -1;
        if (n += 1, 48 != t[r].charCodeAt(3)) return alert("Found error. Stop", 21), -1;
        n += 1;
      }
      if (5 == r && 2 == t[r].length) {
        if (101 != t[r].charCodeAt(0)) return alert("Found error. Stop", 22), -1;
        if (n += 1, 109 != t[r].charCodeAt(1)) return alert("Found error. Stop", 23), -1;
        n += 1;
      }
      if (6 == r && 12 == t[r].length) {
        if (110 != t[r].charCodeAt(0)) return alert("Found error. Stop", 24), -1;
        if (n += 1, 114 != t[r].charCodeAt(1)) return alert("Found error. Stop", 25), -1;
        if (n += 1, 117 != t[r].charCodeAt(2)) return alert("Found error. Stop", 26), -1;
        if (n += 1, 116 != t[r].charCodeAt(3)) return alert("Found error. Stop", 27), -1;
        if (n += 1, 123 != t[r].charCodeAt(4)) return alert("Found error. Stop", 28), -1;
        if (n += 1, 105 != t[r].charCodeAt(5)) return alert("Found error. Stop", 29), -1;
        if (n += 1, 102 != t[r].charCodeAt(6)) return alert("Found error. Stop", 30), -1;
        if (n += 1, 111 != t[r].charCodeAt(7)) return alert("Found error. Stop", 31), -1;
        if (n += 1, 114 != t[r].charCodeAt(8)) return alert("Found error. Stop", 32), -1;
        if (n += 1, 112 != t[r].charCodeAt(9)) return alert("Found error. Stop", 33), -1;
        if (n += 1, 97 != t[r].charCodeAt(10)) return alert("Found error. Stop", 34), -1;
        if (n += 1, 121 != t[r].charCodeAt(11)) return alert("Found error. Stop", 35), -1;
        n += 1;
      }
    }
    return n;
  }
  alert("Не соответствует критериям!", 0);
}

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('input: ', i => {
  showMessage(i)
  readline.close();
});


