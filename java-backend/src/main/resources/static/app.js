function setOutput(message) {
document.getElementById("output").innerText = message;
}

async function callJava() {
setOutput("Calling Java backend...");

try {
const response = await fetch(`/api/hello`);

```
if (!response.ok) {
  throw new Error(`HTTP error! Status: ${response.status}`);
}

const text = await response.text();
setOutput("✅ Java Response:\n" + text);
```

} catch (error) {
setOutput("❌ Error calling Java backend:\n" + error.message);
}
}

async function callPython() {
setOutput("Calling Python service via Java...");

try {
const response = await fetch(`/api/python`);

```
if (!response.ok) {
  throw new Error(`HTTP error! Status: ${response.status}`);
}

const text = await response.text();
setOutput("✅ Python Response (via Java):\n" + text);
```

} catch (error) {
setOutput("❌ Error calling Python service:\n" + error.message);
}
}
