const sentence = 'hello there from lighthouse labs';

let delayTime = 0;

for (const char of sentence) {
  delayTime += 50;
  setTimeout(()=>{
    process.stdout.write(char);
  }, delayTime);
}

setTimeout(()=>console.log('\n'), delayTime + 50);