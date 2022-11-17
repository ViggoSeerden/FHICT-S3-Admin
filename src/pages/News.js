import { Link, Navigate } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import axios from "axios";
import NewsCard from "../components/NewsCard";

function EditNews(id) {
    if (localStorage.getItem("NewsId")) {
        localStorage.removeItem("NewsId");
    }
    localStorage.setItem("NewsId", id);
    Navigate("/EditNews");
}

var displaylist = [];

async function LoadNews() {
    var apiResponse = await axios.get('https://localhost:7019/api/News/GetAll');
    console.log(apiResponse);
    var list = apiResponse.data.value;
    
    /*var mytable = document.getElementById("table");
    for (let i = 0; i < apiResponse.data.value.length; i++) {
        const row = mytable.insertRow(-1);
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        let func = EditNews(apiResponse.data.value[i].id);

        cell1.innerHTML = apiResponse.data.value[i].title;
        cell1.classList.add('td');
        cell2.innerHTML = "<button class='admineditbtn' id='" + {func} + "'>Edit</button>";
        cell2.classList.add('td');
    }*/

    for (let i = 0; i < list.length; i++){
        console.log(list[i]['title']);
        displaylist.push(<NewsCard title={list[i]['title']} key={i}></NewsCard>);
        displaylist.push(<br key={i + "br"}/>);
    }

    console.log(displaylist);

    const root = ReactDOM.createRoot(document.getElementById('a'));
    root.render(displaylist);
}

LoadNews();

function News() {
    return (
        <div>
            <h1 style={{ textAlign: "center" }}>News</h1>
            <Link className="adminaddbtn" to="/AddNews">Add</Link> <br /> <br />
            <div id="a">
            </div>
        </div>
    );
}

export default News;