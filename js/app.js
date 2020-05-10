function $(value)
{
  return document.getElementById(value);
}

function setData(data)
{
  $('firstname').textContent = data.results[0].name.first;
  $('lastname').textContent = data.results[0].name.last;
  $('age').textContent = data.results[0].registered.age;
  $('location').textContent = data.results[0].location.country;
  $('phonenumber').textContent = data.results[0].cell;
  $('email').textContent = data.results[0].email;
  $('picture').src = data.results[0].picture.large;
}

function setNewPerson()
{
  fetch('https://randomuser.me/api/')
    .then(response => response.json())
    .then(data => setData(data));
}

window.addEventListener('load', setNewPerson);
$('newPerson').addEventListener('click', setNewPerson);
