import User from './model'
import { createToken } from './helpers/createToken'
import { facebookAuth } from './helpers/facebookAuth'

export const loginWithAuth0 = async (req, res) => {
    const { provider, token } = req.body
    let userInfo
    try {
        if(provider === 'google') {

        } else {
            userInfo = await facebookAuth(token)
        }
        const user = await User.findOrCreate(userInfo)
        return res.status(200).json({
            success: true,
            user: {
                id: user._id
            },
            token: `JWT ${createToken(user)}` 
        })
    } catch(e) {
        return res.status(400).json({ error: true, errorMessage: 'Oups! Something went wrong.' + e.message })
    }
}