import math
n = int(input())
end = math.floor(math.sqrt(n))
num = 1
while num <= end:
    print(num**2)
    num+=1