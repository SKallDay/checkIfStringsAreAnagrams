import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

// let s1 = "garden";
// let s2 = "danger";

const checkIfAnagram = (s1, s2) => {
  // If s1 and s2 are not the same length
  // they are not anagrams
  if (s1.length !== s2.length) {
    return false;
  }

  // create hashmaps for s1 and s2
  // vars freq1 and freq2
  const freq1 = {};
  const freq2 = {};

  // populate hash for freq1
  for (let key in s1) {
    // if the key is already in freq1 increase count
    if (s1[key] in freq1) {
      freq1[s1[key]] = +1;
    } else {
      // add new key with inital value of 1
      freq1[s1[key]] = 1;
    }
  }

  // populate hash for freq2
  for (let key in s2) {
    // if the key is already in freq2 increase count
    if (s2[key] in freq2) {
      freq2[s1[key]] = +1;
    } else {
      // add new key with inital value of 1
      freq2[s2[key]] = 1;
    }
  }

  // for in loop - looping over freq1
  for (let key in freq1) {
    // if key does not exist is freq2 OR freq[key] is not equal to freq2[key]
    if (freq1[key] !== freq2[key]) {
      // hash maps are not equal and values are no anagrams
      return false;
    } // hash maps are equal and values are anagrams
  }
  return true;
};

console.log(checkIfAnagram("darh", "hard"));
console.log(checkIfAnagram("garden", "danger"));
console.log(checkIfAnagram("hoe", "ho4"));
