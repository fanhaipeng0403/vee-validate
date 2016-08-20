/* istanbul ignore next */
/* eslint-disable max-len */
export default {
    alpha_dash: (field) => `The ${field} may contain alpha-numeric characters as well as dashes and underscores.`,
    alpha_num: (field) => `The ${field} may only contain alpha-numeric characters.`,
    alpha: (field) => `The ${field} may only contain alphabetic characters.`,
    between: (field, [min, max]) => `The ${field} must be between ${min} and ${max}.`,
    confirmed: (field, [confirmedField]) => `The ${field} does not match the ${confirmedField}.`,
    digits: (field, [length]) => `The ${field} must be numeric and exactly contain ${length} digits.`,
    dimensions: (field, [width, height]) => `The ${field} must be ${width} pixels by ${height} pixels.`,
    email: (field) => `The ${field} must be a valid email.`,
    ext: (field) => `The ${field} must be a valid file.`,
    image: (field) => `The ${field} must be an image.`,
    in: (field) => `The ${field} must be a valid value.`,
    ip: (field) => `The ${field} must be a valid ip address.`,
    max: (field, [length]) => `The ${field} may not be greater than ${length} characters.`,
    mimes: (field) => `The ${field} must have a valid file type.`,
    min: (field, [length]) => `The ${field} must be at least ${length} characters.`,
    not_in: (field) => `The ${field} must be a valid value.`,
    numeric: (field) => `The ${field} may only contain numeric characters.`,
    regex: (field) => `The ${field} format is invalid.`,
    required: (field) => `The ${field} is required.`,
    size: (field, [size]) => `The ${field} must be less than ${size} KB.`,
    url: (field) => `The ${field} is not a valid URL.`
};
