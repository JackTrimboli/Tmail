const express = require("express");
const router = express();
// const { google } = require("googleapis");
// const fs = require("fs");

// const { authorize } = require("passport");
// const SCOPES = ["https://www.googleapis.com/auth/gmail.readonly"];
// const TOKEN_PATH = "token.json";

// fs.readFile("credentials.json", (err, content) => {
//   if (err) return console.log("Error loading client secret file: " + err);
//   authorize(JSON.parse(content), listLabels);
// });
// const getLabels = (auth) => {
//   const gmail = google.gmail({ version: "v1", auth });
//   gmail.user.labels.list(
//     {
//       userID: "me",
//     },
//     (err, res) => {
//       if (err) return console.log("The API returned an error: " + err);
//       const labels = res.data.labels;
//       if (labels.length) {
//         console.log("Labels: ");
//         labelsl.forEach((label) => {
//           console.log(`- ${label.name}`);
//         });
//       } else {
//         console.log("No labels found.");
//       }
//     }
//   );
// };

module.exports = router;
