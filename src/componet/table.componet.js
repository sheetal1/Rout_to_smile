import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ImageListItem from '@mui/material/ImageListItem';
import AddProductForm from './addProductFrom';
import {useDispatch} from 'react-redux';
// import {deleteProduct} from '../action/item.action';
//import jsonData from './data.json';

function TableData(itemdata) {
const dispatch = useDispatch();
const [ProductData, setProductData] = useState(itemdata.data);
console.log("itemdata",itemdata);
console.log("ProductData",ProductData);

function deleteProduct(id){
    setProductData((ProductData) =>
      ProductData.filter((fruit) => fruit.id !== id)
    );
}

const tableRows = ProductData.map((info) => {
	return (
        <TableRow
        key={info.id}
        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
        <TableCell component="th" scope="row">{info.id}</TableCell>
        <TableCell>
            <ImageListItem>
                <img
                    src={`${info.thumbnail}?w=100&h=100&fit=crop&auto=format`}
                    srcSet={`${info.thumbnail}?w=100&h=100&fit=crop&auto=format&dpr=2 2x`}
                    alt={info.title}
                    loading="lazy"
                    width="50"
                    height="50"
                    />
            </ImageListItem>
        </TableCell>
        <TableCell align="center">{info.title}</TableCell>
        <TableCell align="center">{info.description}</TableCell>
        <TableCell align="center">{info.price}</TableCell>
        <TableCell align="center">
        {/* <button>View</button> */}
        <button className="btn btn-outline-danger" onClick={()=>(deleteProduct(info.id))} >Delete</button>
        </TableCell>
	    </TableRow>
	);
});

const addRows = (data) => {
	const totalProduct = ProductData.length;
	data.id = totalProduct + 1;
	const updatedProductData = [...ProductData];
	updatedProductData.push(data);
	setProductData(updatedProductData);
};

return (
	<div>
     <TableContainer component={Paper}>    
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
            <TableRow>
                <TableCell>ID</TableCell>
                <TableCell align="center">Thumbnail</TableCell>
                <TableCell align="center">Title</TableCell>
                <TableCell align="center">Description</TableCell>
                <TableCell align="center">Price</TableCell>
                <TableCell align="center">Action</TableCell> 
            </TableRow>
        </TableHead>
        <TableBody>{tableRows}</TableBody>
        </Table>
    </TableContainer>
	<AddProductForm func={addRows} />
	</div>
);
}

export default TableData;
