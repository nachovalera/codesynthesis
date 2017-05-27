import User from './model'
import { createToken } from './helpers/createToken'
import { facebookAuth } from './helpers/facebookAuth'
import { googleAuth } from './helpers/googleAuth'

export const loginWithAuth0 = async (req, res) => {
    console.log('HEY!!')
    console.log(req.body)
    const { provider, token } = req.body
    let userInfo
    try {
        if(provider === 'google') {
            userInfo = await googleAuth(token)
        } else {
            userInfo = await facebookAuth(token)
        }
        const user = await User.findOrCreate(userInfo)

        console.log('HEY!!')
        console.log(user)
        
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