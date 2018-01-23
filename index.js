const app = "I don't do much.";

  const token = 'I1would2rather3not4put5personal6info7in8here9I10hope11that12is13ok'
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));
