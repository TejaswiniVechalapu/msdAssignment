const express=require('express');

const users=require('./data');

const path=require('path');

const app=express();

const idFilter = req => member => member.id === parseInt(req.params.id);

// Body Parser Middleware

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname,'public')));

//GET All USERS

app.get('/api/data',(req,res)=>res.json(data));

//GET Specific USER Based on ID

app.get('/api/data/table', (req, res) => {

    const tableHtml=`
    <style>
        table{
            width=80%
            border-collapse:Collapse;
            margin:0 auto;
        }
        th,td{
            padding:8px;
            text-align:left;
            border:ipx;
        }
        th{
            background-color:Green;
        }
    <style>
    <table>
        <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Character</th>
            </tr>
        </thead>
        <tbody>
            ${data.map(data =>`
                <tr>
                    <td>${data.Id}</td>
                    <td>${data.Name}</td>
                    <td>${data.Character}</td>
                </tr>
                `).join('')}
        </tbody>
    </table>`;
    res.send(tableHtml);
});
