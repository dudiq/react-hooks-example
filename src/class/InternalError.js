export default class InternalError {
  constructor(message, code) {
    this.code = code;
    this.message = message;
  }
}
