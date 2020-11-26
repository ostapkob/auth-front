export default function authHeader() {
  let user = JSON.parce(localStorage.getItem('user'));
  if (user && user.accesToken) {
    return {'x-access-token': user.accesToken};
  }
  else {
    return {}
  }
}
