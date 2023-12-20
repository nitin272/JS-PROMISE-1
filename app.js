// Progression 1: PROMISE ME
const fetchData = () => {
  return new Promise((resolve, reject) => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch((error) => reject(error));
  });
};

// Progression 2: SHOW MY PROMISE
fetchData()
  .then((result) => {
    console.log(result); // Log data to console

    // Display data in the form of a list
    var player = '<h2>Lists of Users</h2>';
    result.forEach(function (user) {
      player += `<div class="player">
        <div class="strength">Name : ${user.name}</div>
        <div>Email   : ${user.email}</div>
        <div>Phone   : ${user.phone}</div>
        <div>Website : ${user.website}</div>
        <div>Company : ${user.company.name}</div>
        <div>City    : ${user.address.city}</div>
        <div>Zipcode : ${user.address.zipcode}</div>
       </div>`;
    });

    document.body.innerHTML += player; // Append player content to the body
  })
  .catch((error) => {
    // Progression 3: REJECT ME
    console.log('Promise rejected.');
    console.log(error.message);
  });
