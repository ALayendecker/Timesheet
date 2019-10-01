var firebaseConfig = {
    apiKey: "AIzaSyCVtcIEkkuea1q38GuTHYMzghQuLvhU6OQ",
    authDomain: "fir-projects-94f67.firebaseapp.com",
    databaseURL: "https://fir-projects-94f67.firebaseio.com",
    projectId: "fir-projects-94f67",
    storageBucket: "fir-projects-94f67.appspot.com",
    messagingSenderId: "835592826516",
    appId: "1:835592826516:web:62cf2c31ddb052937a4e81"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var database = firebase.database();

  database.ref().push(newEmp);

  // Logs everything to console
  console.log(newEmp.name);
  console.log(newEmp.role);
  console.log(newEmp.start);
  console.log(newEmp.rate);

  alert("Employee successfully added");

  // Clears all of the text-boxes
  $("#employee-name-input").val("");
  $("#role-input").val("");
  $("#start-input").val("");
  $("#rate-input").val("");