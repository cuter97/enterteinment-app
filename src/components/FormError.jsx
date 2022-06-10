const FormError = ({error}) => {
  return (
    <div>{error && <p className="text">{error.message}</p>}</div>
  )
}

export default FormError