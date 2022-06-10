export const formValidate = (getValues) => {
    return {
        required: {
            value: true,
            message: 'Obligatory field'
        },
        patternEmail: {
            value: /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/,
            message: 'Invalid mail'
        },
        minLength: {
            value: 6,
            message: "Min 6 characters",
        },
        // validateTrim: {
        //     trim: v => {
        //         return (!v.trim()) ? 'spaces cannot be included' : true
        //     }
        // },
        validateEquals(value) {
            return {
                equals: v => v === value || 'Password invalid',
            }
        }
    }
}