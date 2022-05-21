export const DAY = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

export const BUTTONCOLORS = [
  { color: "#BDBDBD"},
  { color: "#D3CCA4"},
  { color: "#FDD692"},  
  { color: "#F8A6A6"},
  { color: "#FF7473"},
];

export const EMAILREGEX = new RegExp("^\\w+@[a-zA-Z_]+?\\.[a-zA-Z]{2,3}$")

// Minimum eight characters, at least one letter, one number and one special character
export const PASSWORDREGEX = new RegExp("^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{8,}$") 