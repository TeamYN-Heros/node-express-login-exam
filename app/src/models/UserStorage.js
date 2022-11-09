"use strict";

class UserStorage {
  // # : 외부에서 직접 접근할 수 없도록 은닉화
  static #users = {
    id: ["trofi92", "trofi", "fitro"],
    psword: ["1234", "12345", "123456"],
    name: ["엄세영", "엄동영", "엄주익"],
  };
  static getUsers(...fields) {
    console.log(fields);
    const users = this.#users;
    const newUsers = fields.reduce((newUsers, field) => {
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field];
      }
      return newUsers;
    }, {});
    return newUsers;
  }
}

module.exports = UserStorage;
