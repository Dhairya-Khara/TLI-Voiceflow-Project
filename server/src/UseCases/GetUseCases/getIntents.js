/**
 * Returns the intents of the user
 * @interactor
 * @param {mongoose.Schema} user - The current authorized user of the website
 * @returns {Object} user.intents - intents identified in user's transcipts.
 */
const getIntentsInteractor = (user) =>{
    return user.intents
}

module.exports = getIntentsInteractor