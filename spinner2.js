const animate = [ '\r|   ', '\r/   ', '\r-   ', '\r\\   ',
'\r|   ', '\r/   ', '\r-   ', '\r\\   ' ];

let delay = 100;

for (const step of animate){
  setTimeout(() => process.stdout.write(step), delay);
  delay += 200;
}

