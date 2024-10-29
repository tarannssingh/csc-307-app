const sum = (a, b) => {
    return a + b
}

const div = (a, b) => {
    return a / b
}

function containsNumbers(text){
    for (let i = 0; i < text.length; i++) {
     if (!isNaN(text.charAt(i)))
      return true;
    }
    return false;
  }

// const containsNumbers = (text) => {
//     text.forEach(char => {
//         if (!isNaN(char)) {
//             return true;
//         }
//     });
//     return false;
// }

export default {sum, div, containsNumbers}