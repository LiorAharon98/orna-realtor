const message =(state)=>{
    const  message = `
    ל${state.rentOrSell} ${state.type} בבלעדיות ב${state.city}
    בשכונת ${state.neighborhood}
    רחוב ${state.street} ${state.streetNumber}
    ${state.condition}
    ${state.rooms} חדרים
    מ"ר ${state.squareMeter}
    קומה ${state.floor} מתוך ${state.maxFloor}
    ${state.balcony} מרפסת שמש
    ${state.serviceBalcony} מרפסת שירות
    ${state.safeRoom} ממ"ד
    ${state.warehouse} מחסן
    ${state.parking} ${state.parking >1 ? 'חניות' : 'חנייה'}
    ${state.elevator} מעלית
    ${state.showerStall} מקלחון
    ${state.bathrooms} שירותים
    ${state.bathtub} אמבטיה
    ${state.airConditioner}
    ${state.airDirections} כיווני אוויר
    ${state.available.substring(0,10)} תאריך כניסה
    ${state.propertyTax}₪ ארנונה
    ${state.committee}₪ ועד
    ${state.price}₪ מחיר
    אורנה אהרון שיווק נכסים
    ` 
    console.log(state)
    console.log(message)
    navigator.clipboard.writeText(message);
    return message
}
export default message