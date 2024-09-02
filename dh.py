from math import sqrt

# Power function to return value of a^b mod P using modular exponentiation
def power(a, b, p):
    res = 1
    a = a % p
    while b > 0:
        if (b & 1):  # If b is odd
            res = (res * a) % p
        b = b >> 1  # b = b // 2
        a = (a * a) % p
    return res

# Function to check if a number is prime
def isPrime(n):
    if n <= 1:
        return False
    if n <= 3:
        return True
    if n % 2 == 0 or n % 3 == 0:
        return False
    i = 5
    while i * i <= n:
        if n % i == 0 or n % (i + 2) == 0:
            return False
        i += 6
    return True

# Utility function to store prime factors of a number
def findPrimefactors(n):
    s = set()
    while n % 2 == 0:
        s.add(2)
        n = n // 2
    for i in range(3, int(sqrt(n)) + 1, 2):
        while n % i == 0:
            s.add(i)
            n = n // i
    if n > 2:
        s.add(n)
    return s

# Function to find smallest primitive root of n
def findPrimitiveRoots(p):
    if not isPrime(p):
        raise ValueError("P must be a prime number")
    
    phi = p - 1
    prime_factors = findPrimefactors(phi)
    primitive_roots = []

    for g in range(2, p):
        flag = False
        for factor in prime_factors:
            if power(g, phi // factor, p) == 1:
                flag = True
                break
        if not flag:
            primitive_roots.append(g)
    
    return primitive_roots

# Main function
def main():
    # Both persons agree upon the public key P
    P = 23
    print("The value of P:", P)

    # Find all primitive roots modulo P
    primitive_roots = findPrimitiveRoots(P)
    print("Possible primitive roots (G) for P are:", primitive_roots)

    # For demonstration, choose the first primitive root as G
    if primitive_roots:
        G = primitive_roots[0]
        print("Chosen value of G:", G)
    else:
        print("No primitive root found. Exiting.")
        return

    # Alice chooses the private key a
    a = 4
    print("The private key a for Alice:", a)

    # Gets the generated key
    x = power(G, a, P)
    print("Alice's public key is:", x)

    # Bob chooses the private key b
    b = 3
    print("The private key b for Bob:", b)

    # Gets the generated key
    y = power(G, b, P)
    print("Bob's public key is:", y)

    # Generating the secret key after the exchange of keys
    ka = power(y, a, P)  # Secret key for Alice
    kb = power(x, b, P)  # Secret key for Bob

    print("Secret key for Alice is:", ka)
    print("Secret key for Bob is:", kb)

if __name__ == "__main__":
    main()
