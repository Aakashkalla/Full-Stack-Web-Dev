let a = prompt("Enter a number");
let b = prompt("Enter a number");

if (isNaN(a) || isNaN(b)) {
    throw SyntaxError("Sorry This is not allowed")
}

let sum = parseInt(a) + parseInt(b);

function main() {
    let x = 1;

    try {
        console.log("The sum is ", sum + x)
        return true;
    } catch (error) {
        console.log("OOPS ERROR!!");
        return false;
    }
    finally{
        console.log("Files are being close and db connection is being closed")
    }
}

let c = main();