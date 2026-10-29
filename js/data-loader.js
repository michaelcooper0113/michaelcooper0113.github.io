// Data Loader - Combines LIJ and NSUH data files  
// Include this AFTER lij-data.js and nsuh-data.js in your HTML

// Initialize DATA object if it doesn't exist  
var DATA = DATA || {};  
DATA.lij = DATA.lij || {};  
DATA.nsuh = DATA.nsuh || {};

// Combine all entries for searching (if needed by main app)  
DATA.allEntries = [].concat(  
  DATA.lij.entries.map(function(e) {  
    return {t: e.t, n: e.n, v: e.v, hospital: "LIJ"};  
  }),  
  DATA.nsuh.entries.map(function(e) {  
    return {t: e.t, n: e.n, v: e.v, hospital: "NSUH"};  
  })  
);

console.log("✅ Loaded " + DATA.lij.entries.length + " LIJ entries");  
console.log("✅ Loaded " + DATA.nsuh.entries.length + " NSUH entries");  
console.log("✅ Total: " + DATA.allEntries.length + " entries");  