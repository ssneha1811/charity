//check user is authenticated or not starts
// initApp = function () {
firebase.auth().onAuthStateChanged(function (user) {
  console.log(user);
  //   user ? handleSignedInEdit(user) : window.open("./index.html", "_self");
  user ? handleSignedInUser(user) : handleSignedOutUser(user);
  function handleSignedInUser(user) {
    document.getElementById("signIn").style.display = "none";
    $("#logout").attr("style", "display: block");
    $("#profile").attr("style", "display: block");
  }
  function handleSignedOutUser(user) {
    $("#signIn").attr("style", "display: block");
    $("#logout").attr("style", "display: none");
    $("#profile").attr("style", "display: none");
  }
});
// };

// window.addEventListener("load", function () {
//   //   if (ui.isPendingRedirect()) {
//   //     ui.start("#firebaseui-auth-container", uiConfig);
//   //   } else {
//   //     initApp();
//   //   }
//   initApp();
// });
//check user is authenticated or not ends

//Logout the user starts
function logout() {
  firebase.auth().signOut();
  window.location.replace("./signin.html");
}
//Logout the user ends

$("#upload_data").submit(function () {
  //  $("#status").empty().text("File is uploading...");
  $(this).ajaxSubmit({
    error: function (xhr) {
      // status("Error: " + xhr.status);
    },
    success: function (response) {
      // $("#status").empty().text(response);
      alert(response);
      location.reload();
    },
  });
  //Very important line, it disable the page refresh.
  return false;
});
