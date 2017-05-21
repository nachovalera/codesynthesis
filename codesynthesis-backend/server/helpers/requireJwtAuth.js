import passport from 'passport'
import '../modules/users/helpers/passport'

export const requireJwtAuth = passport.authenticate('jwt', { session: false})