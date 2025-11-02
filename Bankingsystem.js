const input = require("prompt-sync")();

let accountBalance = 1000;

function checkBalance() {
  console.log(" ============================================== ");
  console.log(`Your Current Balance is: ₹${accountBalance}`);
  console.log(" ============================================== ");
  return accountBalance;
}

//DEPOSIT AMOUNT
function depositAmount(amount) {
  if (amount <= 0 || isNaN(amount)) {
    console.log("❌ Invalid Input!");
    return false;
  }
  accountBalance += amount;
  console.log(`Deposited Amount is: ₹${amount}`);
  console.log(`New Balance is: ₹${accountBalance}`);
  return true;
}

//WITHDRAW AMOUNT
function withdrawAmount(amount) {
  if (amount <= 0 || isNaN(amount)) {
    console.log("❌Invalid amount!");
    return false;
  }
  if (amount > accountBalance) {
    console.log("❌ Insufficient Balance!");
    return false;
  }
  accountBalance -= amount;
  console.log(`Withdraw ₹${amount}`);
  console.log(`New Balance is: ₹${accountBalance}`);
  return true;
}

//CALCULATE INTEREST
function calculateInterest(rate = 5, years = 1) {
  let interest = (accountBalance * rate * years) / 100;
  return interest;
}

function showBankingMenu() {
  console.log("\n==== QuickBank 🏦 ==== ");
  console.log("1. Check Balance");
  console.log("2. Deposit Money");
  console.log("3. Withdraw Money");
  console.log("4. Calculate Interest");
  console.log("5. Exit");
  console.log("===============================");
}

let choice;
do {
  showBankingMenu();
  choice = Number(input("Enter Your Choice: "));
  switch (choice) {
    case 1:
      checkBalance();
      break;

    case 2:
      let depositAmnt = Number(input("Enter Your deposit: "));
      depositAmount(depositAmnt);
      break;

    case 3:
      let WithdrawAmt = Number(input("Enter Your withdraw: "));
      withdrawAmount(WithdrawAmt);
      break;

    case 4:
      let rate = Number(input("Enter interest rate (default 5): ") || 5);
      let years = Number(input("Enter years (default 1): ") || 1);
      let interest = calculateInterest(rate, years);
      console.log(`Interest earned: ₹${interest.toFixed(2)}`);
      console.log(
        `Total after ${years} years: ₹${(accountBalance + interest).toFixed(2)}`
      );
      break;

    case 5:
      console.log("Thankyou for using QuickBank 🏦");
      break;
    default:
      console.log("!Invalid choice, Please try again");
  }
} while (choice !== 5);
