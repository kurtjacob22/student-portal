//* JS file for the Authenticating user
//* ---------- returns if the user is authenticated or not
//* ---------- used to avoid accessing the dashboard without logging in

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
