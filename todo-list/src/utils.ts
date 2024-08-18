const initialTodos: ITodo[] = [
    {
        text: 'task number one',
        complete: false,
        id: "b28970da-8e57-4313-a1d7-49272581e719"
    },
    {
        text: 'task number two',
        complete: true,
        id: "c7ae14a6-a4aa-4d20-a7bc-6f78cc5598e4"
    }
];

const fakeApiRequest =  (): Promise<ITodo[]> => {
    return new Promise(resolve => {
        resolve(initialTodos);
    }) 
}

export {
    fakeApiRequest
}