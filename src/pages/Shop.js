import { Link } from "react-router-dom";

function Shop() {
    return (
        <div>
            <h1>Shop Items</h1>
            <Link className="adminaddbtn" to="/AddItem">Add</Link> <br />
            <table className="table" width="100%">
                <thead>
                    <th className="th">
                        Name
                    </th>
                    <th className="th">
                        Actions
                    </th>
                </thead>
                <tbody>
                    <tr>
                        <td className="td">
                            test
                        </td>
                        <td className="td">

                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Shop;