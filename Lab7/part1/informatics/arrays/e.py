n = int(input())
arr = [int(i) for i in input().split()]
for i in range(1,n):
    if (arr[i] > 0 and arr[i - 1] > 0) or (arr[i] < 0 and arr[i - 1] < 0):
        print("YES")
        break
print("NO")