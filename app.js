import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const tasks = [];

const showMenu = () => {
  console.log("\n=== Todo CLI ===");
  console.log("1: Create Task");
  console.log("2: View Tasks");
  console.log("3: Exit");
  rl.question("Choose an option: ", handleInput);
};

const handleInput = (option) => {
  switch (option) {
    case "1":
      rl.question("Enter Task: ", (task) => {
        if (task.trim()) {
          tasks.push(task.trim());
          console.log("✅ Task Added:", task);
        } else {
          console.log("⚠️ Task cannot be empty.");
        }
        showMenu();
      });
      break;
    case "2":
      console.log("\nYour Tasks:");
      if (tasks.length === 0) {
        console.log("No tasks yet.");
      } else {
        tasks.forEach((task, index) => {
          console.log(`${index + 1}. ${task}`);
        });
      }
      showMenu();
      break;
    case "3":
      console.log("Bye 👋🏻");
      rl.close();
      break;
    default:
      console.log("Invalid Option");
      showMenu();
  }
};

showMenu();
