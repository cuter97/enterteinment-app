export const formValidate = (getValues) => {
    return {
        required: {
            value: true,
            message: 'campo obligatorio'
        },
        patternEmail: {
            value: /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/,
            message: 'formato de email incorrecto'
        },
        minLength: {
            value: 6,
            message: "min 6 caracteres",
        },
        validateTrim: {
            trim: v => {
                return (!v.trim()) ? 'No se haceptan espacios' : true
            }
        },
        validateEquals(value) {
            return {
                equals: v => v === value || 'las contrasenias no coinciden',
            }
        }
    }
}