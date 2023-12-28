import handleReverseDate from "./handleReverseDate";

const message = (state) => {
  const hebrewText = [
    "ל",
    "",
    "",
    "",
    "בשכונת",
    "רחוב",
    "",
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
    "ריהוט : ",
    "כיווני אוויר :",
    "תוספות : ",
    "ארנונה ₪",
    "ועד ₪",
    "מחיר ₪",
  ];
  const afterSplice = Object.values(state).slice(4);
  const message = Object.values(afterSplice).map((value, index) => {
    if (index === 0) return `ל${value} בבלעדיות`;
    if(index ===5) return `${hebrewText[index]} ${value}`
    if (value == 1 && index!==6) return `${hebrewText[index]}\n`;
    if (!value) return;
    
    if (index === 13 && value > 1) return `חניות ${value}\n`;
    if (index === 18 && value > 1) return `מעליות ${value}\n`;

    return `${hebrewText[index]} ${value}\n`;
  });
  message.push(`תאריך כניסה : ${handleReverseDate(state.available.substring(0, 10))} \n`);
  message.push("אורנה אהרון שיווק נכסים" + "\n");
  message.push("0504215530");
  console.log(message);
  navigator.clipboard.writeText(message.join(""));
  return message;
};
export default message;
