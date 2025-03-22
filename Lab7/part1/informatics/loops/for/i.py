x = int(input())
count = 0
for num in range(1, x+1):
    if(x%num==0):
        count+=1
print(count)