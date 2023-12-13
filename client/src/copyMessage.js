const message = (state) => {
  const hebrewText = [
    "ל",
    '',
    '',
    '',
    "בשכונת",
    "רחוב",
    '',
    `מ"ר`,
    "חדרים",
    "קומה",
    "מתוך",
    "מרפסת שמש",
    "מרפסת שירות",
    "חנייה",
    `ממ"ד`,
    "שירותים",
    "אמבטיה",
    "מקלחון",
    "מעלית",
    "מחסן",
    "מיזוג :",
    "תאריך כניסה",
    "כיווני אוויר",
    "מחיר ₪",
    "ארנונה ₪",
    "ועד ₪",
    "מחיר ₪",
    
  ];
  const afterSplice = Object.values(state).slice(4);
  const message = Object.values(afterSplice).map((value, index) => {
    if(index===0) return `ל${value} בבלעדיות`
    if(value ==1) return `${hebrewText[index]} \n`
    if (!value || index === 23 || index === 21) return
    if(index ===13 && value >1) return `חניות ${value} \n`
    if(index ===18 && value >1) return `מעליות ${value} \n`
    return `${hebrewText[index]} ${value}\n`;
  });
  message.push('אורנה אהרון שיווק נכסים' +'\n')
  message.push('0504215530')
  console.log(message);
  navigator.clipboard.writeText(message.join(''));
  return message;
};
export default message;
