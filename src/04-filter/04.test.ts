test("should take old men", () =>  {
    const ages = [18, 20, 22, 1, 100, 90, 14];

    const oldAges = ages.filter( age => age > 90);

    expect(oldAges.length).toBe(1);
    expect(oldAges[0]).toBe(100);
})
test("should take chip coorses", () =>  {
    const courses = [
        {title: 'html', price: 200} ,
        {title: 'css', price: 110} ,
        {title: 'react', price: 150}
    ]
    type CourseType = {
        title: string
        price: number
    }

    const chipCourses = courses.filter( (course) => course.price < 160)

    expect(chipCourses.length).toBe(2);
    expect(chipCourses[0].title).toBe(  'css');
})

test("get only completed tasks", ()=>{
    const tasks = [
        {id: 1, title: 'bread', isDone: false},
        {id: 2, title: 'milk', isDone: true},
        {id: 3, title: 'solt', isDone: false},
        {id: 4, title: 'sugar', isDone: true},
        {id: 5, title: 'cofe', isDone: false},
    ];

    const completedTasks = tasks.filter( (task) => task.isDone);
    expect(completedTasks.length).toBe(2);
})
test("get only uncompleted tasks", ()=>{
    const tasks = [
        {id: 1, title: 'bread', isDone: false},
        {id: 2, title: 'milk', isDone: true},
        {id: 3, title: 'solt', isDone: false},
        {id: 4, title: 'sugar', isDone: true},
        {id: 5, title: 'cofe', isDone: false},
    ];

    const uncompletedTasks = tasks.filter( (task) => !task.isDone);
    expect(uncompletedTasks.length).toBe(3);
})