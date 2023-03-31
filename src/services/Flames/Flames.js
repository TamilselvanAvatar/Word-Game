// const FLAMES = [...'FLAMES'];
const FlamesService = (mName, fName) => {
  const FLAMES = [...'FLAMES'];
  // To remove spaces and make all character to lower case
  const mNameArr = [
    ...[...mName.toLowerCase()].filter(element => element !== ' ')
  ];
  const fNameArr = [
    ...[...fName.toLowerCase()].filter(element => element !== ' ')
  ];
  const male = mNameArr.join('');
  const female = fNameArr.join('');
  let length = proceedService(male, female);
  while (FLAMES.length !== 1) {
    let index = length % FLAMES.length;
    index = index === 0 ? FLAMES.length : index;
    FLAMES.splice(index - 1, 1);
    FLAMES.unshift(...FLAMES.splice(index - 1));
    // rotation(index - 1);
  }

  return FLAMES[0];
};

/* To eliminate the same character with single occurence and return its length */
const proceedService = (male, female) => {
  let str1 = male;
  let str2 = female;
  let len = (str1 + str2).length;
  for (let i of female) {
    str1 = str1.replace(i, '');
  }
  for (let i of male) {
    str2 = str2.replace(i, '');
  }

  console.log(
    'Match in the names (%) : ',
    ((len - (str1 + str2).length) / len) * 100
  );

  return (str1 + str2).length;
};

/* Shift the data of Global variable
   unfortunately Global variable remain unchanged until refresh*/
/*const rotation = index => {
//Try to understand the Global Variable : FLAMES
FLAMES.unshift(...FLAMES.splice(index));

//To rotate the array from given position
for (let i = index - 1; i < FLAMES.length; i++) {
  FLAMES.unshift(...FLAMES.splice(i, 1));
}
};*/

export default FlamesService;
