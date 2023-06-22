import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import axios from 'axios';
// npm i material-react-table
import { MaterialReactTable } from 'material-react-table';
//npm i @mui/material
import {
    Box,
    IconButton,
    Tooltip,
    TextField,
    Button
  } from '@mui/material';
// npm i @mui/icons-material
import { Delete, Edit } from '@mui/icons-material';

const CrudCateg = () => {
  const [data, setData] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [inputImage, setInputImage] = useState('');
  const [editIndex, setEditIndex] = useState(null);
  const inputRef = useRef(null);

  const URL = "https://backend-ecommerce-2023.vercel.app/api/categories"
 
const fetchCategories = useCallback(async () => {
    try {
      const response = await axios.get(URL);
     setData(response.data);
    } catch (error) {
      console.error('Error fetching articles:', error);
    }
  }, []);

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

 
  const handleAdd = useCallback(() => {
    if (inputValue.trim() === '') return;
        const objectCateg={
            nomcategorie: inputValue,
            imagecategorie: inputImage
        }
     //faire le add dans la BD
 axios.post(URL,objectCateg)  
 .then(res => {  
   const response = res.data;  
   //MAJ de la liste affichéé
   setData((prevData) => [response,...prevData]);
   setInputValue('');
   setInputImage('')
   inputRef.current.focus();
 })    
 
  }, [inputValue,inputImage]);

  const handleEdit = useCallback((index) => {
    setEditIndex(index);
    setInputValue(data[index].nomcategorie);
    setInputImage(data[index].imagecategorie);
    inputRef.current.focus();
  }, [data]);

  const handleUpdate = useCallback(() => {
    if (inputValue.trim() === '') return;

     setData((prevData) => {
      const newData = [...prevData];

      //connaitre l'id relatif à l'index de la ligne choisie
    var valueAtIndex = newData.at(editIndex); console.log(valueAtIndex._id)

    const objectCateg={
        _id:valueAtIndex._id,
        nomcategorie: inputValue,
        imagecategorie: inputImage
    }

    //update dans la BD
    axios.put(URL + '/' + valueAtIndex._id, objectCateg)
    .then(res => {  
      console.log(res.data);  
    })

      newData[editIndex] = objectCateg;
      return newData;
    });

    setEditIndex(null);
    setInputValue('');
    setInputImage('');
    inputRef.current.focus();

   
  }, [editIndex, inputValue,inputImage]);

  const handleDelete = useCallback((index) => {
    setData((prevData) => {
      const newData = [...prevData];
     
      //connaitre l'id relatif à l'index de la ligne choisie
      var valueAtIndex = newData.at(index); console.log(valueAtIndex._id)

      //faire le delete dans la BD
      axios.delete(`${URL}/${valueAtIndex._id}`)  
      .then(res => {  
        console.log(res.data);  
      })  

      //MAJ liste affichée
      newData.splice(index, 1);
      return newData;
    });
  }, []);

  const handleCancelEdit = useCallback(() => {
    setEditIndex(null);
    setInputValue('');
    setInputImage('');
    inputRef.current.focus();
  }, []);


  const columns = useMemo(
    () => [
        {
        accessorKey: 'nomcategorie',
        header: 'Nom',
        size: 100,
        muiTableHeadCellProps: {
          align: 'center',
        },
        muiTableBodyCellProps: {
          align: 'center',
        },
      },
      {
        accessorKey: 'imagecategorie',
        header: 'Image',
        Cell: ({ cell }) => <img src={cell.getValue()} alt="" width="100" height="100" />,
      },
    ],
    [],
  );


  const renderedItems = useMemo(() => {
    return <MaterialReactTable columns={columns} data={data}
    displayColumnDefOptions={{
        'mrt-row-actions': {
          muiTableHeadCellProps: {
            align: 'center',
          },
          size: 120,
        },
      }}
      enableColumnOrdering
      enableEditing
    renderRowActions={({ row, table }) => (
        <Box sx={{ display: 'flex', gap: '1rem' }}>
          <Tooltip arrow placement="left" title="Edit">
            <IconButton onClick={() => handleEdit(row.index)}>
              <Edit />
            </IconButton>
          </Tooltip>
          <Tooltip arrow placement="right" title="Delete">
            <IconButton color="error" onClick={() => handleDelete(row.index)}>
              <Delete />
            </IconButton>
          </Tooltip>
        </Box>
      )}
    />
   
  }, [data, handleEdit, handleDelete,columns]);

  return (
    <div>
      <h1>CRUD Catégories</h1>
      <Box sx={{ display: 'flex', gap: '1rem' }}>
      <TextField
        label="Nom"
        value={inputValue}
        onChange={(event)=> setInputValue(event.target.value)}
        ref={inputRef}
      />
      <TextField
        label="Image"
        fullWidth
        value={inputImage}
        onChange={(event)=> setInputImage(event.target.value)}
        ref={inputRef}
      />
      {editIndex !== null ? (
        <>
          <Button onClick={handleUpdate} variant="contained" color="primary">Update</Button>
          <Button onClick={handleCancelEdit} variant="contained" color="warning">Cancel</Button>
        </>
      ) : (
       <Button onClick={handleAdd} variant="contained" color="success">Add</Button>
      )}
      </Box>
      <ul>{renderedItems}</ul>
    </div>
  );
};

export default CrudCateg;