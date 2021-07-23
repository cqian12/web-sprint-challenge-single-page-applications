import * as yup from '../node_modules/yup'

const schema = yup.object().shape({
    name: yup //checks to see if a name of at least 2 characters is in the form submission
    .string()
    .trim()
    .required('Please input a name')
    .min(2,'name must be at least 2 characters'),
    size: yup //checks to see if a size is chosen
    .string()
    .required('Please choose a size'),
    //toppings and special instructions are not required, but checks to see that they fit the appropriate types (booleans for the former and string for the latter)
    nuts: yup 
    .boolean()
    .oneOf([true,false]),
    chips: yup
    .boolean()
    .oneOf([true,false]),
    marsh: yup
    .boolean()
    .oneOf([true,false]),
    caramel: yup
    .boolean()
    .oneOf([true,false]),
    special: yup
    .string()
    .trim()
})

export default schema