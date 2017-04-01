import Group from './model'

export const createGroup = async (req, res) => {
    const {
        name,
        description,
        category
    } = req.body;

    if(!name) {
        return res.status(400).json({ error: true, message: 'Name must be provided!'})
    } else if(typeof name !== 'string') {
        return res.status(400).json({ error: true, message: 'Name must be a string!'})
    } else if(name.length < 5){
        return res.status(400).json({ error: true, message: 'Name must have 5 characters!'})
    }

    if(!description) {
        return res.status(400).json({ error: true, message: 'Description must be provided!'})
    } else if(typeof description !== 'string') {
        return res.status(400).json({ error: true, message: 'Description must be a string!'})
    } else if(description.length < 10){
        return res.status(400).json({ error: true, message: 'Description must have 10 characters!'})
    }

    const group = new Group({name, description});

    try{
        return res.status(201).json({ error: false, group: await group.save() })
    }catch(e){
        return res.tatus(400).json({ error: true, message: 'Error creating the group'}) 
    }
}