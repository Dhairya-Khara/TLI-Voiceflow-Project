/**
 * Tests for the userLoginInteractor Use Case.
 * Tests that users can log in correctly, and throws an error if logging into a user that doesn't exist.
 */

const mongoose = require('mongoose');
const loginUserInteractor = require('../../../UseCases/UserUseCases/userLoginInteractor');
const User = require('../../../Entities/UserSchema');

describe('UserLoginInteractor test', () => {
    beforeAll(async () => {
        mongoose.connect(globalThis.__MONGO_URI__, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
    });

    afterAll(async () => {
        await mongoose.disconnect();
    });

    afterEach(async () => {
        jest.clearAllMocks();
    });

    it('correctly logs into existing user and gives a token', async () => {
        const mockUser = { email: 'testing@gmail.com', password: 'solid', transcripts: [] };
        const user = new User(mockUser);
        await user.save()

        expect(loginUserInteractor('testing@gmail.com', 'solid')).resolves.toBeDefined();
        token = await loginUserInteractor('testing@gmail.com', 'solid');
        expect(typeof token).toBe('string');
    });

    it('throws error if user does not exist', async () => {
        expect.hasAssertions();
        try {
            await loginUserInteractor('notarealuser@gmail.com', 'solid');
        } catch (e) {
            const str_e = String(e);
            expect(str_e).toMatch("Unable to find user.");
        }
    });

})