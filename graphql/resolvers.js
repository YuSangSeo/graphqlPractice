const people = [{
    id:"0",
    name: "Nicolas1",
    age: 18,
    gender: "female1"
},
{
    id:"1",
    name: "Nicolas2",
    age: 19,
    gender: "female2"
},
{
    id:"2",
    name: "Nicolas3",
    age: 20,
    gender: "female3"
},
{
    id:"3",
    name: "Nicolas4",
    age: 21,
    gender: "female4"
},
];

const getById = id => {
    const filteredPeople = people.filter(person => person.id === String(id));
    return filteredPeople[0];
}

const resolvers = {
    Query: {
        people:() => people,
        person:(_, {id}) => getById(id)
    }
};

export default resolvers