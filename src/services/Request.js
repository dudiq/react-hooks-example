import userMocks from '@/services/mocks/userMocks';

const delay = (ms = 1000) => {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
};

class Request {
  async get() {
    await delay();
  }

  async post(url, data) {
    const mock = userMocks[url];
    if (mock) {
      await delay(500);
      return mock(data);
    }
  }

  async upload() {
    await delay(5000);
  }
}

export default new Request();
