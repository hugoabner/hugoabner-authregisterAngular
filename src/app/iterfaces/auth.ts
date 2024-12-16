export interface RegisterPostData {
  fullName: String;
  email: String;
  password: String
}

export interface User extends RegisterPostData {
  id : String
}
