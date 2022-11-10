"use strict";

class UserStorage {
  // # : 외부에서 직접 접근할 수 없도록 은닉화 = private 키워드와 같음
  static #users = {
    id: ["trofi92", "trofi", "fitro"],
    psword: ["1234", "12345", "123456"],
    name: ["엄세영", "엄동영", "엄주익"],
  };
  static getUsers(...fields) {
    // 1. fields =
    //    컨트롤러 함수의 req.body에서 parameter로 넘긴
    //    데이터들(id, pw등)이 배열 형태로 저장됨
    // 2. class내부의 users를 가져옴
    // 3. reduce 메서드를 사용. 배열의 각 요소에 대해 주어진 함수 실행
    // 4. hasOwnProperty를 통해 1에서 받은 값을 확인한다. 해당하는 배열
    //    (즉, id면 id가 key인 배열)을 호출하여 배열의 각 요소를 newUser에 누산시킨다.
    // 5. 이 과정을 반복하면 원본을 직접 노출시키지 않고
    //    필요한 값을 새로운 객체(newUsers)로 반환하는 메서드를 만들 수 있다.
    // 6. newUsers의 return 값을 받은 컨트롤러 함수는
    //    그것이 제공한 parameter에 따라 값을 선별적으로 제공받아 사용하게 된다.
    // console.log(...fields);
    const users = this.#users;
    const newUsers = fields.reduce((newUsers, field) => {
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field];
      }
      return newUsers;
    }, {}); // 빈 객체 = initialValue = newUsers 배열을 담는 역할
    return newUsers;
  }
  static getUserInfo(id) {
    const users = this.#users;
    const idx = users.id.indexOf(id);
    const usersKeys = Object.keys(users);
    const userInfo = usersKeys.reduce((newUser, info) => {
      newUser[info] = users[info][idx];
      return newUser;
    }, {});
    return userInfo;
  }
}

module.exports = UserStorage;
