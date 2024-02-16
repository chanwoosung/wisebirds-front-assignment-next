import { AuthKey } from "@/types";
import { makeAutoObservable } from "mobx";

class AuthStoreClass {
  private _auth: AuthKey = "Admin";
  constructor() {
    makeAutoObservable(this);
  }

  get auth(): AuthKey {
    return this._auth;
  }

  setAuth(auth: AuthKey) {
    this._auth = auth;
  }
}

const AuthStore = new AuthStoreClass();

export default AuthStore;
