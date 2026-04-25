import { Fragment } from "react";



//Fragment  waxaad u isticmaaleysaa inaad ka fogato div fara bdn oo aad u hesho cleaan code 
function student(props) {
    return (
        <Fragment>

        <p>Name: {props.name}  </p>
        <p>Age: {props.age}  </p>
        <p>IsStudent: {props.isStudent}</p>
        </Fragment>



    );
}

export default student