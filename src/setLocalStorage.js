export default function SetLocalStorage (key, value) {

    localStorage.setItem(key, JSON.stringify(value));
    
}