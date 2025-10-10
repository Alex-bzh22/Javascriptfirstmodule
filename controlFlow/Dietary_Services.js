let userType = "Subscriber";
let accessLevel;

switch (userType) {
    case "Employee":
        accessLevel = "Access to Dietary Services";
        break;
    case "Enrolled Member":
        accessLevel = "Access to Dietary Services + dietetician";
        break;
    case "Subscriber":
        accessLevel = "Partial access to Dietary Services";
        break;
    case "Non-Subscriber":
        accessLevel = "Need to enroll or at least subscribe";
        break;
    default:
        accessLevel = "Unknown";
}

console.log("Access Level:", accessLevel);