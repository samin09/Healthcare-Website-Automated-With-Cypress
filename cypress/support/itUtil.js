import 'cypress-each'

function multiIt(array, arrayFilterObject, callback) {

  function filterCallback(row) {
    if (!arrayFilterObject) {
      return true
    }
    let obtainedValue = row[Object.keys(arrayFilterObject)[0]]
    if (obtainedValue) {              //////////////CHECK IF THIS NEEDS TO BE IMPLEMENTED
      let checkedString = typeof obtainedValue === "number" ? obtainedValue.toString() : obtainedValue.toLowerCase()
      return checkedString.includes(Object.values(arrayFilterObject)[0].toLowerCase())
    }
  }

  function runErrorTestCase(callback) {
    it("No testcases found error", callback)
  }

  if (!Array.isArray(array)) {
    runErrorTestCase(() => {
      throw new Error("Array not provided")
    })
    return
  }

  if (typeof arguments[1] === "function") {
    arrayFilterObject = null
    callback = arguments[1]
  } else if (typeof arrayFilterObject !== "object") {
    runErrorTestCase(() => {
      throw new Error("An object was not provided for array filter object")
    })
    return
  }

  if (arrayFilterObject && Object.keys(arrayFilterObject).length > 1) {
    runErrorTestCase(() => {
      throw new Error("More than one property found in array filter object")
    })
    return
  }

  let numberOfTests = it.each(array, filterCallback)
    (userDto => `${userDto["testCaseNumber"]} : ${userDto["testCaseName"]}`, userDto => {
      callback(userDto)
    })

  if (numberOfTests === 0) {
    runErrorTestCase(() => {
      throw new Error("Filter criteria did not match any test cases")
    })
  }
}

function getTestCaseObject(arrayObject) {
  return arrayObject.find(el => {
    let testCaseInTitle = new RegExp(/Test Case.+[^\s](?=\s?:)/i).exec(Cypress.currentTest.title)[0]
    return el.testCaseNumber === testCaseInTitle
  })
}

export {
  multiIt, getTestCaseObject
}

