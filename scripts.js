function generateRandomHexColor() {
  // Generate random numbers for red, green, and blue components (0-255)
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  // Convert each component to a two-digit hexadecimal string
  const hr = r.toString(16).padStart(2, '0');
  const hg = g.toString(16).padStart(2, '0');
  const hb = b.toString(16).padStart(2, '0');

  // Combine them with '#' prefix to form a hex color code
  return `#${hr}${hg}${hb}`;
}

// Example usage:
const randomColor = generateRandomHexColor();
console.log(randomColor); // e.g., #a3f4c7