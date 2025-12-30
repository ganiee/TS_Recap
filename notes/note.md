you can install tsc via npm

npm i -g typescript // global installation

--
npm init -y
npm i -D typescript  //local installation

---

tsc --init <-- this will generate tsconfig.json>


==

tsc --init  // use this to generate tsconfig.json.

now ts-node src/file.ts // this will build + run directly



tsconfig created manually below
{
  "compilerOptions": {
    "target": "esnext",
    "rootDir": "./src",
    // "module": "NodeNext",
    // "moduleResolution": "NodeNext",
    "esModuleInterop": true,
    "skipLibCheck": true,
    "strict": true
  }
}
