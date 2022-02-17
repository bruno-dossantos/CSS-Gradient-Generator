import "./Picker.css";

const Picker = (props) => {
    return (
        <input { ...props} type="color" className="picker"></input>
    )
};

export default Picker;