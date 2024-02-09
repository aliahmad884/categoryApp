import { Button } from "react-bootstrap";
import "./home.css";
import { Link } from "react-router-dom";
export default function Empty() {
    return (
        <>
            <div className="cont">
                <div className="empty">
                    <h1><strong><i class="fa-solid fa-hand fa-beat-fade fa-2xl"></i>  Sorry !</strong></h1>&nbsp;&nbsp;
                    <h2>There are no items in this Category.</h2>
                    <div>
                        {/* <h3> Click back to return categories!</h3> */}
                        <Button type="button" variant="info"><Link to="/category" className="text-dark styleLink"><i className="fa solid fa-arrow-circle-left"></i> Categories</Link></Button>
                    </div>
                </div>
            </div>
        </>
    )
}