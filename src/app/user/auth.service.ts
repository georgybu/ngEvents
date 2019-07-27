import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

    public currentUser;

    loginUser(userName: string, password: string) {
        this.currentUser = {
            id: 1, 
            userName: userName,
            firstName: 'John',
            lastName: 'Papa'
        }
    }

    isAuthenticated() {
        return !!this.currentUser;
    }

    updateCurrentUser(firstName, lastName) {
        this.currentUser.firstName = firstName;
        this.currentUser.lastName = lastName;
    }
}