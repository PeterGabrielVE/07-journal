export default () => ({
    isLoading: true,
    entries: [
        {
        id: new Date().getTime(),
        date: new Date().toDateString(),
        text: "Peter",
        picture: null
        },
        {
            id: new Date().getTime() + 1000,
            date: new Date().toDateString(),
            text: "Lara",
            picture: null
        },
        {
            id: new Date().getTime() + 2000,
            date: new Date().toDateString(),
            text: "Laaaaa ",
            picture: null
        }
    ]
})