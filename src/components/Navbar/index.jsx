const Navbar = ({onIncrease, onDecrease}) => {
    const number = 10

    return ( 
        <div>
            <button onClick={() => onIncrease(number)}>tambahkan </button> <br />
            <button onClick={() => onDecrease(number)}>kurangkan</button>
        </div>
     );
}
 
export default Navbar;