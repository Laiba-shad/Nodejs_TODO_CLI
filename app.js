import { stdin, stdout } from "process";
import readline from "readline";

//interface mn inout output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const todos = [];
const showMenu = () => {
  console.log("1: Create Todo");
  console.log("2: View Task");
  console.log("3: Exits");
  rl.question("Choose an option: ", handleInput);
};
const handleInput = (option) => {
  if (option === "1") {
    rl.question("Enter Task: ", (task) => {
      todos.push(task);
      console.log("Task Added : ", task);
      showMenu();
    });
  } else if (option === "2") {
    //option 2 select ho gia hai todos show krny hn todos array hai map ya for each method ko show kr skty hn
    console.log("\nYour Task are: ");
    todos.forEach((task, index) => {
      console.log(`${index + 1}.  ${task} \n`);
    });
    showMenu();
  } else if (option === "3") {
    console.log("Bye 👋🏻");
    rl.close();
  } else {
    console.log("Invalid Option");
    showMenu();
  }
};

showMenu();
