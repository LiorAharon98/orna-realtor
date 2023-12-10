const message = (state) => {
  const hebrewText = [
    "ל",
    "",
    "",
    "",
    "בשכונת",
    "רחוב",
    "",
    `מ'ר`,
    "חדרים",
    "קומה",
    "מתוך",
    "מרפסת שמש",
    "מרפסת שירות",
    "חנייה",
    `ממ'ד`,
    "שירותים",
    "אמבטיה",
    "מחסן",
    "מעלית",
    "מקלחון",
    "",
    "תאריך כניסה",
    "כיווני אוויר",
    "מחיר ₪",
    "ארנונה ₪",
    "ועד ₪",
    "מחיר",
    
  ];
  const afterSplice = Object.values(state).slice(3);
  const message = Object.values(afterSplice).map((value, index) => {
    if (!value || index === 23 || index === 21) return;
    return hebrewText[index] + " " + value +'\n';
  });

  console.log(message +'אורנה אהרון שיווק נכסים');
  navigator.clipboard.writeText(message +'אורנה אהרון שיווק נכסים');
  return message;
};
export default message;
