function saveAuth(key, data) {
  localStorage.setItem("bewakoofAuth", JSON.stringify(data));
}
function loadAuth(key) {
  try {
    let auth = JSON.parse(localStorage.getItem("bewakoofAuth"));
    return auth;
  } catch (err) {
    return {};
  }
}
export { loadAuth, saveAuth };
