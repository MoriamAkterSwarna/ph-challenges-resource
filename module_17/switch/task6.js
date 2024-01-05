/***

Create a task that involves a simple role-based access control system. The task is to take the user's role (number) and use a switch statement to determine their level of access.

    ========
    Roles
    ========
    1. Administrator
    2. Moderator
    3. User

 */

// Display available roles to the user.
console.log("Roles:");
console.log("1. Administrator");
console.log("2. Moderator");
console.log("3. User");

let userRole = 2;
let accessLevel;

switch (userRole) {
    case 1:
        accessLevel = "Administrator";
        break;
    case 2:
        accessLevel = "Moderator";
        break;
    case 3:
        accessLevel = "User";
        break;
    default:
        accessLevel = "Invalid role";
}

console.log('Your access level: ' + accessLevel);
