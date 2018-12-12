const go = new Go();
let wasmPath = browser.runtime.getURL("web.wasm");
fetch(wasmPath).then((response) => {
    return response.arrayBuffer();
}).then((bytes) => {
    return WebAssembly.instantiate(bytes, go.importObject);
}).then((result) => {
    go.run(result.instance);
}).catch((err) => {
    console.log("err", err)
});