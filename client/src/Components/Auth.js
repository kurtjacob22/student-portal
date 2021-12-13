class Auth {
  constructor() {
    this.authenticated = false;
  }

  login() {
    this.authenticated = true;
    // callback();
  }

  logout() {
    this.authenticated = false;
    // callback();
  }

  isAuthenticated() {
    return this.authenticated;
  }
}

export default new Auth();
