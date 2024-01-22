# Also some crypto task from a CTF, I don't remember the original assignment, but I assume it is related to the use of the pow(a, b, c) function in it.
# In this case, the flag was brute-forced based on certain criteria, because the flag custom generation algorithm involved some random values.


from Crypto.Util.number import long_to_bytes

def is_power_of_7(num, n):
    for i in range(1, 300):
        if pow(7, i, n) == num:
            return True
    return False

def retrieve_flag_bit(index, n):
    # Simulate request arguments
    request_args = {'bit': index}
    
    # Call guess_bit function directly
    response = guess_bit(request_args)
    guess = int(response['guess'])
    return '1' if is_power_of_7(guess, n) else '0'

def get_flag(n):
    binary_flag = ''
    index = 0
    while True:
        bit = retrieve_flag_bit(index, n)
        if bit == '0' and index > 0:
            break
        binary_flag += bit
        index += 1

    flag_as_long = int(binary_flag, 2)
    flag = long_to_bytes(flag_as_long)
    return flag.decode()

def guess_bit(args):
    if 'bit' not in args.keys():
        return {"error": "Bit needed to be guessed"}
    index = abs(int(args['bit']))
    if index >= len(flag):
        return {"error": "Index overflow"}
    bit = flag[index]
    if bit == '1':
        return {"guess": pow(7, getPrime(300), n)}
    else:
        return {"guess": randint(n//2, n)}

n = 146709708415333404123313609560630505561444227290618660756709144163457265588891358919161542833583060760163530395526476714331267003074846886279478778278133833749599543031729458849425146688105170158937053173151127445754273131049792002557499413694770961659012384118249289389010685638304237099053114585187527546457
print(get_flag(n))
