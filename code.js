// Google: self-evaluation

function foo(list_a, list_b, list_c) {
    x = 0
    y = 1000
    for (a in list_a) {
        for (var b in list_b) {
            for (var c in list_c) {
                z = 0
                if (Math.abs(list_a[a] - list_b[b]) < Math.abs(list_a[a] - list_c[c])) {
                    z = Math.abs(list_a[a] - list_c[c])
                } else {
                    z = Math.abs(list_a[a] - list_b[b])
                }

                if (z < Math.abs(list_b[b] - list_c[c])) {
                    z = Math.abs(list_b[b] - list_c[c])
                }

                if (z < y) {
                    y = z
                    x = [list_a[a], list_b[b], list_c[c]]
                }
            }
        }
    }
    return x
}

list_a = [1000]
list_b = [1]
list_c = [0]
console.log(foo(list_a, list_b, list_c))

