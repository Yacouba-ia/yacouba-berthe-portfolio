import { spawn } from "node:child_process";
import { createRequire } from "node:module";
import { dirname } from "node:path";

const require = createRequire(import.meta.url);
const args = process.argv.slice(2);
const env = { ...process.env };

if (process.platform === "win32") {
  env.NEXT_TEST_WASM = "1";
  env.NEXT_TEST_WASM_DIR = dirname(
    require.resolve("@next/swc-wasm-nodejs/package.json"),
  );

  const command = args[0] ?? "dev";
  const hasBundlerFlag = args.includes("--webpack") || args.includes("--turbopack");

  if ((command === "build" || command === "dev") && !hasBundlerFlag) {
    args.push("--webpack");
  }
}

const child = spawn(
  process.execPath,
  [require.resolve("next/dist/bin/next"), ...(args.length > 0 ? args : ["dev"])],
  {
    env,
    shell: false,
    stdio: "inherit",
  },
);

child.on("error", (error) => {
  console.error(error);
  process.exit(1);
});

child.on("exit", (code) => {
  process.exit(code ?? 1);
});
