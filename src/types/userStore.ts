export interface IUserStore {
  isLoggedIn: boolean;
  userId: string;
  messages: IMessage[];
  login(id: string): void;
  logout(): void;
  onMessageRecieved(message: any): void;
}

export interface IMessage {
  to: string;
  message: {
    text: string;
  }
}
