
class UserDB {
    users = [];
  
    async getUsers() {
      return new Promise(resolve => {
        setTimeout(() => resolve(this.users), 100);
      });
    }
  
    async addUser(user) {
      return new Promise(resolve => {
        setTimeout(() => {
          this.users.push(user);
          resolve();
        }, 100);
      });
    }

    async removeLastUser(){
        return new Promise(resolve => {
            setTimeout(() => {
                this.users.pop();
                resolve("removed successfully...");
            }, 1000);
        });
    }

    async Truncate() {
        return new Promise(resolve => {
            setTimeout(() => {
                this.users = [];
                resolve("removed successfully...");
            }, 100);
        });
    }

  }
  


function User (name, age) {
    this.name = name,
    this.age = age,
    this.getName =  function () {
        return this.name;
    }
    this.getAge = function () {
        return this.age;
    }
    this.getDetails = function () {
        return {
            name : this.name,
            age : this.age,
        };
    }
}


exports.UserDB = UserDB;
exports.User = User;