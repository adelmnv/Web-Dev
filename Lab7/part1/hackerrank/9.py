if __name__ == '__main__':
    n = int(input())
    arr = map(int, input().split())
    max_val = float('-inf')
    runner_up = float('-inf')
    for i in arr:
        if(max_val < i):
            runner_up = max_val
            max_val = i
        if(runner_up < i and max_val > i):
            runner_up = i
    print(runner_up)