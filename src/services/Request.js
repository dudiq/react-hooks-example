const delay = (ms = 2000) => {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
};

class Request {
  async get() {
    await delay();
  }

  async post() {
    await delay(1000);
  }

  async upload() {
    await delay(5000);
  }
}

export default new Request();
