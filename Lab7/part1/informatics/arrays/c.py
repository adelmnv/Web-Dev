n = int(input())
arr = [int(i) for i in input().split()]
count = 0
for i in arr:
    if(i > 0):
        count+=1
print(count)