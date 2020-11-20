const API_URL = process.env.REACT_APP_API_URL;

const userMocks = {
  // TODO: use regexp for arguments
  [`${API_URL}/user/signup`]: () => {
    // TODO: add ServerError wrapper
    const serverResponse = {
      errors: {
        email: ['invalid format', 'already exist'],
        login: ['already exists'],
        pwd: ['too short'],
      },
    };
    throw serverResponse;
  },
};

export default userMocks;
