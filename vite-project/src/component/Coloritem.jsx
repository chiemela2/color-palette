const Coloritem = ({ color, setcolor})=><div onClick={setcolor} className="color-item" style={{'--bg-color': `${color}` }} ></div>


export default Coloritem;