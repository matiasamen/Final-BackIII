const mockAdoptions = [
    { id: 1, pet: 'Firulais', type: 'dog' },
    { id: 2, pet: 'Mishi', type: 'cat' }
];

export const getAllAdoptions = (req, res) => {
    res.status(200).json(mockAdoptions);
};

export const getAdoptionById = (req, res) => {
    const id = parseInt(req.params.id);
    const adoption = mockAdoptions.find((a) => a.id === id);
    if (!adoption) return res.status(404).json({ message: 'Not found' });
    res.status(200).json(adoption);
};

export const createAdoption = (req, res) => {
    const { pet, type } = req.body;
    if (!pet || !type) return res.status(400).json({ message: 'Faltan campos' });

    const newAdoption = { id: mockAdoptions.length + 1, pet, type };
    mockAdoptions.push(newAdoption);
    res.status(201).json(newAdoption);
};
