let age = prompt("Masukan Umur");

const kucing = (age) => {
  if (age == 1) {
    return `Umur kucing 15 umur manusia`;
  } else if (age == 2) {
    return `Umur kucing 24 kali umur manusia`;
  } else if (age >= 3) {
    let catAge = 24 + (age - 2) * 4;
    return `Umur kucing ${catAge} umur manusia`;
  } else {
    return `Kosong`;
  }
};

document.write(kucing(age));
console.log(kucing(age));
