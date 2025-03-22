n = int(input())
arr = [int(i) for i in input().split()]
for i in range(n):
    if(arr[i]%2==0):
        print(arr[i], end=" ")