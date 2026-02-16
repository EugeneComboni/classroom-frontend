export const DEPARTMENTS = [
    'CS',
    'Math',
    'English',
]

export const DEPARTMENT_OPTIONS= DEPARTMENTS.map((dept) => ({
    value: dept,
    label: dept,
}))

export const MOCK_SUBJECTS = [
    {
        id: 1,
        name: "Introduction to Computer Science",
        code: "CS101",
        description: "Fundamental concepts of computer science and programming.",
        department: "CS",
        created_at: new Date().toISOString(),
    },
    {
        id: 2,
        name: "Calculus I",
        code: "MATH101",
        description: "Limits, derivatives, and integrals of algebraic and trigonometric functions.",
        department: "Math",
        created_at: new Date().toISOString(),
    },
    {
        id: 3,
        name: "English Composition",
        code: "ENG101",
        description: "Development of writing skills through practice in guided and creative compositions.",
        department: "English",
        created_at: new Date().toISOString(),
    },
];