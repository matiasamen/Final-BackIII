let adoptions = [
    { id: 1, pet: 'Firulais', type: 'dog' },
    { id: 2, pet: 'Mishi', type: 'cat' }
];

export default {
    getAll: () => adoptions,
    getById: (id) => adoptions.find(a => a.id === id),
    create: (data) => {
        const newAdoption = {
            id: adoptions.length + 1,
            ...data
        };
        adoptions.push(newAdoption);
        return newAdoption;
    }
};
