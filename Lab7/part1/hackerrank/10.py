if __name__ == '__main__':
    students = []
    for _ in range(int(input())):
        name = input()
        score = float(input())
        students.append([name,score])
        
    unique_grades = sorted(set(grade for _, grade in students))
    second_lowest = unique_grades[1]

    second_lowest_students = [name for name, grade in students if grade == second_lowest]

    for student in sorted(second_lowest_students):
        print(student)