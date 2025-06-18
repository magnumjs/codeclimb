export default function runTests(userCode, tests, functionName) {
  let pass = 0;
  let results = [];
  try {
    // eslint-disable-next-line no-new-func
    const fn = new Function(userCode + "; return " + functionName + ";");
    const userFn = fn();
    for (const { input, expected } of tests) {
      let output;
      try {
        output = userFn(...input);
        const ok = JSON.stringify(output) === JSON.stringify(expected);
        if (ok) pass++;
        results.push({ input, expected, output, ok });
      } catch (e) {
        results.push({ input, expected, output: e.message, ok: false });
      }
    }
  } catch (e) {
    return { error: e.message, results: [] };
  }
  return { pass, total: tests.length, results };
}