import { useState } from 'react';
import './ProductForm.css'


function ProductForm(props){

    const [newTitle,setTitle] = useState('');
    const [newDate,setDate] = useState('');


    function titleChangeHandler(event){
        // console.log(event.target.value);
        setTitle(event.target.value);
       // console.log(event.target.value)
    }

    function dateChangeHandler(event){
        setDate(event.target.value)
        //console.log(event.target.value)
        // console.log('printing');
        // console.log(title);
        // console.log(date);    
        }

        function submitHandler(event){
            event.preventDefault();

            const productData ={
                title:newTitle,
                date:newDate
            };
            props.onSaveProduct(productData);
            console.log(productData);
            setTitle('');
            setDate('');


        }

    return(
        <form onSubmit={submitHandler}>
            <div className='new-product_title'>
                <label >Title</label>
                <input type='text' value={newTitle} onChange={titleChangeHandler}></input>
            </div>
            <div className='new-product_date'>
                <label>Date</label>
                <input type='date'value={newDate} onChange={dateChangeHandler}  min='2025-01-01'max='2025-12-31'></input>
         </div>
         <div className='new-product_button'>
         <button type='submit'>Add Product</button>
         </div>

        </form>
    )
}

export default ProductForm;