const renderField = ({ input, meta, label, type }) => (
    <div className="col">
        <label>{label}</label>
        {/* <pre>{JSON.stringify(meta, 0, 2)}</pre> */}
        <input { ...input } type={type} className="form-control"/>
        {meta.touched && meta.error &&
        <span className="error text-danger">{meta.error}</span>}
    </div>
);

export {
    renderField,
}