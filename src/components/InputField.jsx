export const InputField = ({ type, value, onChange, labelName }) => {
	return (
		<div className="vertical">
			<label>{`${labelName}: `}</label>
			<input
				type={type}
				value={value}
				onChange={onChange}
			/>
		</div>
	);
}
