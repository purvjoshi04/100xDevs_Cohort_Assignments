// This function is a middleware that checks if the user is authenticated or not.
// It receives the request object, the response object, and the next function as parameters.
// The next function is called when the user is authenticated.
export function userMiddleware(req, res, next) {
  // Extract the username and password from the request headers.
  const userName = req.headers.userName;
  const password = req.headers.password;

  // Check if the username and password are correct.
  // In this case, the correct username is "purv" and the correct password is "pass".
  // If the username and password do not match, send a 403 status code with a message indicating that the user does not exist.
  // If the username and password match, call the next function to move to the next middleware or the route handler.
  if (userName != "purv" || password != "pass") {
    res.status(403).json({
      message: "User does not exist",
    });
    return;
  } else {
    next();
  }
}

/**
 * This function is a middleware that checks if the kidneyId passed in the query parameters is either 1 or 2.
 * It receives the request object, the response object, and the next function as parameters.
 * The next function is called when the kidneyId is either 1 or 2.
 * @param {Object} req - The request object that contains information about the HTTP request.
 * @param {Object} res - The response object that is used to send the HTTP response.
 * @param {Function} next - The next function that is called to move to the next middleware or the route handler.
 * @return {void} This function does not return a value.
 */
export function kidneyMiddleware(req, res, next) {
  // Extract the kidneyId from the query parameters.
  const kidneyId = req.query.kidneyId;

  // Check if the kidneyId is not equal to 1 or 2.
  // If the kidneyId is not equal to 1 or 2, send a 411 status code with a message indicating that the inputs are wrong.
  // If the kidneyId is equal to 1 or 2, call the next function to move to the next middleware or the route handler.
  if (kidneyId != 1 || kidneyId != 2) {
    res.status(411).json({
      message: "Wrong inputs",
    });
    return;
  } else {
    next();
  }
}

