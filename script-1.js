let age = prompt("Masukan Umur");

const kucing = (age) => {
  if (age === 1) {
    return `Umur kucing 15 ali umur manusia`;
  } else if (age === 2) {
    return `Umur kucing 24 kali umur manusia`;
  } else if (age >= 3) {
    return `Umur kucing 32 kali umur manusia`;
  }
};

document.write(kucing(age))
console.log(kucing(age));
