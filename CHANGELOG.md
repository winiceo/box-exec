# Changelog

Refer this file to check out for updates in latest releases.

## [v1.0.5](https://npmjs.org/package/box-exec) | 12-10-2018 |

Note: This is a bug fix release
* Refactor execution output to support multiple test case files.
  > Returns object:
  
  > Key: testcase file path string.
  
  > Value: {error: boolean, output: string} 

## [v1.0.4](https://npmjs.org/package/box-exec/v/1.0.4) | 10-10-2018 |

* Added multipe test case files support.
  > **Pass file paths as seperate arguments (like variadic parameters)**
  
  Refer an example: [Example](https://github.com/akshitgrover/box-exec/blob/ab610bcc3b888f7438fc39e2a03dbf1ea7e72857/tests/script.js#L16)

* Added concurrency control handler
  > **Limiting only to 25 test case execution concurrently (by default)**.

  Check it out: [File](https://github.com/akshitgrover/box-exec/blob/master/concurrencyHandler.js)
