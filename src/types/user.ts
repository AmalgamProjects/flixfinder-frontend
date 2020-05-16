export type FirebaseUser = {
  displayName: string | null;
  photoURL: string | null;
  accessToken: string;
  email: string | null;
  isAnonymous: boolean;
  uid: string;
};


export interface IFirebaseUser {
  user: FirebaseUser | null;
}
