export type FirebaseUser = {
  displayName: string;
  accessToken: string;
  email: string;
  isAnonymous: boolean;
  uid: string;
};


export interface IFirebaseUser {
  user: FirebaseUser | null;
}
