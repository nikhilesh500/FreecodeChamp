const messageInput = document.getElementById("message-input");
const result = document.getElementById("result");
const checkMessageButton = document.getElementById("check-message-btn");

// const helpRegex = /please help/i;
const helpRegex = /please help|assist me/i;
// const dollarRegex = /dollars/i;
// const dollarRegex = /[0-9]+ hundred|thousand|million|billion dollars/i;
const dollarRegex = /[0-9]+ (?:hundred|thousand|million|billion)? dollars/i;
// const freeRegex = /free money/i;
const freeRegex = /(?:^|\s)fr[e3][e3] m[o0]n[e3]y(?:$|\s)/i;
// const stockRegex = /stock alert/i;
// const stockRegex = /(?:^|\s)[s5][t7][o0][c{[(]k [a@4]l[e3]r[t7](?:$|\s)/i;
const dearRegex = /(?:^|\s)d[e3][a@4]r fr[i1|][e3]nd(?:$|\s)/i;

/*
[s5],[t7],[c{[(],
[o0],[a@4],[e3],[i1],
*/

const denyList = [helpRegex, dollarRegex, freeRegex, stockRegex, dearRegex];

// const isSpam = (msg) => false;
// const isSpam = (msg) => msg.match(helpRegex);
// const isSpam = (msg) => helpRegex.test(msg);
const isSpam = (msg) => denyList.some(regex => regex.test(msg));

checkMessageButton.addEventListener("click", () => {
  if (messageInput.value === "") {
    alert("Please enter a message.");
    return;
  }
  result.textContent = isSpam(messageInput.value) ? "Oh no! This looks like a spam message." :  "This message does not seem to contain any spam.";

  messageInput.value = "";
});