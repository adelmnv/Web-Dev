n = int(input())
arr = [int(i) for i in input().split()]
count = 0
for i in range(1, n - 1):
    if arr[i] > arr[i - 1] and arr[i] > arr[i + 1]:
        count += 1
print(count)