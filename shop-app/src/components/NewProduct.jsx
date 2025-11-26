import './NewProduct.css'
import ProductForm from './ProductForm';

function NewProduct(props){

    function saveProduct(product){
        console.log('im inside new product')
        console.log(product)
        //calling parent function
        props.vaishnavi(product)
    }
    return(
        <div className='new-product'>
            <ProductForm onSaveProduct={saveProduct}/>
        </div>
    )

}

export default NewProduct;