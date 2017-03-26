import Meetups from './model';

export const createMeetup = async(req, res) => {
    const { title, description } = req.body;
    const newMeetup = new Meetups({ title, description});

    try {
        return res.status(201).json({ meetup: await newMeetup.save() });
    } catch (e) {
        return res.status(e.status).json({error: true, message: 'Error with Meetup'});
    }
}

export const getAllMeetups = async (req, res) => {
    try {
        return res.status(200).json({ meetups: await Meetups.find({})});
    } catch (e) {

    }
}