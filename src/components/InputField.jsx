export const InputField = ({ type, value, onChange }) => {
	return (
		<input
			className="vertical"
			type={type}
			value={value}
			onChange={onChange}
		/>
	);
}
