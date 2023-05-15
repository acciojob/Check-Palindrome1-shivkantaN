function isPalindrome(s) {
  // Remove all non-alphanumeric characters and convert to lowercase
  const cleanString = s.toLowerCase().replace(/[^a-z0-9]/g, '');

  // Check if the clean string is equal to its reversed version
  return cleanString === cleanString.split('').reverse().join('');
}

// Example usage:

console.log(result); // Output: false
