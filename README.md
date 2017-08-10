## Node.js Promise Stack Trace Issues

Some examples trying to figure out how to get unhandled promise rejections to show useful stack traces.

```
❯❯❯ node problem.js
(node:75870) UnhandledPromiseRejectionWarning: Unhandled promise rejection (rejection id: 1): Error: Oops!
(node:75870) DeprecationWarning: Unhandled promise rejections are deprecated. In the future, promise rejections that are not handled will terminate the Node.js process with a non-zero exit code.
```

```
❯❯❯ node problem.js --trace-warnings
(node:75969) UnhandledPromiseRejectionWarning: Unhandled promise rejection (rejection id: 1): Error: Oops!
(node:75969) DeprecationWarning: Unhandled promise rejections are deprecated. In the future, promise rejections that are not handled will terminate the Node.js process with a non-zero exit code.
```

```
❯❯❯ node solution.js
Error: Oops!
    at Promise (/Users/chet/Code/js/node-promise-stack-traces/solution.js:3:10)
    at main (/Users/chet/Code/js/node-promise-stack-traces/solution.js:2:2)
    at Object.<anonymous> (/Users/chet/Code/js/node-promise-stack-traces/solution.js:7:1)
    at Module._compile (module.js:571:32)
    at Object.Module._extensions..js (module.js:580:10)
    at Module.load (module.js:488:32)
    at tryModuleLoad (module.js:447:12)
    at Function.Module._load (module.js:439:3)
    at Module.runMain (module.js:605:10)
    at run (bootstrap_node.js:427:7)
```